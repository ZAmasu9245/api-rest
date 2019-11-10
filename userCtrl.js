const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



module.exports = {
    register: function(req, res) {
        const email = req.body.email
        const username = req.body.username
        const password = req.body.password

        if(email === null || username === null || password === null) {
            return res.status(400).json({ 'error': 'missing parameters' })
        }

    },
    login: function(req, res) {

    }
}