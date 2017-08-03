// @flow

import { fork, take, put } from 'redux-saga/effects'
import { types as TodosFilterTypes } from '~/redux/todosFilter'
import { creators } from '~/redux/todos'

function * mapPriority (): * {
  while (true) {
    const { payload } = yield take(TodosFilterTypes.setPriority)
    yield put(creators.setPriority(payload))
  }
}

function * mapSortType (): * {
  while (true) {
    const { payload } = yield take(TodosFilterTypes.setSortType)
    yield put(creators.setSortType(payload))
  }
}

function * mapOrder (): * {
  while (true) {
    const { payload } = yield take(TodosFilterTypes.setOrder)
    yield put(creators.setOrder(payload))
  }
}

function * mapRestore (): * {
  while (true) {
    const { payload } = yield take(TodosFilterTypes.restoreTodosFilter)
    const { priority, sortType, order } = payload
    yield put(creators.setPriority(priority))
    yield put(creators.setSortType(sortType))
    yield put(creators.setOrder(order))
  }
}

export function * todosValueMapSaga (): * {
  yield fork(mapPriority)
  yield fork(mapSortType)
  yield fork(mapOrder)
  yield fork(mapRestore)
}
