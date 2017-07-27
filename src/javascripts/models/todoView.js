// @flow

import { TodoModel } from '~/models/todo'
import { priorityLabels } from '~/models/priorityLabels'

const props: TodoViewModelSchema = {
  priorityLabels
}

export class TodoViewModel extends TodoModel(props) {
  getPriorityLabel (): string {
    const n: number = this.getPriority()
    return this.get('priorityLabels')[n]
  }
  getFormattedCreatedDate (): string {
    return this.getCreatedAt().toLocaleString()
  }
  getFormattedLatestUpdateDate (): string {
    return this.getUpdatedAt().toLocaleString()
  }
  getPriorityLabelClassName (): string {
    const labelNames: string[] = ['label label-info', 'label label-warning', 'label label-danger']
    return labelNames[this.getPriority()]
  }
}
