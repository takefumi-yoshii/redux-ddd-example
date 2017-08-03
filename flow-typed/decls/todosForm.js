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
