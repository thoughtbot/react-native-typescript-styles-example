import { connect } from 'react-redux'

import { toggleTimeOfDaySelector } from '../../actions/timeOfDaySelectorActions'
import TimeOfDaySelector from './TimeOfDaySelector'

const mapStateToProps = state => {
  const { timeOfDay: timeSelectors } = state
  return {
    timeSelectors,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleTimeOfDaySelector: timeOfDaySelector => {
      dispatch(toggleTimeOfDaySelector(timeOfDaySelector))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeOfDaySelector)
