// @flow

import CRUDRecord from '~/models/crud'

const props: TodoSchema = {
  task: ''
}

export class TodoModel extends CRUDRecord(props) {
  constructor (task: string = 'MyTodo') {
    super()
    return this.set('task', task)
  }
  getTask (): string {
    return this.get('task')
  }
  updateTask (value: string): TodoModel {
    return this.set('task', value).setUpdatedAt()
  }
  getFormattedLatestUpdateDate (): string {
    return this.getUpdatedAt().toLocaleString()
  }
}
