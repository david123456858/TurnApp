/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */

import { config } from 'dotenv'
import { DataSource } from 'typeorm'

import { Users } from '@Entity/Users/users'
import { Saits } from '@Entity/Sait/saits'
import { Schedules } from '@Entity/Schedules/schedules'
import { Roles } from '@Entity/Role/roles'
import { Employes } from '@Entity/Employes/employes'

config()

// Estudiar el patron de diseño singleton
export class DataBase {
  private static _intance: DataBase

  private readonly appDataSource: DataSource

  constructor () {
    const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env // destrucuracion buen detalle
    this.appDataSource = new DataSource({
      type: 'postgres',
      host: PGHOST,
      port: 5432 /* Investigar sobre como colocar una variable de entorno como numero */,
      password: PGPASSWORD,
      database: PGDATABASE,
      username: PGUSER,
      entities: [Users, Roles, Saits, Schedules, Employes],
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
