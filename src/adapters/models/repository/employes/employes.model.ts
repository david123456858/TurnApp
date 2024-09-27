import { model, Schema } from 'mongoose'

const employeSchema = new Schema({
})

const employeModel = model('empleados', employeSchema)

export default employeModel
