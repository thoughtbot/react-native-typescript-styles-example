import { connect } from 'react-redux'

import { toggleDayOfWeekSelector } from '../../actions/dayOfWeekSelectorActions'
import DayOfWeekSelector from './DayOfWeekSelector'

const mapStateToProps = state => {
  const {
    dayOfWeek: {
      mon: monSelector,
      tue: tueSelector,
      wed: wedSelector,
      thu: thuSelector,
      fri: friSelector,
      sat: satSelector,
      sun: sunSelector,
    },
  } = state

  const daySelectors = [
    monSelector,
    tueSelector,
    wedSelector,
    thuSelector,
    friSelector,
    satSelector,
    sunSelector,
  ]

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
