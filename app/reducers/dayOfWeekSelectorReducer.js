import { TOGGLE_DAY_OF_WEEK_SELECTOR } from '../actions/dayOfWeekSelectorActions'
import { RESET_ALL_SELECTORS } from '../actions/selectorActions'

const initialState = []

const dayOfWeekSelectorReducer = (state = initialState, action) => {
  Object.freeze(state)
  const nextState = [ ...state ]
  const { dayOfWeek } = action

  switch (action.type) {
    case TOGGLE_DAY_OF_WEEK_SELECTOR: {
      const dayIndex = nextState.indexOf(dayOfWeek)
      if (dayIndex === -1) {
        nextState.push(dayOfWeek)
        return nextState
      } else {
        nextState.splice(dayIndex, 1)
        return nextState
      }
    }
    case RESET_ALL_SELECTORS:
      return initialState
    default:
      return state
  }
}

export default dayOfWeekSelectorReducer
