import { combineReducers } from 'redux'

import dayOfWeekSelectorReducer from './dayOfWeekSelectorReducer'
import timeOfDaySelectorReducer from './timeOfDaySelectorReducer'

const rootReducer = combineReducers({
  dayOfWeek: dayOfWeekSelectorReducer,
  timeOfDay: timeOfDaySelectorReducer,
})

export default rootReducer
