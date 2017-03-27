let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let bcrypt = require('bcryptjs')
const SALT_FACTOR = 10

let schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  // Relations
  user: { type: ObjectId, ref: models.user.name },
  keeps: [{ type: ObjectId, ref: models.keep.name }]
})