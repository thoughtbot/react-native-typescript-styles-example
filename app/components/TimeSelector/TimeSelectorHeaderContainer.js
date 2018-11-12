import { connect } from 'react-redux'

import { resetAllSelectors } from '../../actions/selectorActions'
import TimeSelectorHeader from './TimeSelectorHeader'

const mapDispatchToProps = dispatch => {
  return {
    resetAllFilters: () => dispatch(resetAllSelectors()),
  }
}

export default connect(
  null,
  mapDispatchToProps
)(TimeSelectorHeader)
