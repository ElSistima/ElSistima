module.exports = {
//==================GET REQUESTS==================
  getBlogPosts: function(req,res){
    const db = req.app.get('db');

    db.get_blog_posts()
      .then( (posts) => {
        res.status(200).send(posts)} )
      .catch( (err) => {
        res.status(500).send(err)} )
  },
  getUsers: function(req,res){
    const db = req.app.get('db');

    db.get_users()
      .then( (users) => {
        res.status(200).send(users)} )
      .catch( (err) => {
        res.status(500).send(err)} )
  },
  getEvents: function(req,res){
    const db = req.app.get('db');

    db.get_events()
      .then( (events) => {
        res.status(200).send(events)} )
      .catch( (err) => {
        res.status(500).send(err)} )

  },
  getPerformances: function(req,res){
    const db = req.app.get('db');

    db.get_performances()
      .then( (performances) => {
        res.status(200).send(performances)} )
      .catch( (err) => {
        res.status(500).send(err)} )
  },
  getVolunteers: function(req,res){
    const db = req.app.get('db');

    db.get_volunteers()
      .then( (volunteers) => {
        res.status(200).send(volunteers)} )
      .catch( (err) => {
        res.status(500).send(err)} )
  },
  getQuote: function(req,res){
    const db = req.app.get('db');

    db.get_quote()
        .then( (quote) => {
          res.status(200).send(quote)} )
        .catch( (err) => {
          res.status(500).send(err)} )
  }

}
