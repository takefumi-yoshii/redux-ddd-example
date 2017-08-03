// @flow

import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import createSagaMiddleware, { effects } from 'redux-saga'
import type { Store, Reducer, ActionCreator } from 'redux'

export const composeEnhancers = (
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ) ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

export const sagaMiddleware = createSagaMiddleware()
export const deafaultMiddleware = applyMiddleware(sagaMiddleware)

export function createReduxStore (reducer: Function, middlewares: * = deafaultMiddleware): Store<*, *> {
  return createStore(reducer, composeEnhancers(middlewares))
}

export function extendReducers (defaultReducer: *, exentions: * = {}): Reducer<*, *> {
  return combineReducers(Object.assign(defaultReducer, exentions))
}

export function createActions (constants: Array<string>, namespace: string) {
  const types: ActionTypes = {}
  const creators: ActionCreators = {}
  constants.map((row: string) => {
    const type: ActionType = `${namespace}${row}`
    types[row] = type
    creators[row] = payload => { return { type, payload } }
  })
  return { types, creators }
}

export function createReducer (constants: Array<string>, namespace: string): Function {
  return function (initialModel: *) {
    return (model: * = initialModel, action: ActionCreator<*, *>) => {
      const fn = action.type.replace(namespace, '')
      if (model[fn] !== undefined) return model[fn](action.payload)
      return model
    }
  }
}

export function createActionReducer (constants: Array<string>, namespace: string) {
  const { types, creators } = createActions(constants, namespace)
  const reducer = createReducer(constants, namespace)
  return { types, creators, reducer }
}

export function createRootSaga (sagas: Array<*>, extension: Array<*> = []) {
  const { fork } = effects
  return function * (): * {
    yield _.concat(sagas, extension).map(task => fork(task))
  }
}

export function runRootSaga (saga: Array<*>, extension: Array<*> = []) {
  const rootSaga = createRootSaga(saga, extension)
  sagaMiddleware.run(rootSaga)
}
