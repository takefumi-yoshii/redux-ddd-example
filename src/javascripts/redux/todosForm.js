// @flow

import { createActionReducer } from '~/lib/redux/middleware'

const { types, creators, reducer } = createActionReducer([
  'updateInput',
  'submitForm'
], '/todosForm/')

export { types, creators, reducer }
