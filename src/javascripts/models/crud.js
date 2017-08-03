// @flow

import { Record } from 'immutable'
import { uuid } from '~/lib/helper/uuid'

const props = (def: any) => {
  const p: CRUDSchema = {
    id: 0,
    created_at: 0,
    updated_at: 0,
    ...def
  }
  return p
}

const CRUDRecord = (def: any) => class extends Record(props(def)) {
  constructor (arg: any) {
    super(arg)
    return this.set('id', uuid())
               .set('created_at', new Date())
               .set('updated_at', new Date())
  }
  getID (): string {
    return this.get('id')
  }
  getCreatedAt (): Date {
    return this.get('created_at')
  }
  getUpdatedAt (): Date {
    return this.get('updated_at')
  }
  // setter

  updateUpdatedAt (): CRUDRecord {
    return this.update('updated_at', n => new Date())
  }
  restoreID (id: string): CRUDRecord {
    return this.update('id', n => id)
  }
  restoreCreatedAt (date: Date): CRUDRecord {
    return this.update('created_at', n => date)
  }
  restoreUpdatedAt (date: Date): CRUDRecord {
    return this.update('updated_at', n => date)
  }
}

export default CRUDRecord
