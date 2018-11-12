import { TOGGLE_DAY_OF_WEEK_SELECTOR } from '../actions/dayOfWeekSelectorActions'
import { RESET_ALL_SELECTORS } from '../actions/selectorActions'

const initialState = {
  mon: { type: 'mon', isSelected: false, isSecret: false },
  tue: { type: 'tue', isSelected: false, isSecret: false },
  wed: { type: 'wed', isSelected: false, isSecret: false },
  thu: { type: 'thu', isSelected: false, isSecret: true },
  fri: { type: 'fri', isSelected: false, isSecret: false },
  sat: { type: 'sat', isSelected: false, isSecret: false },
  sun: { type: 'sun', isSelected: false, isSecret: false },
}

const dayOfWeekSelectorReducer = (state = initialState, action) => {
  Object.freeze(state)
  const nextState = { ...state }
  const { dayOfWeekSelector } = action

  switch (action.type) {
    case TOGGLE_DAY_OF_WEEK_SELECTOR: {
      const { type, isSelected } = dayOfWeekSelector
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

export default dayOfWeekSelectorReducer
