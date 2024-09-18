import { connect, Mongoose } from 'mongoose'
import { URI } from '../../adapters/config/dbConfig'

export class dbBase {
  private static _intanceDb: dbBase

  public async connectDb (): Promise<void | Mongoose> {
    try {
      const client = await connect(URI)
      return client
    } catch (error) {
      console.log('error db: ', error)
    }
  }

  public static get instance (): dbBase {
    if (this._intanceDb !== null) {
      return (this._intanceDb = new dbBase())
    }
    return this._intanceDb
  }
}
