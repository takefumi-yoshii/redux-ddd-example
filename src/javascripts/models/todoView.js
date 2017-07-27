// @flow

import { TodoModel } from '~/models/todo'
import { priorityLabels } from '~/models/todoPriorityLabels'

const props: TodoViewModelSchema = {
  priorityLabels
}

export class TodoViewModel extends TodoModel(props) {
  getPriorityLabel (): string {
    const n = this.getPriority()
    return this.get('priorityLabels')[n]
  }
  getFormattedLatestUpdateDate (): string {
    return this.getUpdatedAt().toLocaleString()
  }
}
