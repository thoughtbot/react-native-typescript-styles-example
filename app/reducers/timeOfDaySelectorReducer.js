import { TOGGLE_TIME_OF_DAY_SELECTOR } from '../actions/timeOfDaySelectorActions'
import { RESET_ALL_SELECTORS } from '../actions/selectorActions'

const initialState = {
  morning: { type: 'morning', isSelected: false },
  afternoon: { type: 'afternoon', isSelected: false },
  evening: { type: 'evening', isSelected: false },
}

const timeOfDaySelectorsReducer = (state = initialState, action) => {
  Object.freeze(state)
  const nextState = { ...state }
  const { timeOfDaySelector } = action

  switch (action.type) {
    case TOGGLE_TIME_OF_DAY_SELECTOR: {
      const { type, isSelected } = timeOfDaySelector
      nextState[type] = {
        type,
        isSelected: !isSelected,
      }
      return nextState
    }
    case RESET_ALL_SELECTORS:
      return initialState
    default:
      return state
  }
}

export default timeOfDaySelectorsReducer
