// @flow

import { Record, List } from 'immutable'
import { TodoViewModel } from '~/models/todoView'

const props = (def: any) => {
  const p: TodosModelSchema = {
    list: List([]),
    input: '',
    priority: 0,
    sortType: 0,
    order: 1,
    ...def
  }
  return p
}

export const TodosModel = (def: any) => class extends Record(props(def)) {
  constructor (list: List<TodoViewModel> = List([])) {
    super()
    return this.set('list', list)
  }
  getTodosSize (): number {
    return this.get('list').length
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
  getTodosList (): List<TodoViewModel> {
    return this.get('list')
  }
  // setter

  pushTodo (): TodosModel {
    const task: string = this.get('input')
    if (task === '') return this
    const priority: number = this.get('priority')
    return this.update('list', list => list.push(new TodoViewModel({ task, priority })))
  }
  updateTodo (payload: { id: string, value: string }): TodosModel {
    const { id, value } = payload
    const index: number = this._getItemIndexByID(id)
    return this.updateIn(['list', index], (todo: TodoViewModel) => todo.updateTask(value))
  }
  deleteTodo (id: string): TodosModel {
    const index: number = this._getItemIndexByID(id)
    return this.update('list', list => list.delete(index))
  }
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
  // private

  _getItemIndexByID (id: string): number {
    return this.get('list').findIndex(v => v.getID() === id)
  }
}
