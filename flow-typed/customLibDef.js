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
// _____________________________________________

declare type TodoModelSchema = {
  task: string,
  priority: number,
}

declare type TodoViewModelSchema = {
  priorityLabels: string[]
}

declare class TodoModel extends CRUDRecord {
  getTask: () => string,
  getPriority: () => number,
  updateTask: (value: string) => TodoModel,
}

declare class TodoViewModel extends TodoModel {
  getPriorityLabel: () => string,
  getFormattedCreatedDate: () => string,
  getFormattedLatestUpdateDate: () => string,
  getPriorityLabelClassName: () => string
}
// _____________________________________________

declare type TodosModelSchema = {
  list: List,
  input: string,
  priority: number
}

declare type TodosViewModelSchema = {
  priorityLabels: string[]
}

declare class TodosModel {
  getTodosSize: () => number,
  getTodosList: () => TodoModel[],
  getPriority: () => number,
  pushTodo: () => TodosModel,
  updateTodo: () => TodosModel,
  deleteTodo: (index: number) => TodosModel,
  updateInput: (value: string) => TodosModel,
  setPriority: (index: number) => TodosModel
}

declare class TodosViewModel extends TodosModel {
  getPriorityLabel: () => string,
  getPriorityLabels: () => string[],
  getSortTypeLabel: () => string,
  getSortTypeLabels: () => string[],
  getPrioritySelectLabel: () => InnerHTMLString,
  getSortTypeSelectLabel: () => InnerHTMLString,
  getSortedTodosList: () => TodoViewModel[],
  getSortedTodosListByCreatedAt: () => TodoViewModel[],
  getSortedTodosListByUpdatedAt: () => TodoViewModel[],
  getSortedTodosListByPriority: () => TodoViewModel[]
}
