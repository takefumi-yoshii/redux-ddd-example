// @flow

import { Record, List } from 'immutable'
import TodoModel from '~/models/todo'

const props: Todos = {
  list: List([]),
  input: ''
}

export default class TodosModel extends Record(props) {
  constructor (list: List<Array<TodoModel>> = List([])) {
    super()
    return this.set('list', list)
  }
  getTodosSize (): number {
    return this.get('list').length
  }
  getTodosList (): List<TodoModel> {
    return this.get('list')
  }
  pushTodo (): TodosModel {
    const task: string = this.get('input')
    if (task === '') return this
    return this.update('list', list => list.push(new TodoModel(task)))
  }
  deleteTodo (index: number): TodosModel {
    return this.update('list', list => list.delete(index))
  }
  updateTodo (payload: { index: number, value: string }): TodosModel {
    const { index, value } = payload
    return this.updateIn(['list', index], (todo: TodoModel) => todo.updateTask(value))
  }
  updateInput (value: string): TodosModel {
    return this.set('input', value)
  }
}
