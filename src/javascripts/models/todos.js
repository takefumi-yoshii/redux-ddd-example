// @flow

import { Record, List } from 'immutable'
import { TodoViewModel } from '~/models/todoView'

const props = (def: any) => {
  const p: TodosModelSchema = {
    list: List([]),
    input: '',
    priority: 0,
    ...def
  }
  return p
}

export const TodosModel = (def: any) => class extends Record(props(def)) {
  constructor (list: List<Array<TodoViewModel>> = List([])) {
    super()
    return this.set('list', list)
  }
  getTodosSize (): number {
    return this.get('list').length
  }
  getTodosList (): TodoViewModel[] {
    return this.get('list')
  }
  getPriority (): string {
    return this.get('priority')
  }
  pushTodo (): TodosModel {
    const task: string = this.get('input')
    if (task === '') return this
    const priority: number = this.get('priority')
    return this.update('list', list => list.push(new TodoViewModel({ task, priority })))
  }
  updateTodo (payload: { index: number, value: string }): TodosModel {
    const { index, value } = payload
    return this.updateIn(['list', index], (todo: TodoViewModel) => todo.updateTask(value))
  }
  deleteTodo (index: number): TodosModel {
    return this.update('list', list => list.delete(index))
  }
  updateInput (value: string): TodosModel {
    return this.set('input', value)
  }
  setPriority (index: number): TodosModel {
    return this.update('priority', o => index)
  }
}
