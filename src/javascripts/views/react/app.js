// @flow

import TodosFormContainer from '~/views/react/container/todosForm'
import TodosContainer from '~/views/react/container/todos'
import type { Store } from 'redux'

export default function ReactTodos (store: Store<*, *>, dataset: Map<*, *>) {
  return (
    <div className="todo-container">
      <TodosFormContainer store={store} dataset={dataset} />
      <TodosContainer store={store} dataset={dataset} />
    </div>
  )
}
