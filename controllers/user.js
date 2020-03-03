const user = require('../models/user');

module.exports = {
    signup
};

 async function signup(req, res) {
     try {
         const user = await user.create(req.body);
         res.json(user);
     } catch (error) {
        res.status(400).json(error);
         
     }

}