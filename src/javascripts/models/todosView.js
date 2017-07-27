// @flow

import { TodosModel } from '~/models/todos'
import { priorityLabels } from '~/models/priorityLabels'

const props: TodosViewModelSchema = {
  priorityLabels
}

export class TodosViewModel extends TodosModel(props) {
  getPriorityLabel (): string {
    const n = this.getPriority()
    return this.get('priorityLabels')[n]
  }
  getPriorityLabels (): string[] {
    return this.get('priorityLabels')
  }
  getPrioritySelectLabel (): InnerHTMLString {
    const label = this.getPriorityLabel()
    return { __html: `priority [ ${label} ] <span class="caret"></span>` }
  }
}
