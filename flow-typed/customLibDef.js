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

declare type TodoViewModelSchema = {}

declare class TodoModel extends CRUDRecord {
  getTask: () => string,
  getPriority: () => number,
  updateTask: (value: string) => TodoModel,
}

declare class TodoViewModel extends TodoModel {
  getFormattedCreatedDate: () => string,
  getFormattedLatestUpdateDate: () => string,
  getPriorityLabelClassName: () => string
}
// _____________________________________________

declare type TodosModelSchema = {
  list: List,
  priority: number,
  sortType: number,
  order: number
}

declare type TodosViewModelSchema = {}

declare class TodosModel {
  getTodosSize: () => number,
  getPriority: () => string,
  getSortType: () => string,
  getOrder: () => string,
  getOrderOffset: () => number,
  getTodosList: () => List<TodoViewModel>,
  pushTodo: ({ task: string, priority: number }) => TodosModel,
  updateTodo: (payload: { id: string, value: string }) => TodosModel,
  deleteTodo: (id: string) => TodosModel,
  setPriority: (index: number) => TodosModel,
  setSortType: (index: number) => TodosViewModel,
  setOrder: (order: number) => TodosViewModel
}

declare class TodosViewModel extends TodosModel {
  getSortedTodosList: () => TodoViewModel[],
  getSortedTodosListByCreatedAt: () => TodoViewModel[],
  getSortedTodosListByUpdatedAt: () => TodoViewModel[],
  getSortedTodosListByPriority: () => TodoViewModel[]
}
// _____________________________________________

declare type TodosFormModelSchema = {
  input: string
}

declare type TodosFormViewModelSchema = {}

declare class TodosFormModel {
  getInput: () => string,
  updateInput: (value: string) => TodosModel
}

declare class TodosFormViewModel extends TodosFormModel {
}
// _____________________________________________

declare type TodosFilterModelSchema = {
  priority: number,
  sortType: number,
  order: number
}

declare type TodosFilterViewModelSchema = {
  priorityLabels: string[],
  sortTypeLabels: string[],
  orderLabels: string[]
}

declare class TodosFilterModel {
  getPriority: () => string,
  getSortType: () => string,
  getOrder: () => string,
  setPriority: (index: number) => TodosModel,
  setSortType: (index: number) => TodosViewModel,
  setOrder: (order: number) => TodosViewModel,
}

declare class TodosFilterViewModel extends TodosFilterModel {
  getPriorityLabels: () => string[],
  getSortTypeLabels: () => string[],
  getOrderLabels: () => string[],
  getPriorityLabel: () => string,
  getSortTypeLabel: () => string,
  getOrderLabel: () => string,
  getPrioritySelectLabel: () => InnerHTMLString,
  getSortTypeSelectLabel: () => InnerHTMLString,
  getOrderSelectLabel: () => InnerHTMLString,
  getPriorityLabelByLevel: (level: number) => string,
}