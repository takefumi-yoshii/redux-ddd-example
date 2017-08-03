// @flow

import { TodoModel } from '~/models/todo'

export class TodoViewModel extends TodoModel({}) {
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
