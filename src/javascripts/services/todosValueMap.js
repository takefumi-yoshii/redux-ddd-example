// @flow

import { fork, take, put } from 'redux-saga/effects'
import { types as TodosFilterTypes } from '~/redux/todosFilter'
import { creators } from '~/redux/todos'

function * mapSortType (): * {
  while (true) {
    const { payload } = yield take(TodosFilterTypes.setSortType)
    yield put(creators.setSortType(payload))
  }
}

function * mapOrder (): * {
  while (true) {
    const { payload } = yield take(TodosFilterTypes.setOrder)
    yield put(creators.setOrderOffset(payload))
  }
}

function * mapRestore (): * {
  while (true) {
    const { payload } = yield take(TodosFilterTypes.restoreTodosFilter)
    const { sortType, order } = payload
    yield put(creators.setSortType(sortType))
    yield put(creators.setOrderOffset(order))
  }
}

export function * todosValueMapSaga (): * {
  yield fork(mapSortType)
  yield fork(mapOrder)
  yield fork(mapRestore)
}
