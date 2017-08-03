import { take, put } from 'redux-saga/effects'
import { types } from '~/redux/todosForm'
import { creators } from '~/redux/todos'

function * subscribeSubmit () {
  while (true) {
    const { payload } = yield take(types.submitForm)
    yield put(creators.pushTodo(payload))
  }
}

function * subscribeSetPriority () {
  while (true) {
    const { payload } = yield take(types.setPriority)
    yield put(creators.setPriority(payload))
  }
}

function * subscribeSetSortType () {
  while (true) {
    const { payload } = yield take(types.setSortType)
    yield put(creators.setSortType(payload))
  }
}

function * subscribeSetOrder () {
  while (true) {
    const { payload } = yield take(types.setOrder)
    yield put(creators.setOrder(payload))
  }
}

export const todosSaga = [
  subscribeSubmit,
  subscribeSetPriority,
  subscribeSetSortType,
  subscribeSetOrder
]
