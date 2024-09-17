import { MongoClient, ServerApiVersion } from 'mongodb'
import { URI } from '../../adapters/config/dbConfig'

export class dbBase {
  private static _intanceDb: dbBase
  appDb!: MongoClient

  constructor () {
    this.appDb = new MongoClient(URI, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
      }
    })
  }

  public async connectDb (): Promise<void | MongoClient> {
    try {
      await this.appDb.connect()
      await this.appDb.db('TurnApp').command({ ping: 1 })
      return this.appDb
    } catch (error) {
      console.log('error db: ', error)
    } finally {
      await this.appDb.close()
    }
  }

  public static get instance (): dbBase {
    if (this._intanceDb !== null) {
      return (this._intanceDb = new dbBase())
    }
    return this._intanceDb
  }
}

export const client = new MongoClient(URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})
