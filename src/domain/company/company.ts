import { model, Schema } from 'mongoose'

const companySchema = new Schema({
  nombre: { type: String, required: true }
})

export const company = model('company', companySchema)
