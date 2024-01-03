const mongoose = require('mongoose');
const { Schema } = mongoose;

const TaskSchema = new Schema({
    description: String,
    isDone: {
        type: Schema.Types.Boolean,
        default: false
    },
    date_added: {
        type: Schema.Types.Date,
        default: new Date()
    }
  });

const TaskModel = mongoose.model('Task', TaskSchema);

module.exports = {
    TaskModel
}