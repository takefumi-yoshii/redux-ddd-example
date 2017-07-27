// @flow

import { List } from 'immutable'
import { TodosModel } from '~/models/todos'
import { TodoViewModel } from '~/models/todoView'
import { priorityLabels } from '~/models/priorityLabels'
import { sortTypeLabels } from '~/models/sortTypeLabels'

const props: TodosViewModelSchema = {
  priorityLabels,
  sortTypeLabels
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
  getPrioritySelectLabel (): InnerHTMLString {
    const label = this.getPriorityLabel()
    return { __html: `priority [ ${label} ] <span class="caret"></span>` }
  }
  getSortTypeSelectLabel (): InnerHTMLString {
    const label = this.getSortTypeLabel()
    return { __html: `sort [ ${label} ] <span class="caret"></span>` }
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
    const descending = this.get('descending')
    return this.getTodosList().sort((a: TodoViewModel, b: TodoViewModel): any => {
      const _a = a.getCreatedAt().getTime()
      const _b = b.getCreatedAt().getTime()
      if (_a < _b) { return descending }
      if (_a > _b) { return descending * -1 }
      if (_a === _b) { return 0 }
    })
  }
  getSortedTodosListByUpdatedAt (): List<TodoViewModel> {
    const descending = this.get('descending')
    return this.getTodosList().sort((a: TodoViewModel, b: TodoViewModel): any => {
      const _a = a.getUpdatedAt().getTime()
      const _b = b.getUpdatedAt().getTime()
      if (_a < _b) { return descending }
      if (_a > _b) { return descending * -1 }
      if (_a === _b) { return 0 }
    })
  }
  getSortedTodosListByPriority (): List<TodoViewModel> {
    const descending = this.get('descending')
    return this.getTodosList().sort((a: TodoViewModel, b: TodoViewModel): any => {
      const _a = a.getPriority()
      const _b = b.getPriority()
      if (_a < _b) { return descending }
      if (_a > _b) { return descending * -1 }
      if (_a === _b) { return 0 }
    })
  }
}
