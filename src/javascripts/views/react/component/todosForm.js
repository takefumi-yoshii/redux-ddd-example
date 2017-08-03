// @flow

import type { TodosFormViewModel } from '~/models/todosFormView'

export function TodosForm (
  { todosForm, updateInput, submitForm, setPriority, setSortType, setOrder }: { todosForm: TodosFormViewModel, updateInput: Function, submitForm: Function, setPriority: Function, setSortType: Function, setOrder: Function }) {
  return (
    <div className="navbar-default navbar-collapse collapse">
      <form className="navbar-form navbar-right" onSubmit={ e => e.preventDefault() } >
        <input className="form-control" type="text" onChange={ (e) => updateInput(e.target.value) } />
        <button className="btn btn-primary active" onClick={ () => submitForm(todosForm.getInput()) }>add todo</button>
      </form>
      <SortDropdown todosForm={ todosForm } setSortType={ setSortType } />
      <OrderDropdown todosForm={ todosForm } setOrder={ setOrder } />
      <PriorityDropdown todosForm={ todosForm } setPriority={ setPriority } />
    </div>
  )
}
// _____________________________________________

function SortDropdown ({ todosForm, setSortType }: { todosForm: TodosFormViewModel, setSortType: Function }) {
  return (
    <ul className="nav navbar-nav navbar-left">
      <li className="dropdown">
        <a role="button"
          className="dropdown-toggle"
          data-toggle="dropdown"
          aria-expanded="false"
          dangerouslySetInnerHTML={ todosForm.getSortTypeSelectLabel() }
        />
        <SortDropdownMenu
          options={ todosForm.getSortTypeLabels() }
          setSortType={ setSortType }
        />
      </li>
    </ul>
  )
}

function SortDropdownMenu ({ options, setSortType }: { options: string[], setSortType: Function }) {
  const items = options.map((n, i) => <li key={i}><a onClick={ () => setSortType(i) }>{ n }</a></li>)
  return (
    <ul className="dropdown-menu" role="menu">
      { items }
    </ul>
  )
}
// _____________________________________________

function OrderDropdown ({ todosForm, setOrder }: { todosForm: TodosFormViewModel, setOrder: Function }) {
  return (
    <ul className="nav navbar-nav navbar-left">
      <li className="dropdown">
        <a role="button"
          className="dropdown-toggle"
          data-toggle="dropdown"
          aria-expanded="false"
          dangerouslySetInnerHTML={ todosForm.getOrderSelectLabel() }
        />
        <OrderDropdownMenu
          options={ todosForm.getOrderLabels() }
          setOrder={ setOrder }
        />
      </li>
    </ul>
  )
}

function OrderDropdownMenu ({ options, setOrder }: { options: string[], setOrder: Function }) {
  const items = options.map((n, i) => <li key={i}><a onClick={ () => setOrder(i) }>{ n }</a></li>)
  return (
    <ul className="dropdown-menu" role="menu">
      { items }
    </ul>
  )
}
// _____________________________________________

function PriorityDropdown ({ todosForm, setPriority }: { todosForm: TodosFormViewModel, setPriority: Function }) {
  return (
    <ul className="nav navbar-nav navbar-right">
      <li className="dropdown">
        <a role="button"
          className="dropdown-toggle"
          data-toggle="dropdown"
          aria-expanded="false"
          dangerouslySetInnerHTML={ todosForm.getPrioritySelectLabel() }
        />
        <PriorityDropdownMenu
          options={ todosForm.getPriorityLabels() }
          setPriority={ setPriority }
        />
      </li>
    </ul>
  )
}

function PriorityDropdownMenu ({ options, setPriority }: { options: string[], setPriority: Function }) {
  const items = options.map((n, i) => <li key={i}><a onClick={ () => setPriority(i) }>{ n }</a></li>)
  return (
    <ul className="dropdown-menu" role="menu">
      { items }
    </ul>
  )
}
