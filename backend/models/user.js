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
    // Agrega otros campos según sea necesario
});

// Método para hashear la contraseña antes de guardarla
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

module.exports = mongoose.model('User', userSchema);
