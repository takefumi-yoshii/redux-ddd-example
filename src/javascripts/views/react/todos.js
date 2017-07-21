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

function TodoForm ({ todos, pushTodo, updateInput, setPriority }: { todos: TodosModel, pushTodo: Function, updateInput: Function, setPriority: Function }) {
  return (
    <div className="navbar-default navbar-collapse collapse">
      <form className="navbar-form navbar-right" onSubmit={ e => e.preventDefault() } >
        <input className="form-control" type="text" onChange={ (e) => updateInput(e.target.value) } />
        <button className="btn btn-primary active" onClick={ () => pushTodo() }>add todo</button>
      </form>
      <ul className="nav navbar-nav navbar-right">
        <li className="dropdown">
          <a role="button"
            className="dropdown-toggle"
            data-toggle="dropdown"
            aria-expanded="false"
            dangerouslySetInnerHTML={ todos.getPrioritySelectLabel() }
          />
          <PriorityDropdown options={ todos.getPriorityLabels() } setPriority={ setPriority } />
        </li>
      </ul>
    </div>
  )
}

function PriorityDropdown ({ options, setPriority }: { options: Array<string>, setPriority: Function }) {
  const items = options.map((n, i) => <li key={i}><a onClick={ () => setPriority(i) }>{ n }</a></li>)
  return (
    <ul className="dropdown-menu" role="menu">
      { items }
    </ul>
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
