// @flow

import { Record } from 'immutable'
import { uuid } from '~/lib/helper/uuid'

const props = (def: any) => {
  const p: CRUD = {
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
  setUpdatedAt (): CRUDRecord {
    return this.set('updated_at', new Date())
  }
}

export default CRUDRecord
