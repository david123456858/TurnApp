import { IcrudRepository } from '../../adapters/interface/repository/crudRepository'
import ruleModel from '../../adapters/models/repository/rules/rules.model'
import { rules } from '../../domain/rules/rules'

export class repositoryRules implements IcrudRepository<rules> {
  async save (data: rules): Promise<any> {
    await ruleModel.create(data)
    return 'Se guardo correctamente'
  }

  async update (data: rules): Promise<any> {
    const ruleUpdated = await ruleModel.findOneAndUpdate({ nameRule: data.nameRule }, { $set: data }, { new: true })
    return ruleUpdated
  }

  async delete (id: string): Promise<any> {
    const ruleDeleted = ruleModel.deleteOne({ idRule: id })
    return await ruleDeleted
  }

  async findById (id: string): Promise<any> {
    const ruleFind = ruleModel.findOne({ idRule: id })
    return await ruleFind
  }

  async findAll (): Promise<any> {
    const rulesFinds = ruleModel.find()
    return await rulesFinds
  }

  async findByNameRule (data: string): Promise<any> {
    const ruleFind = await ruleModel.findOne({ nameRule: data })
    return ruleFind
  }
}
