// @flow

import { Component } from 'react'
import { connectedComponent } from '~/lib/react/middleware'
import { creators as TodosFormCreators } from '~/redux/todosForm'
import { creators as TodosFilterCreators } from '~/redux/todosFilter'
import { TodosForm } from '~/views/react/component/todosForm'

class TodosFormContainer extends Component {
  render () {
    return <TodosForm { ...this.props } />
  }
}
const creators = Object.assign({}, TodosFormCreators, TodosFilterCreators)
export default connectedComponent(TodosFormContainer, creators)
