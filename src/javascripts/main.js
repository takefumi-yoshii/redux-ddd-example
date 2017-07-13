// @flow

import { createReduxStore, extendReducers, runRootSaga } from '~/lib/redux/middleware'
import { reducer as TodosReducer } from '~/redux/todos'
import { TodosModel } from '~/models/todos'
import { renderViews } from '~/views/main'
import { todosSaga } from '~/services/todos'
import type { Store } from 'redux'

const reducer = extendReducers({
  todos: TodosReducer(new TodosModel())
})
export const store: Store<*, *> = createReduxStore(reducer)
renderViews(store)
runRootSaga(todosSaga)
