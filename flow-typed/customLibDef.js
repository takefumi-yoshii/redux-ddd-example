import lodash from 'lodash'

declare var _ : typeof lodash

declare type CRUDSchema = {
  id: number,
  created_at: Date,
  updated_at: Date
}

declare type InnerHTMLString = {
  __html: string
}

declare class CRUDRecord {
  getID: () => string,
  getCreatedAt: () => Date,
  getUpdatedAt: () => Date,
  setUpdatedAt: () => CRUDRecord
}

declare type TodoSchema = {
  task: string
}

declare class TodoModel extends CRUDRecord {
  getTask: () => string,
  updateTask: (value: string) => TodoModel,
  getFormattedLatestUpdateDate: () => string,
  getPriority: () => string
}

declare type TodosSchema = {
  list: List,
  input: string
}

declare class TodosModel {
  getTodosSize: () => number,
  getTodosList: () => Array<TodoModel>,
  getPriority: () => string,
  getPriorityLabels (): Array<string>,
  getPrioritySelectLabel: () => any,
  pushTodo: () => TodosModel,
  updateTodo: () => TodosModel,
  deleteTodo: (index: number) => TodosModel,
  updateInput: (value: string) => TodosModel,
  setPriority: (index: number) => TodosModel
}
