module.exports = {
//==================GET REQUESTS==================
  getBlogPosts: function(req,res){
    const db = req.app.get('db');
    console.log("GetBlogPosts Successful!")
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
  },
  getClasses: function(req,res){
    const db = req.app.get('db');
    console.log('here')
    db.get_classes()
      .then((classes) => res.status(200).send(classes))
      .catch((err) => res.status(500).send(err))
  },
  getBlogById: function(req,res){
    const db = req.app.get('db');
    const {blogid} = req.params;

    db.get_blogs_by_id([blogid])
      .then((blog) => res.status(200).send(blog))
      .catch((err) => res.status(500).send(err))
  },
  getEventById: function(req,res){
    const db = req.app.get('db');
    const {eventid} = req.params

    db.get_events_by_id([eventid])
      .then((event) => res.status(200).send(event))
      .catch((err) => res.status(500).send(err))
  },
  getVolunteerById: function(req,res){
    const db = req.app.get('db');
    const {volunteerid} = req.params

    db.get_volunteer_by_id([volunteerid])
      .then((volunteer) => res.status(200).send(volunteer))
      .catch((err) => res.status(500).send(err))
  },
  getMedia: function(req, res){
    const db = req.app.get('db');

    db.get_media()
      .then((media) => res.status(200).send(media))
      .catch((err) => res.status(500).send(err))
  },
  getMediaById: function(req, res){
    const db = req.app.get('db');
    const {id} = req.params;

    db.get_media_by_id([id])
    .then(media => res.status(200).send(media))
    .catch(err => res.status(500).send(err))
  },
  //=============POST========================


  postEvent: function(req,res){
    let month_num;
    let month_end_num;
    const db = req.app.get('db');
    const {type,
      title,
      subtitle,
      thumbnail,
      day,
      month,
      year,
      startHour,
      startMinute,
      endHour,
      endMinute,
      endDay,
      endMonth,
      endYear} = req.body;

      switch (month) {
        case 'January':
          month_num = 1;
          break;
        case 'February':
          month_num = 2;
          break;
        case 'March':
          month_num = 3;
          break;
        case 'April':
          month_num = 4;
          break;
        case 'May':
          month_num = 5;
          break;
        case 'June':
          month_num = 6;
          break;
        case 'July':
          month_num = 7;
          break;
        case 'August':
          month_num = 8;
          break;
        case 'September':
          month_num = 9;
          break;
        case 'October':
          month_num = 10;
          break;
        case 'November':
          month_num = 11;
          break;
        case 'December':
          month_num = 12;
          break;

        default:break;
      }

      switch (endMonth) {
        case 'January':
          month_end_num = 1;
          break;
        case 'February':
          month_end_num = 2;
          break;
        case 'March':
          month_end_num = 3;
          break;
        case 'April':
          month_end_num = 4;
          break;
        case 'May':
          month_end_num = 5;
          break;
        case 'June':
          month_end_num = 6;
          break;
        case 'July':
          month_end_num = 7;
          break;
        case 'August':
          month_end_num = 8;
          break;
        case 'September':
          month_end_num = 9;
          break;
        case 'October':
          month_end_num = 10;
          break;
        case 'November':
          month_end_num = 11;
          break;
        case 'December':
          month_end_num = 12;
          break;

        default:break;
      }

    console.log(type, title, thumbnail, year, month, day, month_num, startHour, startMinute, endHour, endMinute,subtitle, endDay, endMonth, endYear, month_end_num)

    db.post_add_event([type, title, thumbnail, year, month, day, month_num, startHour, startMinute, endHour, endMinute,subtitle,endDay, endMonth, endYear, month_end_num ])
        .then( (response) => {
          res.status(200).send('sentSuccessfully')} )
        .catch( (err) => {
          res.status(500).send(err)} )
  },

  postVolunteer: function(req,res){
    const db = req.app.get('db');
    const {name, email, title, profilePic, facebookLink, twitterLink, linkedInLink, summary} = req.body

    console.log(name, email, title, profilePic, facebookLink, twitterLink, linkedInLink, summary)

    db.post_add_volunteer([name, email, title, profilePic, facebookLink, twitterLink, linkedInLink, summary])
      .then( (response) => {
        res.status(200).send('sentSuccessfully')} )
      .catch( (err) => {
        res.status(500).send(err)} )

  },

  postQuote: function(req,res){
    const db = req.app.get('db');
    const {quoteContent, quoteAuthor, quoteSubtitle} = req.body;

    db.post_add_quote([quoteContent, quoteAuthor, quoteSubtitle])
      .then( (response) => {
        res.status(200).send('sentSuccessfully')} )
      .catch( (err) => {
        res.status(500).send(err)} )
  },

  postMedia: function(req, res){
    const db = req.app.get('db');
    const {media_url, is_picture, description, post_time} = req.body;

    db.post_media([media_url, is_picture, description, post_time]).then(response => {
      res.status(200).send('sentSuccessfully')
    }).catch(err => {
      res.status(500).send(err)
    })
  },

  postNewPost: function(req,res){

    let month_num;
    const db = req.app.get('db');
    const {postContent, postThumbnail, postTitle,  year, month, day, blogImage, blogSubtitle} = req.body
    switch (month) {
      case 'January':
        month_num = 1;
        break;
      case 'February':
        month_num = 2;
        break;
      case 'March':
        month_num = 3;
        break;
      case 'April':
        month_num = 4;
        break;
      case 'May':
        month_num = 5;
        break;
      case 'June':
        month_num = 6;
        break;
      case 'July':
        month_num = 7;
        break;
      case 'August':
        month_num = 8;
        break;
      case 'September':
        month_num = 9;
        break;
      case 'October':
        month_num = 10;
        break;
      case 'November':
        month_num = 11;
        break;
      case 'December':
        month_num = 12;
        break;

      default:break;
    }

    console.log(100, postContent, postThumbnail, postTitle, year, month, day, month_num, blogImage, blogSubtitle)
    db.post_add_posts([100, postContent, postThumbnail, postTitle, year, month, day, month_num, blogImage, blogSubtitle])
    .then( (response) => {
      res.status(200).send('sentSuccessfully')} )
    .catch( (err) => {
      res.status(500).send(err)} )
  },


  //===============PUT REQUESTS===================

  putEvent: function(req,res){
    let month_num;
    let month_end_num;
    const db = req.app.get('db');
    const {eventid} = req.params;
    const {type,
      title,
      subtitle,
      day,
      month,
      year,
      startHour,
      startMinute,
      endHour,
      endMinute,
      endDay,
      endMonth,
      endYear} = req.body;

      switch (month) {
        case 'January':
          month_num = 1;
          break;
        case 'February':
          month_num = 2;
          break;
        case 'March':
          month_num = 3;
          break;
        case 'April':
          month_num = 4;
          break;
        case 'May':
          month_num = 5;
          break;
        case 'June':
          month_num = 6;
          break;
        case 'July':
          month_num = 7;
          break;
        case 'August':
          month_num = 8;
          break;
        case 'September':
          month_num = 9;
          break;
        case 'October':
          month_num = 10;
          break;
        case 'November':
          month_num = 11;
          break;
        case 'December':
          month_num = 12;
          break;

        default:break;
      }

      switch (endMonth) {
        case 'January':
          month_end_num = 1;
          break;
        case 'February':
          month_end_num = 2;
          break;
        case 'March':
          month_end_num = 3;
          break;
        case 'April':
          month_end_num = 4;
          break;
        case 'May':
          month_end_num = 5;
          break;
        case 'June':
          month_end_num = 6;
          break;
        case 'July':
          month_end_num = 7;
          break;
        case 'August':
          month_end_num = 8;
          break;
        case 'September':
          month_end_num = 9;
          break;
        case 'October':
          month_end_num = 10;
          break;
        case 'November':
          month_end_num = 11;
          break;
        case 'December':
          month_end_num = 12;
          break;

        default:break;
      }
    console.log(eventid, type, title, year, month, day, month_num, startHour, startMinute, endHour, endMinute,subtitle,endDay, endMonth, endYear, month_end_num)

    db.put_edit_event([eventid, type, title, year, month, day, month_num, startHour, startMinute, endHour, endMinute,subtitle,endDay, endMonth, endYear, month_end_num ])
    .then( (response) => {
      res.status(200).send('sentSuccessfully')} )
    .catch( (err) => {
      res.status(500).send(err)} )

  },

  putVolunteer: function(req,res){ //NO PROFILE DO NOT FORGET
    const db = req.app.get('db');
    const {volunteerid} = req.params;
    const {name, email, title, facebookLink, twitterLink, linkedInLink, summary} = req.body;

    console.log(volunteerid, name, email, title, facebookLink, twitterLink, linkedInLink, summary);
    db.put_edit_volunteer([volunteerid, name, email, title, facebookLink, twitterLink, linkedInLink, summary])
    .then( (response) => {
      res.status(200).send('sentSuccessfully')} )
    .catch( (err) => {
      res.status(500).send(err)} )
  },

  // putVolunteerProfilePic: function(req,res){
  //   const db = req.app.get('db');
  //   const {volunteerid} = req.params;
  //  const {newurl} = req.body
  //  db.put_edit_volunteer_profile_pic([volunteerid, newurl])
  // .then( (response) => {
  //   res.status(200).send('sentSuccessfully')} )
  // .catch( (err) => {
  //   res.status(500).send(err)} )
  // },

  putUserAdmin: function(req,res){
    const db = req.app.get('db');
    const {userid} = req.params;
    const {userName, adminStatus} = req.body;


    db.put_edit_user([userid, userName, adminStatus])
    .then( (response) => {
      res.status(200).send('sentSuccessfully')} )
    .catch( (err) => {
      res.status(500).send(err)} )
  },

  // putUserProfilePic: function(req,res){
  //   const db = req.app.get('db');
  //   const {userid} = req.params;
  //  const {newurl} = req.body;

  //  db.put_edit_user_profile_pic([userid, newurl])
  // .then( (response) => {
  //   res.status(200).send('sentSuccessfully')} )
  // .catch( (err) => {
  //   res.status(500).send(err)} )
  // },

  putPost: function(req,res){
    const db = req.app.get('db');
    const {postid} = req.params;
    const {postContent, postTitle, postSubTitle} = req.body;

    db.put_edit_post([postid, postContent, postTitle, postSubTitle])
    .then( (response) => {
      res.status(200).send('sentSuccessfully')} )
    .catch( (err) => {
      res.status(500).send(err)} )
  },

  putMedia: function(req, res){
    const db = req.app.get('db');
    const {id} = req.params;
    const {media_url, is_picture, description, post_time} = req.body;

    db.put_edit_media([id, media_url, is_picture, description, post_time])
    .then(response => {
      res.status(200).send('sentSuccessfully')
    }).catch(err => {
      res.status(500).send(err)
    })
  },



  //===============DELETE REQUESTS===================
  deletePost: function(req,res){
    const db = req.app.get('db');
    const {postid} = req.params

    db.delete_posts([postid])
    .then( (response) => {
      res.status(200).send('sentSuccessfully')} )
    .catch( (err) => {
      res.status(500).send(err)} )
  },

  deleteVolunteer: function(req,res){
    const db = req.app.get('db');
    const {volunteerid} = req.params

    db.delete_volunteer([volunteerid])
    .then( (response) => {
      res.status(200).send('sentSuccessfully')} )
    .catch( (err) => {
      res.status(500).send(err)} )

  },
  deleteMedia: function(req,res){
    const db = req.app.get('db');
    const {mediaid} = req.params
    console.log(mediaid)

    db.delete_media([mediaid])
    .then( (response) => {
      res.status(200).send('sentSuccessfully')} )
    .catch( (err) => {
      res.status(500).send(err)} )

  },


  deleteEvent: function(req,res){
    const db = req.app.get('db');
    const {eventid} = req.params

    db.delete_event([eventid])
    .then( (response) => {
      res.status(200).send('sentSuccessfully')} )
    .catch( (err) => {
      res.status(500).send(err)} )
  },

  deleteQuote: function(req,res){
    const db = req.app.get('db');
    const {quoteid} = req.params

    db.delete_quote([quoteid])
    .then( (response) => {
      res.status(200).send('sentSuccessfully')} )
    .catch( (err) => {
      res.status(500).send(err)} )
  }


}
