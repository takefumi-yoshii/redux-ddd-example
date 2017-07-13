// @flow

import CRUDRecord from '~/models/crud'

const props: Todo = {
  task: ''
}

export default class TodoModel extends CRUDRecord(props) {
  constructor (task: string = 'MyTodo') {
    super()
    return this.set('task', task)
  }
  getTask (): string {
    return this.get('task')
  }
  getFormattedLatestUpdateDate (): string {
    return this.getUpdatedAt().toLocaleString()
  }
}
