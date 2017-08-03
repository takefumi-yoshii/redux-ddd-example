import { take, put, select } from 'redux-saga/effects'
import { types as TodosFormTypes } from '~/redux/todosForm'
import { types as TodosFilterTypes } from '~/redux/todosFilter'
import { creators } from '~/redux/todos'

function * subscribeSubmit () {
  while (true) {
    const { payload } = yield take(TodosFormTypes.submitForm)
    const { todosFilter } = yield select()
    yield put(creators.pushTodo({ task: payload, priority: todosFilter.getPriority() }))
  }
}

function * subscribeSetPriority () {
  while (true) {
    const { payload } = yield take(TodosFilterTypes.setPriority)
    yield put(creators.setPriority(payload))
  }
}

function * subscribeSetSortType () {
  while (true) {
    const { payload } = yield take(TodosFilterTypes.setSortType)
    yield put(creators.setSortType(payload))
  }
}

function * subscribeSetOrder () {
  while (true) {
    const { payload } = yield take(TodosFilterTypes.setOrder)
    yield put(creators.setOrder(payload))
  }
}

export const todosSaga = [
  subscribeSubmit,
  subscribeSetPriority,
  subscribeSetSortType,
  subscribeSetOrder
]
