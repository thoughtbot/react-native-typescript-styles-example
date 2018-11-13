import { connect } from 'react-redux'

import { toggleDayOfWeekSelector } from '../../actions/dayOfWeekSelectorActions'
import DayOfWeekSelector from './DayOfWeekSelector'

const mapStateToProps = state => {
  const {
    dayOfWeek: daySelectors
  } = state

  return {
    daySelectors,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleDayOfWeekSelector: dayOfWeekSelector => {
      dispatch(toggleDayOfWeekSelector(dayOfWeekSelector))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DayOfWeekSelector)
