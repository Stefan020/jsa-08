const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://stefan:ngolokante7@cluster0.omvde.mongodb.net/students?retryWrites=true&w=majority",
  {useNewUrlParser: true, useUnifiedTopology:true},
  err =>{
      if(err){
          return console.log('Could not connect to database: ', err);
      }
      console.log('Successfully connected to database');
  }
);

const Student = mongoose.model(
    'students',
    {
        first_name: String,
        last_name: String,
        gpa: Number
    },
    'students'
);

let s = new Student({
    first_name: "Pero",
    last_name: "Perovski",
    gpa:9.8,
});

s.save(err => {
    if(err){
        return console.log('Save error: ', err);
    }
    console.log('Successfully saved student');
});

Student.find({}, (err, data) => {
   if(err){
       console.log('Find error: ',err);
   }
   console.log(data);
});

Student.updateOne({ _id: "5fc944a9b7c81f58a432ad8f" }, {first_name: 'Ivan'}, (err, data) => {
    if(err){
        return console.log('Update error: ', err);
    }
    console.log(data);
});
Student.deleteOne({ _id: "5fc944a9b7c81f58a432ad8f"}, (err,data) => {
    if(err){
        return console.log('Delete error: ', err);
    }
    console.log(data)
});