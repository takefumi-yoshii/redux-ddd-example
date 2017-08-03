// @flow

import { createReduxStore, extendReducers, runRootSaga } from '~/lib/redux/middleware'
import { reducer as TodosReducer } from '~/redux/todos'
import { reducer as TodosFormReducer } from '~/redux/todosForm'
import { TodosFormViewModel } from '~/models/todosFormView'
import { TodosViewModel } from '~/models/todosView'
import { renderViews } from '~/views/main'
import { todosSaga } from '~/services/todos'
import type { Store } from 'redux'

const reducer = extendReducers({
  todosForm: TodosFormReducer(new TodosFormViewModel()),
  todos: TodosReducer(new TodosViewModel())
})
export const store: Store<*, *> = createReduxStore(reducer)
renderViews(store)
runRootSaga(todosSaga)
