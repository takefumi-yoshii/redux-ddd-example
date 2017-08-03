// @flow

import { Component } from 'react'
import { connectedComponent } from '~/lib/react/middleware'
import { creators } from '~/redux/todos'
import { Todos } from '~/views/react/component/todos'

class TodosContainer extends Component {
  render () {
    return <Todos { ...this.props } />
  }
}

export default connectedComponent(TodosContainer, creators)
