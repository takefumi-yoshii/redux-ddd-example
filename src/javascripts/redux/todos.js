// @flow

import { createActionReducer } from '~/lib/redux/middleware'

const { types, creators, reducer } = createActionReducer([
  'restoreTodos',
  'pushTodo',
  'updateTodo',
  'deleteTodo',
  'setOrderOffset',
  'setSortType'
], '/todos/')

export { types, creators, reducer }
