// @flow

import { TodosFilterModel } from '~/models/todosFilter'

const props: TodosFilterViewModelSchema = {
  priorityLabels: ['Low', 'Middle', 'High'],
  sortTypeLabels: ['Created', 'Updated', 'Priority'],
  orderLabels: ['Ascending', 'Descending']
}

export class TodosFilterViewModel extends TodosFilterModel(props) {
  getPriorityLabels (): string[] {
    return this.get('priorityLabels')
  }
  getSortTypeLabels (): string[] {
    return this.get('sortTypeLabels')
  }
  getOrderLabels (): string[] {
    return this.get('orderLabels')
  }
  getPriorityLabel (): string {
    const n = this.getPriority()
    return this.get('priorityLabels')[n]
  }
  getSortTypeLabel (): string {
    const n = this.getSortType()
    return this.get('sortTypeLabels')[n]
  }
  getOrderLabel (): string {
    const n = this.getOrder()
    return this.get('orderLabels')[n]
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
  getPriorityLabelByLevel (level: number): string {
    return this.getPriorityLabels()[level]
  }
}
