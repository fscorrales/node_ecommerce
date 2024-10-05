import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  hash_password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['admin', 'seller', 'customer'],
    default: 'customer'
  },
  image: {
    type: String,
    required: false
  },
  deactivated_at: {
    type: Date,
    required: false
  }
}, {
  versionKey: false
})

userSchema.statics.getDeleted = function () {
  return this.find({ deactivated_at: { $ne: null } })
}

userSchema.statics.getNotDeleted = function () {
  return this.find({ deactivated_at: { $eq: null } })
}

export default mongoose.model('User', userSchema)
