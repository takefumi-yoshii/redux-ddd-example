// @flow

import { List } from 'immutable'
import { TodosModel } from '~/models/todos'
import { TodoViewModel } from '~/models/todoView'

export class TodosViewModel extends TodosModel({}) {
  getSortedTodosList (): List<TodoViewModel> {
    const n = this.getSortType()
    switch (n) {
      case 0 :
        return this.getSortedTodosListByCreatedAt()
      case 1 :
        return this.getSortedTodosListByUpdatedAt()
      case 2 :
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
