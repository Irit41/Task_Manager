const mongoose = require('mongoose');
// const validator = require('validator');

const taskSchema = new mongoose.Schema({
    description: {
      type: String,
      required: true,
      trim: true

    },
    
    completed: {
      type: Boolean,
      required: true,
      defult: false,
   
    }
    
  });
  const Task = mongoose.model('Task', taskSchema);
  module.exports = Task
