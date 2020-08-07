import { createSelector } from 'reselect'

const getVisiblilityFilter = state => state.visibleFilter
const getTodos = state => state.todos

//Memoized Selector
export const getVisibleTodos = createSelector(
    [getVisiblilityFilter, getTodos], //input Selector
    (visibleFilter, todos) => {
        switch (visibleFilter) {
            case 'SHOW_ALL':
                return todos;
            case 'SHOW_COMPLETED':
                return todos.filter(t=>t.completed)
            case 'SHOW_ACTIVE':
                return todos.filter(t=>!t.completed)
        }
    }
)
