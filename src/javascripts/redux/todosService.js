// @flow

import { createActionReducer } from '~/lib/redux/middleware'

const { types, creators, reducer } = createActionReducer([
  'init'
], '/todosService/')

export { types, creators, reducer }
