// @flow

import { List } from 'immutable'
import { TodosModel } from '~/models/todos'
import { TodoViewModel } from '~/models/todoView'
import { priorityLabels } from '~/models/priorityLabels'
import { sortTypeLabels } from '~/models/sortTypeLabels'

const props: TodosViewModelSchema = {
  priorityLabels,
  sortTypeLabels,
  orderLabels: ['Ascending', 'Descending']
}

export class TodosViewModel extends TodosModel(props) {
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
  getSortedTodosList (): List<TodoViewModel> {
    switch (this.getSortTypeLabel()) {
      case 'Created' :
        return this.getSortedTodosListByCreatedAt()
      case 'Updated' :
        return this.getSortedTodosListByUpdatedAt()
      case 'Priority' :
        return this.getSortedTodosListByPriority()
      default :
        return this.getTodosList()
    }
  }
  getSortedTodosListByCreatedAt (): List<TodoViewModel> {
    const order = this.getOrderOffset()
    return this.getTodosList().sort((a: TodoViewModel, b: TodoViewModel): any => {
      const _a = a.getCreatedAt().getTime()
      const _b = b.getCreatedAt().getTime()
      if (_a < _b) { return order }
      if (_a > _b) { return order * -1 }
      if (_a === _b) { return 0 }
    })
  }
  getSortedTodosListByUpdatedAt (): List<TodoViewModel> {
    const order = this.getOrderOffset()
    return this.getTodosList().sort((a: TodoViewModel, b: TodoViewModel): any => {
      const _a = a.getUpdatedAt().getTime()
      const _b = b.getUpdatedAt().getTime()
      if (_a < _b) { return order }
      if (_a > _b) { return order * -1 }
      if (_a === _b) { return 0 }
    })
  }
  getSortedTodosListByPriority (): List<TodoViewModel> {
    const order = this.getOrderOffset()
    return this.getTodosList().sort((a: TodoViewModel, b: TodoViewModel): any => {
      const _a = a.getPriority()
      const _b = b.getPriority()
      if (_a < _b) { return order }
      if (_a > _b) { return order * -1 }
      if (_a === _b) { return 0 }
    })
  }
}
