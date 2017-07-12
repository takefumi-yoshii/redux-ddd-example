// @flow

import { createActionReducer } from '~/lib/redux/middleware'

const { types, creators, reducer } = createActionReducer([
  'pushTodo',
  'updateTodo',
  'deleteTodo',
  'updateInput'
], '/todos/')

export { types, creators, reducer }
