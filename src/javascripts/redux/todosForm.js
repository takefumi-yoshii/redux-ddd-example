// @flow

import { createActionReducer } from '~/lib/redux/middleware'

const { types, creators, reducer } = createActionReducer([
  'updateInput',
  'submitForm',
  'setPriority',
  'setSortType',
  'setOrder'
], '/todosForm/')

export { types, creators, reducer }
