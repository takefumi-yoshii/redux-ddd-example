// @flow

import CRUDRecord from '~/models/crud'

const props: TodoSchema = {
  task: '',
  priority: ''
}

export class TodoModel extends CRUDRecord(props) {
  constructor ({ task = 'MyTodo', priority = '' }: { task: string, priority: string }) {
    super()
    return this.set('task', task).set('priority', priority)
  }
  getTask (): string {
    return this.get('task')
  }
  getPriority (): string {
    return this.get('priority')
  }
  updateTask (value: string): TodoModel {
    return this.set('task', value).setUpdatedAt()
  }
  getFormattedLatestUpdateDate (): string {
    return this.getUpdatedAt().toLocaleString()
  }
}
