// @flow

import { Record, List } from 'immutable'
import { TodoViewModel } from '~/models/todoView'

const props = (def: any) => {
  const p: TodosModelSchema = {
    list: List([]),
    input: '',
    priority: 0,
    sortType: 0,
    descending: 1,
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
  getTodosList (): List<TodoViewModel> {
    return this.get('list')
  }
  getPriority (): string {
    return this.get('priority')
  }
  getSortType (): string {
    return this.get('sortType')
  }
  getDescending (): string {
    return this.get('descending')
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
    return this.updateIn(['list', this._getItemIndexByID(id)], (todo: TodoViewModel) => todo.updateTask(value))
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
  setDescending (descending: number): TodosViewModel {
    return this.set('descending', descending)
  }
  // private
  
  _getItemIndexByID (id: string): number {
    return this.get('list').findIndex(v => v.getID() === id)
  }
}
