// @flow

import { Component } from 'react'

export class TodoItem extends Component {
  props: { index: number, item: TodoModel, updateTodo: Function, deleteTodo: Function }
  state: { editing: boolean }
  state = { editing: false, value: '' }
  componentWillMount () {
    const { item } = this.props
    this.setState({ value: item.getTask() })
  }
  render () {
    const { index, item, deleteTodo } = this.props
    const { editing, value } = this.state
    return (
      <li className="todo-item list-group-item">
        <form onSubmit={ e => { e.preventDefault(); this.handleSubmit(e) }}>
          <p>Priority : { item.getPriority() }</p>
          <p>latest_updated_at : { item.getFormattedLatestUpdateDate() }</p>
          <div className="input-group">
            <input
              className="form-control"
              type='text'
              name='input'
              value={value}
              onFocus={this.handleFocus}
              onChange={this.handleChange}
            />
            <ButtonDone editing={editing} deleteTodo={deleteTodo} index={index} />
            <ButtonUpdate editing={editing} deleteTodo={deleteTodo} index={index} />
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
    updateTodo({ index: this.props.index, value: e.target.input.value })
    this.setState({ editing: false })
  }
}

function ButtonDone (props: { editing: boolean, deleteTodo: Function, index: number }) {
  const { editing, deleteTodo, index } = props
  if (editing) return null
  return (
    <span className="input-group-btn">
      <button className="btn btn-secondary" onClick={ () => deleteTodo(index) }>done</button>
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
