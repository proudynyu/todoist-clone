const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    description: {
        type: String,
        maxlength: 255,
    },
    author: String,
    created_at: {
        type: Date,
        default: Date.now(),
    },
    update_at: {
        type: Date,
        default: Date.now(),
    },
    taskId: [{
        type: mongoose.Types.ObjectId;
    }]
});

const Project = mongoose.model('Projects', ProjectSchema);

module.exports = Project;