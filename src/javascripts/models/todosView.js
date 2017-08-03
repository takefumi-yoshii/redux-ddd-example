// @flow

import { List } from 'immutable'
import { TodosModel } from '~/models/todos'
import { TodoViewModel } from '~/models/todoView'

const props: TodosViewModelSchema = {
  orderOffset: 1,
  sortType: 'CreatedAt'
}

export class TodosViewModel extends TodosModel(props) {
  getOrderOffset (): number {
    return this.get('orderOffset')
  }
  getSortType (): string {
    return this.get('sortType')
  }
  getSortedTodosList (): List<TodoViewModel> {
    switch (this.getSortType()) {
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
  // setter

  setOrderOffset (order: number): TodosViewModel {
    const offset: number = order === 1 ? 1 : -1
    return this.set('orderOffset', offset)
  }
  setSortType (index: number): TodosViewModel {
    return this.set('sortType', index)
  }
}
