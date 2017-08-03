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
