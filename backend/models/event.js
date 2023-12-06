const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    },
    coverPhoto: String,
    nAssistants: {
        type: Number,
        default: 0 // Valor por defecto para nAssistants
    },
    location: String,
    modality: {
        type: Boolean,
        default: false // Valor por defecto para modality (presencial)
    },
    description: {
        type: String,
        maxlength: 1000
    },
    videoLink: String,
    date: {
        type: Date,
        required: true
    },
    isPastEvent: {
        type: Boolean,
        default: false
    }
});

eventSchema.index({ name: 1, location: 1 });
// Método estático para obtener eventos futuros
eventSchema.statics.getFutureEvents = function() {
    return this.find({ date: { $gte: new Date() } }).sort({ date: 1 });
};

// Método estático para obtener eventos pasados
eventSchema.statics.getPastEvents = function() {
    return this.find({ date: { $lt: new Date() } }).sort({ date: -1 });
};

module.exports = mongoose.model('Event', eventSchema);
