const cfg = require('./pkg/config');

const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('express-jwt');
const upload = require('express-fileupload');
const storage = require('./handlers/storage');

const api = express();

//

api.use(bodyParser.json());
api.use(jwt({
    secret: cfg.get('server').jwt_key,
    algorithms: ['HS256']
}));

api.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send('BAD JWT');
    }
});

api.use(upload({
    limits: { fileSize: 50 * 1024 * 1024 }
}));

api.post('/api/v1/storage', storage.storeFile);
api.get('/api/v1/storage/:fid', storage.getFile);
api.post('/api/v1/storage/public', storage.storagePublic);
api.get('/api/v1/storage/public/:fid', storage.getAllFile);

api.listen(cfg.get('server').port, err => {
    if (err) {
        return console.log(err);
    }
    console.log(`Server successfully started on port ${cfg.get('server').port}`)
});