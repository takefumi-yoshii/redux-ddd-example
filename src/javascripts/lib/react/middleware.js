// @flow

import { bindActionCreators } from 'redux'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux'
import type { Store, Dispatch, ActionCreator } from 'redux'

export function renderReact (selector: string, component: Function, store: Store<*, *>, datasetMock: any) {
  const elements = document.querySelectorAll(selector)
  _.map(elements, element => {
    const datasetString: any = _.find(element.dataset, 0)
    const dataset: any = datasetMock || JSON.parse(datasetString) || {}
    render(component(store, dataset), element)
  })
}

export function connectedProvider (component: *, store: Store<*, *>, dataset: Map<*, *>, actionCreators: any) {
  const ConnectedComponent = connectedComponent(component, actionCreators)
  return (
    <Provider store={store}>
      <ConnectedComponent dataset={dataset} />
    </Provider>
  )
}

export function connectedComponent (component: any, actionCreators: ActionCreator<*, Function>) {
  return connect(
    state => state,
    (dispatch: Dispatch<any>) => bindActionCreators(actionCreators, dispatch)
  )(component)
}
