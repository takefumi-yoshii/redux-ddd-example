// @flow

import { Record, List, fromJS } from 'immutable'
import { TodoViewModel } from '~/models/todoView'

const props = (def: any) => {
  const p: TodosModelSchema = {
    list: List([]),
    ...def
  }
  return p
}

export const TodosModel = (def: any) => class extends Record(props(def)) {
  getTodosSize (): number {
    return this.get('list').length
  }
  getTodosList (): List<TodoViewModel> {
    return this.get('list')
  }
  getTodosListJS (): any[] {
    return this.getTodosList().toJS()
  }
  // setter

  restoreTodos (src: any[]): TodosModel {
    if (src === null) return this
    const deserializedList: List<TodoViewModel> = fromJS(src).map(m => {
      return new TodoViewModel({
        task: m.get('task'),
        priority: m.get('priority')
      })
      .restoreID(m.get('id'))
      .restoreCreatedAt(new Date(m.get('created_at')))
      .restoreUpdatedAt(new Date(m.get('updated_at')))
    })
    return this.set('list', deserializedList)
  }
  pushTodo ({ task, priority }: { task: string, priority: number }): TodosModel {
    if (task === '') return this
    return this.update('list', list => list.push(new TodoViewModel({ task, priority })))
  }
  updateTodo (payload: { id: string, value: string }): TodosModel {
    const { id, value } = payload
    const index: number = this._getItemIndexByID(id)
    return this.updateIn(['list', index], (todo: TodoViewModel) => todo.updateTask(value))
  }
  deleteTodo (id: string): TodosModel {
    const index: number = this._getItemIndexByID(id)
    return this.update('list', list => list.delete(index))
  }

  // private

  _getItemIndexByID (id: string): number {
    return this.get('list').findIndex(v => v.getID() === id)
  }
}
