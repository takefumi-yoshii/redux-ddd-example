// @flow

import { createReduxStore, extendReducers, runRootSaga } from '~/lib/redux/middleware'
import { reducer as TodosFormReducer } from '~/redux/todosForm'
import { reducer as TodosFilterReducer } from '~/redux/todosFilter'
import { reducer as TodosReducer } from '~/redux/todos'
import { TodosFormViewModel } from '~/models/todosFormView'
import { TodosFilterViewModel } from '~/models/todosFilterView'
import { TodosViewModel } from '~/models/todosView'
import { renderViews } from '~/views/main'
import { todosFormSaga } from '~/services/todosForm'
import { todosValueMapSaga } from '~/services/todosValueMap'
import type { Store } from 'redux'

const reducer = extendReducers({
  todosForm: TodosFormReducer(new TodosFormViewModel()),
  todosFilter: TodosFilterReducer(new TodosFilterViewModel()),
  todos: TodosReducer(new TodosViewModel())
})
export const store: Store<*, *> = createReduxStore(reducer)
renderViews(store)

runRootSaga([
  todosFormSaga,
  todosValueMapSaga
])
