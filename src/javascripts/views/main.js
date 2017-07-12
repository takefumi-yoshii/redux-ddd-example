// @flow

import { renderReact } from '~/lib/react/middleware'
import ReactTodos from '~/views/react/todos'

export function renderViews (store: any): void {
  renderReact('[data-react-todo-app]', ReactTodos, store)
}
