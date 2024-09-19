import { model, Schema } from 'mongoose'

const companySchema = new Schema({
  nameCompany: { type: String, required: true },
  nit: { type: String, unique: true }
})

export const company = model('company', companySchema)
