import { take, put, select } from 'redux-saga/effects'
import { types as TodosFormTypes } from '~/redux/todosForm'
import { creators } from '~/redux/todos'

function * subscribeSubmit () {
  while (true) {
    const { payload } = yield take(TodosFormTypes.submitForm)
    const { todosFilter } = yield select()
    yield put(creators.pushTodo({ task: payload, priority: todosFilter.getPriority() }))
  }
}

export function * todosFormSaga () {
  yield subscribeSubmit()
}
