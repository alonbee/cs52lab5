import mongoose, { Schema } from 'mongoose';

const bcrypt = require('bcryptjs');

// create a PostSchema with a title field
const UserSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,
});

// This provides a mapping to id from _id
UserSchema.set('toJSON', {
  virtuals: true,
});

  //  note use of named function rather than arrow notation
  //  this arrow notation is lexically scoped and prevents binding scope, which mongoose relies on
UserSchema.methods.comparePassword = function comparePasswords(candidatePassword, callback) {
  const user = this;
    // return callback(null, comparisonResult) for success
    // or callback(error) in the error case
  bcrypt.compare(candidatePassword, user.password, function resultOfCompare(err, res) {
    if (err) return callback(err);
    callback(null, res);
  });
};

// create UserModel class from schema.

UserSchema.pre('save', function beforeYourModelSave(next) {
  // this is a reference to our model
  // the function runs in some other context so DO NOT bind it
  const user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // Async: Generate a salt and then hash user.password with the salt.
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) { return next(err); } else {
            // overwrite plain text password with encrypted password
        user.password = hash;
        next();
      }
    });
  });
});


const User = mongoose.model('User', UserSchema);

export default User;
