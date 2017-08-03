// @flow

import type { TodosFormViewModel } from '~/models/todosFormView'
import type { TodosFilterViewModel } from '~/models/todosFilterView'

export function TodosForm ({ todosForm, todosFilter, updateInput, submitForm, setPriority, setSortType, setOrder }: { todosForm: TodosFormViewModel, todosFilter: TodosFilterViewModel, updateInput: Function, submitForm: Function, setPriority: Function, setSortType: Function, setOrder: Function }) {
  return (
    <div className="navbar-default navbar-collapse collapse">
      <form className="navbar-form navbar-right" onSubmit={ e => e.preventDefault() } >
        <input className="form-control" type="text" onChange={ (e) => updateInput(e.target.value) } />
        <button className="btn btn-primary active" onClick={ () => submitForm(todosForm.getInput()) }>add todo</button>
      </form>
      <SortDropdown todosFilter={ todosFilter } setSortType={ setSortType } />
      <OrderDropdown todosFilter={ todosFilter } setOrder={ setOrder } />
      <PriorityDropdown todosFilter={ todosFilter } setPriority={ setPriority } />
    </div>
  )
}
// _____________________________________________

function SortDropdown ({ todosFilter, setSortType }: { todosFilter: TodosFormViewModel, setSortType: Function }) {
  return (
    <ul className="nav navbar-nav navbar-left">
      <li className="dropdown">
        <a role="button"
          className="dropdown-toggle"
          data-toggle="dropdown"
          aria-expanded="false"
          dangerouslySetInnerHTML={ todosFilter.getSortTypeSelectLabel() }
        />
        <SortDropdownMenu
          options={ todosFilter.getSortTypeLabels() }
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

function OrderDropdown ({ todosFilter, setOrder }: { todosFilter: TodosFormViewModel, setOrder: Function }) {
  return (
    <ul className="nav navbar-nav navbar-left">
      <li className="dropdown">
        <a role="button"
          className="dropdown-toggle"
          data-toggle="dropdown"
          aria-expanded="false"
          dangerouslySetInnerHTML={ todosFilter.getOrderSelectLabel() }
        />
        <OrderDropdownMenu
          options={ todosFilter.getOrderLabels() }
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

function PriorityDropdown ({ todosFilter, setPriority }: { todosFilter: TodosFormViewModel, setPriority: Function }) {
  return (
    <ul className="nav navbar-nav navbar-right">
      <li className="dropdown">
        <a role="button"
          className="dropdown-toggle"
          data-toggle="dropdown"
          aria-expanded="false"
          dangerouslySetInnerHTML={ todosFilter.getPrioritySelectLabel() }
        />
        <PriorityDropdownMenu
          options={ todosFilter.getPriorityLabels() }
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
