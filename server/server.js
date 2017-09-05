require('dotenv').config();
var express = require('express');
var awsController = require('./awsController');
var massive = require('massive');
var bodyParser = require('body-parser');
var userController = require('./userController');
var Auth0Strategy = require('passport-auth0');
var session = require('express-session');
var passport = require('passport');
var cors = require('cors');
var stripe = require('stripe')('sk_test_LkNfgMLBoBD50f69BBQYPnni')
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
    const db = app.get('db');
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





//=============GET REQUESTS =====================
app.get('/api/blogs', userController.getBlogPosts)
app.get('/api/events', userController.getEvents)
app.get('/api/media', userController.getMedia)
app.get('/api/users', userController.getUsers)
app.get('/api/volunteers', userController.getVolunteers)
app.get('/api/quote', userController.getQuote)
app.get('/api/performances', userController.getPerformances)
app.get('/api/classes', userController.getClasses)
app.get('/api/events/:eventid', userController.getEventById)
app.get('/api/blogs/:blogid', userController.getBlogById)
app.get('/api/volunteers/:volunteerid',userController.getVolunteerById)


//===============POST REQUESTS===================
app.post('/api/events', userController.postEvent)
app.post('/api/volunteers', userController.postVolunteer)
app.post('/api/quote', userController.postQuote)
app.post('/api/post', userController.postNewPost)
//AWS
app.post('/api/getSignedURL', awsController.getSignedURL)

//===============PUT REQUESTS===================
app.put('/api/events/:eventid', userController.putEvent)
app.put('/api/volunteers/:volunteerid', userController.putVolunteer)
// app.put('/api/volunteers/profilePic/:volunteerid')
app.put('/api/users/:userid', userController.putUserAdmin)
// app.put('/api/users/profilePic/:userid')
app.put('/api/posts/:postid', userController.putPost)

//===============DELETE REQUESTS===================
app.delete('/api/posts/:postid', userController.deletePost)
app.delete('/api/volunteers/:volunteerid', userController.deleteVolunteer)
app.delete('/api/media/:mediaid', userController.deleteMedia)
app.delete('/api/events/:eventid', userController.deleteEvent)
app.delete('/api/quote/:quoteid', userController.deleteQuote)



//===============STRIPE PAYMENT===================
app.post('/api/payment', function(req, res, next){
  //convert amount to pennies
  const amountArray = req.body.amount.toString().split('');
  const pennies = [];
  for (var i = 0; i < amountArray.length; i++) {
    if(amountArray[i] === ".") {
      if (typeof amountArray[i + 1] === "string") {
        pennies.push(amountArray[i + 1]);
      } else {
        pennies.push("0");
      }
      if (typeof amountArray[i + 2] === "string") {
        pennies.push(amountArray[i + 2]);
      } else {
        pennies.push("0");
      }
    	break;
    } else {
    	pennies.push(amountArray[i])
    }
  }
  const convertedAmt = parseInt(pennies.join(''));
console.log(req.body.token.token.id, 'this is the token id')
  const charge = stripe.charges.create({
  amount: convertedAmt, // amount in cents, again
  currency: 'usd',
  source: req.body.token.token.id,
  description: 'Test charge from react app'
}, function(err, charge) {
    if (err) {
      console.log(err)
      res.sendStatus(500)
    } else
    return res.sendStatus(200);
  // if (err && err.type === 'StripeCardError') {
  //   // The card has been declined
  // }
});
});
//===============STRIPE PAYMENT ENDS===================


// const path = require('path')
// app.get('*', (req, res)=>{
// res.sendFile(path.join(__dirname, '..','build','index.html'));
// })
