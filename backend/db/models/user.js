const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      Validate(value){
        if (!validator.isEmail(value)) {
          throw new Error('age is not valid')
  
        }
       
  
      }
    },
    password : {
      type: String,
      required: true,
      trim: true,
      minlength: [7, 'Password must be at least 7 characters long'], // Minimum length is 7 characters
      validate(value){
        if (value.toLowerCase().includes("password")) {
          throw new Error('Password cannot contain the word "password"');
        }
      }
    },
  
    age: {
      type: Number,
      required: true,
      min: [1, 'Minimum age must be 1'], // Minimum age is 18
      max: [120, 'Maximum age must be 120'] // Maximum age is 120
    }
  });
  const User = mongoose.model('User', userSchema);
  module.exports = User
