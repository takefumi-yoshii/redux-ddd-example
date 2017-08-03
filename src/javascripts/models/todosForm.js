// @flow

import { Record } from 'immutable'

const props = (def: any) => {
  const p: TodosFormModelSchema = {
    input: '',
    priority: 0,
    sortType: 0,
    order: 1,
    ...def
  }
  return p
}
export const TodosFormModel = (def: any) => class extends Record(props(def)) {
  getInput (): string {
    return this.get('input')
  }
  getPriority (): string {
    return this.get('priority')
  }
  getSortType (): string {
    return this.get('sortType')
  }
  getOrder (): string {
    return this.get('order')
  }
  getOrderOffset (): number {
    return this.getOrder() ? 1 : -1
  }
  // setter

  updateInput (value: string): TodosModel {
    return this.set('input', value)
  }
  setPriority (index: number): TodosModel {
    return this.update('priority', o => index)
  }
  setSortType (index: number): TodosViewModel {
    return this.set('sortType', index)
  }
  setOrder (order: number): TodosViewModel {
    return this.set('order', order)
  }
}
