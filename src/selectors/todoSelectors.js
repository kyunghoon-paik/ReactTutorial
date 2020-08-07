import { createSelector } from 'reselect'

const getVisibilityFilter = (state, props) =>
    state.todoLists[props.listId].visibleFilter

const getTodos = (state, props) => 
    state.todoLists[props.listId].todoLists

// const getVisibleTodos = createSelector (
//     [getVisibilityFilter, getTodos],
//     (visibleFilter, todos) => {
//         switch (visibleFilter) {
//             case 'SHOW_COMPLETED':
//                 return todos.filter(todo => todo.completed)
//             case 'SHOW_ACTIVE':
//                 return todos.filter(todo => !todo.completed)
//             default:
//                 return todos
//         }
//     }
// )

// export default getVisibleTodos

const makeGetVisibleTodos = () => {
    return createSelector(
        [getVisibilityFilter, getTodos],
        (visibleFilter, todos) => {
            switch (visibleFilter) {
                case 'SHOW_COMPLETED':
                    return todos.filter(todo => todo.completed)
                case 'SHOW_ACTIVE':
                    return todos.filter(todo => !todo.completed)
                default:
                    return todos
            }
        }
    )
}

export default makeGetVisibleTodos