require('dotenv').config();
var express = require('express');
var massive = require('massive');
var bodyParser = require('body-parser');
var userController = require('./userController');
var Auth0Strategy = require('passport-auth0');
var session = require('express-session');
var passport = require('passport');
var cors = require('cors');
// var config = require('./config')
var app = module.exports = express();
var port = 8080;





app.use(cors());

app.use(session({
  resave: true, //Without this you get a constant warning about default values
  saveUninitialized: true, //Without this you get a constant warning about default values
  secret: 'asdjfa;klsdjfladsfjkadfs;lkj'
}))
// app.use( express.static( `${__dirname}/../build` ) );
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());

const connectionString = process.env.CONNECTION_STRING;
massive( connectionString ).then( db => {
  console.log("DB Connected");
  app.set('db', db)
  // db.initTables.initTables()
  // .then( response => {
  //   console.log('User table init'); })
}).catch(err=>console.log(err));

//=========Auth0 setup

passport.use(new Auth0Strategy({
   domain:       process.env.DOMAIN,
   clientID:     process.env.ID,
   clientSecret: process.env.SECRET,
   callbackURL:  '/auth/callback'
  },
  function(accessToken, refreshToken, extraParams, profile, done) {
    let db = app.get('db');
    //Find user in database
    db.get_user_by_auth([profile.id])
    .then(
      (user) => {
        user = user[0];
        if (!user) { //if there isn't one, we'll create one!
          console.log('CREATING USER');
          db.create_user_by_auth([profile.id,profile.displayName,profile.picture])
          .then((user) => {
            console.log('USER CREATED', user);
            return done(null, user[0]); // GOES TO SERIALIZE USER
          })
          .catch((err) => console.log(err))
        }
        return done(null, profile)
      }
    )
    .catch((err) => console.log(err))
  }
));

passport.serializeUser(function(user, done) {
  //Things you might do here :
   //Serialize just the id, get other information to add to session,
  done(null, user); //PUTS 'USER' ON THE SESSION
});

//USER COMES FROM SESSION - THIS IS INVOKED FOR EVERY ENDPOINT
passport.deserializeUser(function(user, done) {

  //Things you might do here :
    // Query the database with the user id, get other information to put on req.user
  done(null, user); //PUTS 'USER' ON REQ.USER
});

app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback',
  passport.authenticate('auth0', {successRedirect: process.env.LOGIN_SUCCESS_REDIRECT1}), function(req, res) {
    res.status(200).send(req.user);
})

app.get('/auth/me', function(req, res) {

  res.status(200).send(req.user);
})

app.get('/auth/logout', function(req, res) {
  req.logout();
  res.redirect(process.env.LOGOUT_SUCCESS_REDIRECT1);
})

app.get('/api/hello', function(req, res){
  console.log('the end point hits', req.user)
  res.json(req.user);
})

//===========Twitter API setup
var error = function (err, response, body) {
    console.log('ERROR [%s]', err);
};
var success = function (data) {
    console.log('Data [%s]', data);
};

var Twitter = require('twitter-node-client').Twitter;


var config = {
    "consumerKey": process.env.TWITTER_CONSUMERKEY,
    "consumerSecret": process.env.TWITTER_CONSUMERSECRET,
    "accessToken": process.env.TWITTER_ACCESSTOKEN,
    "accessTokenSecret": process.env.TWITTER_TOKENSECRET,
    // "callBackUrl":

}

var twitter = new Twitter(config);

app.get('/api/getUserTimeLine', function(req, res){
  console.log('endpoint hit')
  twitter.getUserTimeline({ screen_name: 'ElSistemaPGH', count: '10'}, error, results => {
    console.log(results)
    return res.send(results)});
})



//===========Twitter API setup Ends Here

app.listen(port, ()=> {
  console.log('server is running on port ' + port );
})

// const path = require('path')
// app.get('*', (req, res)=>{
// res.sendFile(path.join(__dirname, '..','build','index.html'));
// })
