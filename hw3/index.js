const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const api = express();

api.use(bodyParser.json());

let userData = [];

api.post('/users', (req,res) => {
    userData = [...userData, req.body];
    const data = JSON.stringify(userData);
    fs.writeFile('userData.json', data, err => {
        if(err) {
            throw err;
        };
        console.log(userData);
    });
    res.status(201).send(req.body);
});

api.get('/users', (req,res) => {
  fs.readFile('userData.json', 'utf-8',(err,data) => {
      if(err){
          throw err;
      }
      const user = JSON.parse(data.toString());
      console.log(user);
  });
  res.status(200).send(userData);
});

api.get('/users/:id', (req,res) =>{
    fs.readFile('userData.json', 'utf-8', (err,data) => {
        if(err){
            throw err;
        }
        const user = JSON.parse(data.toString());
        console.log(user);
    });
    res.status(200).send(userData);
});

api.put('/users/:id', (req,res) => {
    userData[req.params.id] = req.body;
    const data = JSON.stringify(userData);
    fs.writeFile('userData.json', data, err => {
        if(err) {
            throw err;
        };
        console.log(userData);
    });
    res.status(204).send(req.body);
});

api.patch('/users/:id', (req,res) => {
    userData[req.params.id] = req.body;
    const content = JSON.stringify(userData);
    fs.appendFile('userData.json',content, err =>{
        if(err) {
            throw err;
        };
        console.log('patch')
    });
    res.status(202).send(userData);
})

api.delete('/users/:id', (req, res) => {
    fs.truncate('userData.json', 0, err =>{
        if(err){
            throw err;
        };
        userData[req.params.id] = req.body.delete;
        console.log('delete');
    });
    res.status(200).send('user deleted')
})


api.listen('8000', err => {
    if(err){
       return console.log(err);
    }
    console.log(`Server successfully started on port 8000`);
})