const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: String,
    logoLink: String,
    shortDescription: String,
    largeDescription: String,
    // skills: [String],
    // eventId:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Event'
    // },
    videoLink: String,
    gitHubLink: String,
    AdditionaLink: String,

    Inspiration: String,
    whatDoesItDoes: String,
    howWeBuildIt: String,
    challengesWeRanInto: String,
    whatWeLearned: String,
    nextSteps: String,

    // teamMembers: [{ 
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // }],
});

module.exports = mongoose.model('Project', projectSchema);

