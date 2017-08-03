// @flow

import { Record } from 'immutable'

const props = (def: any) => {
  const p: TodosFormModelSchema = {
    input: '',
    ...def
  }
  return p
}
export const TodosFormModel = (def: any) => class extends Record(props(def)) {
  getInput (): string {
    return this.get('input')
  }
  // setter

  updateInput (value: string): TodosModel {
    return this.set('input', value)
  }
}
