// @flow

import { Component } from 'react'
import { connectedProvider } from '~/lib/react/middleware'
import { creators } from '~/redux/todos'
import { TodoViewModel } from '~/models/todoView'
import { TodoItem } from '~/views/react/todo'
import { TodosForm } from '~/views/react/todosForm'
import type { Store } from 'redux'

export default function ReactTodos (store: Store<*, *>, dataset: Map<*, *>) {
  return connectedProvider(TodosContainer, store, dataset, creators)
}

export class TodosContainer extends Component {
  render () {
    return (
      <div className="todo-container">
        <TodosForm  { ...this.props } />
        <TodoItems { ...this.props } />
      </div>
    )
  }
}

function TodoItems (props: { todos: TodosViewModel, updateTodo: Function, deleteTodo: Function }) {
  const { todos, updateTodo, deleteTodo } = props
  const list: Array<any> = todos.getSortedTodosList()
  const items = list.map((item: TodoViewModel, i: number) => {
    const id = item.getID()
    const _props = { key: id, id, item, updateTodo, deleteTodo }
    return <TodoItem { ..._props } />
  })
  return (
    <div className="todo-items">
      <ul className="list-group">
        { items }
      </ul>
    </div>
  )
}
