import React from 'react'
import FilterLink from '../containers/FilterLink'
import {VisibleFilter} from '../actions'

const Footer = () => (
    <p>
        Show: <FilterLink filter = {VisibleFilter.SHOW_ALL}>All</FilterLink>
        {', '}
        <FilterLink filter={VisibleFilter.SHOW_ACTIVE}>Active</FilterLink>
        {', '}
        <FilterLink filter={VisibleFilter.SHOW_COMPLETED}>Completed</FilterLink>
    </p>
)

export default Footer