const mongoose = require('mongoose');

let username = 'stefan';
let password = 'ngolokante7';
let dbname = 'students';

let dsn = `mongodb+srv://${username}:${password}@cluster0.omvde.mongodb.net/${dbname}?retryWrites=true&w=majority`

mongoose.connect(
    dsn,
  {
    useNewUrlParser: true,
    useUnifiedTopology:true
  },
  err =>{
      if(err){
          return console.log('Could not connect to database: ', err);
      }
      console.log('Successfully connected to database');
  }
);
