import {connect} from 'react-redux'
import {setVisibleFilter} from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibleFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibleFilter(ownProps.filter))
        }
    }
}

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link)

export default FilterLink