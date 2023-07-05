const mongoose = require('mongoose');

const account = new mongoose.Schema({
    username:{
        type:'String',
        require:true
    },
    password:{
        type:'String',
        require:true
    },
    numberPhone:{
        type:'String',
        require:true
    },
    email:{
        type:'String',
        require:true
    },
    address:{
        type:'String',
        require:true
    },
    role:{
        type:'String',
        require:true
    }
})

const accountModel = mongoose.model('accountmodel', account);
module.exports = { accountModel }