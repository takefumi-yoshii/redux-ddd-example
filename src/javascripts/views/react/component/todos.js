// @flow

import { TodoItem } from '~/views/react/component/todoItem'
import type { TodoViewModel } from '~/models/todoView'

export function Todos ({ todos, todosFilter, updateTodo, deleteTodo }: { todos: TodosViewModel, todosFilter: TodosFilterViewModel, updateTodo: Function, deleteTodo: Function }) {
  const list: Array<any> = todos.getSortedTodosList()
  const items = list.map((item: TodoViewModel, i: number) => {
    const id = item.getID()
    const _props = { id, item, todosFilter, updateTodo, deleteTodo }
    return <TodoItem key={ id } { ..._props } />
  })
  return (
    <div className="todo-items">
      <ul className="list-group">
        { items }
      </ul>
    </div>
  )
}
