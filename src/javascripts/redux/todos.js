// @flow

import { createActionReducer } from '~/lib/redux/middleware'

const { types, creators, reducer } = createActionReducer([
  'pushTodo',
  'updateTodo',
  'deleteTodo',
  'setPriority',
  'setSortType',
  'setOrder'
], '/todos/')

export { types, creators, reducer }
