const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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
    coverPhoto: {
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

// Método para hashear la contraseña antes de guardarla
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

module.exports = mongoose.model('User', userSchema);


// *New LogIn

// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true }
// });

// const User = mongoose.model('User', userSchema);

// module.exports = User;
