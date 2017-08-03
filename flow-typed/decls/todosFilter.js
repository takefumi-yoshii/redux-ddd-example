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
  getTodosFilterJS: () => any,
  restoreTodosFilter: (src: any) => TodosFilterModel,
  setPriority: (index: number) => TodosFilterModel,
  setSortType: (index: number) => TodosFilterModel,
  setOrder: (order: number) => TodosFilterModel,
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
