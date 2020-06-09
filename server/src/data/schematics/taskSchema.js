const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 255,
        required: true,
    },
    status: {
        type: String,
        default: ['Todo', 'Doing','Completed'],
    },
    property: {
        type: String,
        maxlength: 255,
    },
    comment: [{
        body: String,
        created_date: {
            type: Date,
            default: Date.now(),
        },
    }],
    body: String,
    created_date: {
        type: Date,
        default: Date.now(),
    },
    update_date: {
        type: Date,
        default: Date.now(),
    },
    projectId: mongoose.Types.ObjectId,
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task