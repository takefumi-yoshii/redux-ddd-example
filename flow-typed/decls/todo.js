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
