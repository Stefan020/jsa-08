const cfg = require('./pkg/config');
require('./pkg/db');

const express = require('express');
const bodyParser = require('body-parser');
const auth = require('./handlers/auth');


const api = express();

api.use(bodyParser.json());

//create user account
api.post('/api/v1/auth', auth.create);

//user login
api.post('/api/v1/login', auth.login);

//refresh token
api.get('/api/v1/auth/refresh-token', auth.refreshToken);

//* forgot password
api.post('/api/vi/auth/forgot-password', auth.forgotPassword);

//* reset password
api.post('/api/vi/auth/reset-password', auth.resetPassword);

//* change password
api.post('/api/v1/auth/change-password', auth.changePassword);

//list all user accounts
api.get('/api/v1/auth/accounts', auth.listAccounts);

api.listen(cfg.get('server').port, err => {
    if(err){
        console.error('Could not start server:', err);
    }
    console.log('Server successfully started on port', cfg.get('server').port);
});