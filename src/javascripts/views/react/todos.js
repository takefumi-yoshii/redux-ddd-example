// @flow

import { Component } from 'react'
import { connectedProvider } from '~/lib/react/middleware'
import { creators } from '~/redux/todos'
import { TodoModel } from '~/models/todo'
import { TodoItem } from '~/views/react/todo'
import type { Store } from 'redux'

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
    <div className="navbar-default navbar-collapse collapse">
      <ul className="nav navbar-nav navbar-right">
        <li className="dropdown">
          <a role="button" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">priority [ High ] <span className="caret" /></a>
          <ul className="dropdown-menu" role="menu">
            <li><a href="#">High</a></li>
            <li><a href="#">Middle</a></li>
            <li><a href="#">Low</a></li>
          </ul>
        </li>
      </ul>

      <form className="navbar-form navbar-right" onSubmit={ e => e.preventDefault() } >
        <input className="form-control" type="text" onChange={ (e) => updateInput(e.target.value) } />
        <button className="btn btn-primary active" onClick={ () => pushTodo() }>add todo</button>
      </form>
      
    </div>
  )
}

function TodoItems (props: { todos: TodosModel, updateTodo: Function, deleteTodo: Function }) {
  const { todos, updateTodo, deleteTodo } = props
  const list: Array<any> = todos.getTodosList()
  const items = list.map((item: TodoModel, i: number) => {
    const _props = { key: item.getID(), index: i, item, updateTodo, deleteTodo }
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
