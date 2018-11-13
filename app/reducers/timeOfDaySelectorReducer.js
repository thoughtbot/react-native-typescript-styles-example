import { TOGGLE_TIME_OF_DAY_SELECTOR } from '../actions/timeOfDaySelectorActions'
import { RESET_ALL_SELECTORS } from '../actions/selectorActions'

const initialState = []

const timeOfDaySelectorsReducer = (state = initialState, action) => {
  Object.freeze(state)
  const nextState = [ ...state ]
  const { timeOfDay } = action

  switch (action.type) {
    case TOGGLE_TIME_OF_DAY_SELECTOR: {
    const timeIndex = nextState.indexOf(timeOfDay)
      if (timeIndex === -1) {
        nextState.push(timeOfDay)
        return nextState
      } else {
        nextState.splice(timeIndex, 1)
        return nextState
      }
    }
    case RESET_ALL_SELECTORS:
      return initialState
    default:
      return state
  }
}

export default timeOfDaySelectorsReducer
