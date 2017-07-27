// @flow

import { Component } from 'react'

export class TodoItem extends Component {
  props: { id: string, item: TodoViewModel, updateTodo: Function, deleteTodo: Function }
  state: { editing: boolean }
  state = { editing: false, value: '' }
  componentWillMount () {
    const { item } = this.props
    this.setState({ value: item.getTask() })
  }
  render () {
    const { id, item, deleteTodo } = this.props
    const { editing, value } = this.state
    return (
      <li className="todo-item list-group-item">
        <form onSubmit={ e => { e.preventDefault(); this.handleSubmit(e) }}>
          <div className="panel-body">
            <p className={ item.getPriorityLabelClassName() }>Priority : { item.getPriorityLabel() }</p>-
            <p className="label label-default">CreatedAt : { item.getFormattedCreatedDate() }</p>-
            <p className="label label-default">UpdatedAt : { item.getFormattedLatestUpdateDate() }</p>
          </div>
          <div className="input-group">
            <input
              className="form-control"
              type='text'
              name='input'
              value={value}
              onFocus={this.handleFocus}
              onChange={this.handleChange}
            />
            <ButtonDone editing={editing} deleteTodo={deleteTodo} id={id} />
            <ButtonUpdate editing={editing} id={id} />
          </div>
        </form>
      </li>
    )
  }
  handleFocus = () => {
    this.setState({ editing: true })
  }
  handleChange = ({ target }: SyntheticInputEvent) => {
    this.setState({ value: target.value })
  }
  handleSubmit = (e: { target: { input: HTMLInputElement } }) => {
    const { updateTodo } = this.props
    updateTodo({ id: this.props.id, value: e.target.input.value })
    this.setState({ editing: false })
  }
}

function ButtonDone (props: { editing: boolean, deleteTodo: Function, id: string }) {
  const { editing, deleteTodo, id } = props
  if (editing) return null
  return (
    <span className="input-group-btn">
      <button className="btn btn-secondary" onClick={ () => deleteTodo(id) }>done</button>
    </span>
  )
}

function ButtonUpdate (props: { editing: boolean }) {
  const { editing } = props
  if (!editing) return null
  return (
    <span className="input-group-btn">
      <button className="btn btn-primary" type="submit">update</button>
    </span>
  )
}
