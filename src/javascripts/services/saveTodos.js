// @flow

import { fork, take, put, call, select } from 'redux-saga/effects'
import { loadLocalStorageByKey, saveLocalStorageByKey, wait } from '~/lib/helper/service'
import { creators } from '~/redux/todos'

function * restoreTodos (): * {
  const src = yield call(loadLocalStorageByKey, 'todos')
  yield put(creators.restoreTodos(src))
}

function * saveTodos (): * {
  const { todos } = yield select()
  const src: any[] = todos.getTodosListJS()
  saveLocalStorageByKey(src, 'todos')
  console.log('saved')
}

function * subscribeDomainActions (): * {
  while (true) {
    yield take(action => true)
    yield call(wait, 1000)
    yield fork(saveTodos)
  }
}

export function * saveTodosSaga (): * {
  yield fork(restoreTodos)
  yield fork(subscribeDomainActions)
}
