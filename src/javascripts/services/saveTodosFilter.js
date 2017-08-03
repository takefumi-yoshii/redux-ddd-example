// @flow

import { fork, take, put, call, select } from 'redux-saga/effects'
import { loadLocalStorageByKey, saveLocalStorageByKey, wait } from '~/lib/helper/service'
import { creators } from '~/redux/todosFilter'

function * restoreTodosFilter (): * {
  const src = yield call(loadLocalStorageByKey, 'todosFilter')
  yield put(creators.restoreTodosFilter(src))
}

function * saveTodosFilter (): * {
  const { todosFilter } = yield select()
  const src: any = todosFilter.getTodosFilterJS()
  saveLocalStorageByKey(src, 'todosFilter')
  console.log('saved')
}

function * subscribeDomainActions (): * {
  while (true) {
    yield take(action => true)
    yield call(wait, 1000)
    yield fork(saveTodosFilter)
  }
}

export function * saveTodosFilterSaga (): * {
  yield fork(restoreTodosFilter)
  yield fork(subscribeDomainActions)
}
