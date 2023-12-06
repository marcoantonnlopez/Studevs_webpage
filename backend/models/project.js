const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    id: String,
    name: String,
    logoLink: String,
    shortDescription: String,
    largeDescription: String,
    skills: [10],
    event:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    },
    videoLink: String,
    gitHubLink: String,
    AdditionaLink: String,

    Inspiration: String,
    whatDoesItDoes: String,
    howWeBuildIt: String,
    challengesWeRanInto: String,
    whatWeLearned: String,
    nextSteps: String,

    teamMembers: [{ //no sé cómo hacer esto
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    
});

module.exports = mongoose.model('Project', projectSchema);

