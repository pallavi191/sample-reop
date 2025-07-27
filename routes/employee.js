const express = require('express');
const router = express.Router();

const { EmployeeRepo } = require('../models/employee');

const routeHandler = require('../helpers/routeHandler')

router.get('/hello', (req, res) => {
    routeHandler.invoke(res, async () => {
        return "hello";
    })
})

// login
router.post('login', async(req, res) => {
    routeHandler.invoke(res, async () => {
        const { email, password } = req.body;
        const emp = await employee.findByEmail(email);
        if(!emp)
        throw new Error('Give Email is not registered!');

        const pass = await bcrypt.hash(String(password), 10);

        if(pass != password)
        throw new Error('Password is incorrect!');

        var accessToken = jsonWebToken.sign({ exp: '1D', data: { Username: email, Password: pass, Role: 'user', Id: emp._id } }, process.env.JWT);
        emp= JSON.parse(JSON.stringify(emp));

        let options = { maxAge: 1000 * 60 * 60 * 24 * 30, httpOnly: false, signed: false, domain: process.env.cookie_host, path: '/' };

        res.cookie('email', String(emp._id), options)
        res.cookie('accessToken', accessToken, options)
        res.cookie('isAuth', "true", options)
    })
})

// add emp

// get all emp

// get emp

// update emp

// delete emp
module.exports = router;