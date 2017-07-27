// @flow

import { createActionReducer } from '~/lib/redux/middleware'

const { types, creators, reducer } = createActionReducer([
  'pushTodo',
  'updateTodo',
  'deleteTodo',
  'updateInput',
  'setPriority',
  'setSortType'
], '/todos/')

export { types, creators, reducer }
