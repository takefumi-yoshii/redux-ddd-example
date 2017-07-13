import lodash from 'lodash'

declare var _ : typeof lodash

declare type CRUD = {
  id: number,
  created_at: Date,
  updated_at: Date
}

declare class CRUDRecord {
  getID: () => string,
  getCreatedAt: () => Date,
  getUpdatedAt: () => Date,
  setUpdatedAt: () => CRUDRecord
}

declare type Todo = {
  task: string
}

declare class TodoModel extends CRUDRecord {
  getTask: () => string,
  updateTask: () => TodoModel,
  getFormattedLatestUpdateDate: () => string
}

declare type Todos = {
  list: List,
  input: string
}

declare class TodosModel {
  getTodosSize: () => number,
  getTodosList: () => Array<TodoModel>,
  pushTodo: () => TodosModel,
  updateTodo: () => TodosModel,
  deleteTodo: (index: number) => TodosModel,
  updateInput: (value: string) => TodosModel
}
