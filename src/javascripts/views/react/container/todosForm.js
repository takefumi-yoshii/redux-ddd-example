// @flow

import { Component } from 'react'
import { connectedComponent } from '~/lib/react/middleware'
import { creators } from '~/redux/todosForm'
import { TodosForm } from '~/views/react/component/todosForm'

class TodosFormContainer extends Component {
  render () {
    return <TodosForm { ...this.props } />
  }
}

export default connectedComponent(TodosFormContainer, creators)
