# redux-ddd-example
implements of redux ddd with immutable.js

## Demand of Domain Model

Coding with frontend library such as React, there are a some cases that business logic intervenes too much in view. I can not imagine that there is scalabiity in the code where the business logic shown below is scattered. At the time of release there are often cases where simple things are changing complicatedly.

```TodoItems.js
function TodoItems (props) {
  const { todos, updateTodo, deleteTodo } = props
  const items = todos.map(item , i) => {
    const { done, show_flag, created_at } = item
    const current = new Date().getTime()
    const created = created_at.getTime()
    const day_over = (current - created) / (1000 * 60 * 60 * 24) >= 1
    if (done || !show_flag || day_over) return null
    const _props = { key: i, index: i, item, updateTodo, deleteTodo }
    return <TodoItem { ..._props } />
  })
  return (
    <div className="todo-items">
      <ul className="list-group">
        { items }
      </ul>
    </div>
  )
}

```
## Retrospective, Redux is Architecture

In the recent React community,"Which is best of state management, Flux, Redux or MobX?" Seems to be of great interest, but Flux/Redux is responsible for event flow architecture and MobX is model, The nature differs. The layer where the code like Redux is located is close to the application layer of the DDD layered architecture, I feel Redux does not have the concept of a clear domain layer equivalent.

## Reducer is closest to Domain

The part of connecting domain layers is reducer. As shown in [Immutable Update Patterns](http://redux.js.org/docs/recipes/reducers/ImmutableUpdatePatterns.html), reducers become simple by using immutable.js. And further, Redux can move to multi paradigm by using immutable.Record instances. If you use the factory method and the composite pattern held internally, you can get a strong aspect of OOP. you can look implements of abstract class in this reporitory.

## Generate model/reducer/store

It is meaningless unless you make it possible to inject the model instance that the reducer suffers at the time of creating the store. This point can be solved by relaying one wrapper to the reducer.

## Single source of truth

This is knowned Three Principles of Redux. Now, how many stores are on the screen displayed before your eyes? If there are multiple stores or equivalent, it seems better to think again. If Redux is adopted somewhere in the your code, I recommend refactoring to propagate single store from single feature to all four layers of DDD. (Only model does not know store)

It is important not to allow only one store generation from the structure of the code. Also, you should thoroughly examine the module dependency, instance creation and application order in advance, and do not allow unscrupulous imports.

## redux-saga serving the service layer

There are unnatural "activities" in the program to express by view and model. This is the service layer's responsibility, and redux-saga is the most compatible module at present. Sometimes, it drives out the concept of Promise from the event-driven world, it is responsible for the infrastructure layer and functions as an application service layer.(This feature is coming soon)
