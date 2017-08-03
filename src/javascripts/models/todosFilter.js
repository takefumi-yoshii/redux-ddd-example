// @flow

import { Record } from 'immutable'

const props = (def: any) => {
  const p: TodosFilterModelSchema = {
    priority: 0,
    sortType: 0,
    order: 1,
    ...def
  }
  return p
}

export const TodosFilterModel = (def: any) => class extends Record(props(def)) {
  getPriority (): string {
    return this.get('priority')
  }
  getSortType (): string {
    return this.get('sortType')
  }
  getOrder (): string {
    return this.get('order')
  }
  getTodosFilterJS (): any {
    return this.toJS()
  }
  // setter

  restoreTodosFilter (src: any): TodosFilterModel {
    if (src === null) return this
    return this.setPriority(src.priority).setSortType(src.sortType).setOrder(src.order)
  }
  setPriority (index: number): TodosFilterModel {
    return this.set('priority', index)
  }
  setSortType (index: number): TodosFilterModel {
    return this.set('sortType', index)
  }
  setOrder (order: number): TodosFilterModel {
    return this.set('order', order)
  }
}
