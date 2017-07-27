// @flow

import CRUDRecord from '~/models/crud'

const props = (def: any) => {
  const p: TodoModelSchema = {
    task: '',
    priority: 0,
    ...def
  }
  return p
}

export const TodoModel = (def: any) => class extends CRUDRecord(props(def)) {
  constructor ({ task = 'MyTodo', priority = 0 }: { task: string, priority: number }) {
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
}
