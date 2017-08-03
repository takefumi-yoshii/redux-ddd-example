declare type TodosModelSchema = {
  list: List
}

declare type TodosViewModelSchema = {
  orderOffset: number,
  sortType: string
}

declare class TodosModel {
  getTodosSize: () => number,
  getTodosList: () => List<TodoViewModel>,
  getTodosListJS: () => any[],
  restoreTodos: (src: any[]) => TodosModel,
  pushTodo: ({ task: string, priority: number }) => TodosModel,
  updateTodo: (payload: { id: string, value: string }) => TodosModel,
  deleteTodo: (id: string) => TodosModel
}

declare class TodosViewModel extends TodosModel {
  getOrderOffset: () => number,
  getSortType: () => string,
  getSortedTodosList: () => TodoViewModel[],
  getSortedTodosListByCreatedAt: () => TodoViewModel[],
  getSortedTodosListByUpdatedAt: () => TodoViewModel[],
  getSortedTodosListByPriority: () => TodoViewModel[],
  setOrderOffset: (order: number) => TodosViewModel,
  setSortType: (index: number) => TodosViewModel
}
