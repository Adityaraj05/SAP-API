
const user = require('../models/users'); 

const users = async(req, res) =>{
     const myData = await user.find(req.query);
    res.status(200).json({myData});
};

const usersTesting = async(req, res) =>{
    res.status(200).json({msg:"Details of the users Testing"})
};

module.exports = {users, usersTesting};