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
