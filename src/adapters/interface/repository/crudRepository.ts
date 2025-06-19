/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { IsearchRepository } from './searcRepository'

export interface IcrudRepository<T> extends IsearchRepository<T> {
  save: (data: T) => Promise<void | Error>
  update: (data: T) => Promise<T | Error>
  delete: (id: string) => Promise<T | Error>
}
