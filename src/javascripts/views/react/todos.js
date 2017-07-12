// @flow

import { Component } from 'react'
import { connectedProvider } from '~/lib/react/middleware'
import { creators } from '~/redux/todos'
import { TodoItem } from '~/views/react/todo'
import type { Store } from 'redux'
import TodoModel from '~/models/todo'

export default function ReactTodos (store: Store<*, *>, dataset: Map<*, *>) {
  return connectedProvider(TodosContainer, store, dataset, creators)
}

export class TodosContainer extends Component {
  render () {
    return (
      <div className="todo-container">
        <TodoForm { ...this.props } />
        <TodoItems { ...this.props } />
      </div>
    )
  }
}

function TodoForm (props: { pushTodo: Function, updateInput: Function }) {
  const { pushTodo, updateInput } = props
  return (
    <form onSubmit={ e => e.preventDefault() } >
      <div className="input-group">
        <input className="form-control" type="text" onChange={ (e) => updateInput(e.target.value) } />
        <span className="input-group-btn">
          <button className="btn btn-primary" onClick={ () => pushTodo() }>add todo</button>
        </span>
      </div>
    </form>
  )
}

function TodoItems (props: { todos: TodosModel, updateTodo: Function, deleteTodo: Function }) {
  const { todos, updateTodo, deleteTodo } = props
  const list: Array<any> = todos.getTodosList()
  const items = list.map((item: TodoModel, i: number) => {
    const index: number = i
    const key: string = item.getID()
    const task: string = item.getTask()
    const date: string = item.getUpdatedAt().toLocaleString()
    const _props = { key, index, task, date, updateTodo, deleteTodo }
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
