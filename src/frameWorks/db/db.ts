/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */

import { config } from 'dotenv'
import { DataSource } from 'typeorm'

config()

export class DataBase {
  private static _intance: DataBase

  private readonly appDataSource: DataSource

  constructor () {
    const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env
    this.appDataSource = new DataSource({
      type: 'postgres',
      host: PGHOST,
      port: 5432,
      password: PGPASSWORD,
      database: PGDATABASE,
      username: PGUSER,
      entities: [],
      synchronize: true,
      logging: true,
      ssl: { rejectUnauthorized: false }
    })
  }

  public async connectBD (): Promise<DataSource | undefined> {
    try {
      await this.appDataSource.initialize()
      return this.appDataSource
    } catch (error) {
      console.log('error de conexion Bd ' + error)
      return undefined
    }
  }

  public static get Instance (): DataBase {
    if (!DataBase._intance) {
      DataBase._intance = new DataBase()
    }
    return DataBase._intance
  }
}
