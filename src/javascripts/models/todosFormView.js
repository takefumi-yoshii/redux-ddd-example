// @flow

import { TodosFormModel } from '~/models/todosForm'
import { priorityLabels } from '~/models/priorityLabels'
import { sortTypeLabels } from '~/models/sortTypeLabels'

const props: TodosFormViewModelSchema = {
  priorityLabels,
  sortTypeLabels,
  orderLabels: ['Ascending', 'Descending']
}

export class TodosFormViewModel extends TodosFormModel(props) {
  getPriorityLabel (): string {
    const n = this.getPriority()
    return this.get('priorityLabels')[n]
  }
  getPriorityLabels (): string[] {
    return this.get('priorityLabels')
  }
  getSortTypeLabel (): string {
    const n = this.getSortType()
    return this.get('sortTypeLabels')[n]
  }
  getSortTypeLabels (): string[] {
    return this.get('sortTypeLabels')
  }
  getOrderLabel (): string {
    const n = this.getOrder()
    return this.get('orderLabels')[n]
  }
  getOrderLabels (): string[] {
    return this.get('orderLabels')
  }
  getPrioritySelectLabel (): InnerHTMLString {
    const label = this.getPriorityLabel()
    return { __html: `priority [ ${label} ] <span class="caret"></span>` }
  }
  getSortTypeSelectLabel (): InnerHTMLString {
    const label = this.getSortTypeLabel()
    return { __html: `sort [ ${label} ] <span class="caret"></span>` }
  }
  getOrderSelectLabel (): InnerHTMLString {
    const label = this.getOrderLabel()
    return { __html: `order [ ${label} ] <span class="caret"></span>` }
  }
}
