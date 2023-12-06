const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    userType: {
        type: String,
        enum: ['miembro', 'admin', 'exadmin'],
        default: 'miembro'
    }
    ,
    name: {
        type: String, 
        default: ''  
    },
    lastname: {
        type: String, 
        default: ''  
    },
    profilePhoto: {
        type: String, 
        default: ''  
    },
    phrase: {
        type: String, 
        default: ''  
    },
    description: {
        type: String, 
        default: ''  
    },
    projects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    }],
    events: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    }],

});

module.exports = mongoose.model('User', userSchema);

