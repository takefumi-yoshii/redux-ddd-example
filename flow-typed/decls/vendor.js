import lodash from 'lodash'

declare var _ : typeof lodash

declare type Action = {
  type: string
}

declare type ActionType = string

declare type ActionTypes = {
  [string]: ActionType
}

declare type ActionCreator = {
  [string]: Action
}

declare type ActionCreators = {
  [string]: Function
}

declare type InnerHTMLString = {
  __html: string
}
