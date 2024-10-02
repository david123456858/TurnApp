import { Schema, model } from 'mongoose'

const ruleSchema = new Schema({
  // idRule: { type: String, unique: true },
  nameRule: { type: String, required: true, unique: true },
  numberTotal: { type: Number, required: true },
  description: { type: String },
  company: { type: Schema.Types.ObjectId, ref: 'users', required: true } // relation the many to one
})

const ruleModel = model('rules', ruleSchema)

export default ruleModel
