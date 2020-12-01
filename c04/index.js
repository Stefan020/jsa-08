//REST - rerepresentational state transfer -> JSON
//HTTP so nekoi plus pravila -> HTML

//GET -> zimanje podatoci od server
//POST -> kreiranje i dodavanje data na serverot
//PUT -> update na cel zapis
//PATCH -> da se napravi update na odreden del od zapisot 
//DELETE -> delete na data

//REST endpoints -> pateki do podatoci na REST serverot

//http://localhost:8080/[endpoint]
//http://localhost:8080/users

//POST http://localhost:8080/users -> zapisi korisnik vo users
//GET http://localhost:8080/users -> zemi gi site korisnici od users
//GET http://localhost:8080/users/:id -> zemi go userot so ID = :id od users
//PUT http://localhost:8080/users/:id -> azuriraj go userot so ID = :id od users
//PATCH http://localhost:8080/users/:id -> delumno azuriranje na userot so ID = :id od users
//DELETE http://localhost:8080/users/:id -> brisenje na userot so ID = :id od users


const express = require('express');
const bodyParser = require('body-parser');

let usersData = [];

const api = express();

api.use(bodyParser.json()); //ovozmozuva da citame JSON podatoci od req objektot

api.post('/users', (req, res) => {
    usersData = [...usersData, req.body];
    res.status(201).send(req.body);
});

api.get('/users', (req, res) => {
    res.status(200).send(usersData);
});

api.get('/users/:id', (req, res) => {
    if(!usersData[req.params.id]) {
        return res.status(404).send('Not Found');
    }
    res.status(200).send(usersData);
});

api.put('/users/:id', (req, res) => {
   if(!usersData[req.params.id]){
       return res.status(404).send("not found");
   }
   usersData[req.params.id] = req.body;
   res.status(204).send(usersData);
});


api.patch('/users/:id', (req, res) => {
    if (!usersData[req.params.id]) {
        return res.status(404).send('Not Found');
    }

    if (req.body.first_name && req.body.last_name) {
        return usersData[req.params.id] = req.body;
    }
    if (req.body.first_name) {
        return usersData[req.params.id].first_name = req.body.first_name;
    }
    if (req.body.last_name) {
        return usersData[req.params.id].last_name = req.body.last_name;
    }
    res.status(204).send(req.body);
});

api.delete('/users/:id', (req, res) => {
    if(!usersData[req.params.id]){
        return res.status(404).send("not found");
    }
    usersData[req.params.id] = req.body.delete;
    res.status(200).send('user deleted');
});
  

api.listen('9090', err => {
    if(err){
       return console.log(err);
    }
    console.log('Server successfully started on port 9090');
})