// @flow

import { Record, List } from 'immutable'
import { TodoModel } from '~/models/todo'

const props: TodosSchema = {
  list: List([]),
  input: '',
  priority: 0,
  priorityLabels: [
    'Low',
    'Middle',
    'High'
  ]
}

export class TodosModel extends Record(props) {
  constructor (list: List<Array<TodoModel>> = List([])) {
    super()
    return this.set('list', list)
  }
  getTodosSize (): number {
    return this.get('list').length
  }
  getTodosList (): Array<TodoModel> {
    return this.get('list')
  }
  getPriority (): string {
    const n = this.get('priority')
    return this.get('priorityLabels')[n]
  }
  getPriorityLabels (): Array<string> {
    return this.get('priorityLabels')
  }
  getPrioritySelectLabel (): InnerHTMLString {
    const label = this.getPriority()
    return { __html: `priority [ ${label} ] <span class="caret"></span>` }
  }
  pushTodo (): TodosModel {
    const task: string = this.get('input')
    if (task === '') return this
    const priority: string = this.getPriority()
    return this.update('list', list => list.push(new TodoModel({ task, priority })))
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
  setPriority (index: number): TodosModel {
    return this.update('priority', o => index)
  }
}
