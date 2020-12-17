const usersModel = require('../pkg/users');
const usersValidator = require('../pkg/users/validator');
const bcrypt = require('bcryptjs');

const create = async (req, res) => {
    // validate user data
    try {
        await usersValidator.validate(req.body, usersValidator.registrationSchema);
    } catch(err) {
        console.log(err);
        return res.status(400).send('Bad Request');
    }
    // check if user already exists in db
    try {
        let ru = await usersModel.getOneByEmail(req.body.email);
        if(ru) {
            return res.status(409).send('Conflict');
        }
    } catch(err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
    // mikimaus123 -> hashing -> dsj21ph98dj][0129j4hp9[8xh[x09j3[49hc[039jhc[08h3[c89h3
    req.body.password = bcrypt.hashSync(req.body.password);
    // set defaults
    req.body.active = true;
    req.body.role = 'user';
    req.body._created = new Date();
    req.body._deleted = false;
    // save user
    try {
        let u = await usersModel.save(req.body);
        res.status(201).send(u);
    } catch(err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
};

const login = async (req, res) => {
    // validate user data
    try {
        await usersValidator.validate(req.body, usersValidator.loginSchema);
    } catch (err) {
        console.log(err);
        return res.status(400).send('Bad Request');
    }
    // get user
    try {
        let ru = await usersModel.getOneByEmail(req.body.email);
        if (!ru) {
            return res.status(403).send('Forbidden');
        }
        if(bcrypt.compareSync(req.body.password, ru.password)) {
            return res.status(200).send('OK');
        }
        return res.status(401).send('Unauthorized');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
};

const refreshToken = async (req, res) => {
    res.status(200).send('ok');
};

const forgotPassword = async (req, res) => {
    res.status(200).send('ok');
};

const resetPassword = async (req, res) => {
    res.status(200).send('ok');
};

// homework (body = [old_password, email, new_password1, new_password2])
const changePassword = async (req, res) => {
    try {
        await usersValidator.validate(req.body, usersValidator.changePassSchema);
    } catch (err) {
        console.log(err);
        return res.status(400).send('Bad Request');
    }
    try {
        let ru = await usersModel.getOneByEmail(req.body.email);
        if (!ru) {
            return res.status(403).send('Forbidden');
        }
        if(bcrypt.compareSync(req.body.password, ru.password)) {
            console.log(ru.password);
            new_pass1 = req.body.newPassword;
            new_pass2 = req.body.confirmNewPass;
            if(new_pass1 === new_pass2){
                let pass =  bcrypt.hashSync(new_pass1);
                console.log(pass);
                let up = await ru.updateOne({password:pass});
                console.log(up);
                
                return res.status(200).send('Ok');
            }
            return res.status(400).send('Bad Request');
        }
        return res.status(401).send('Unauthorized');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Initial Server Error')
    }
};

// homework
const listAccounts = async (req, res) => {
    try {
        let data = await usersModel.getAll();
        return res.status(200).send(data);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Initial Server Error');
    }
};

module.exports = {
    create,
    login,  
    refreshToken,
    forgotPassword,
    resetPassword,
    changePassword,
    listAccounts
};