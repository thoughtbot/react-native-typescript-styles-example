import React from 'react'

const { Provider, Consumer } = React.createContext()

class SelectionProvider extends React.Component {
  state = {
    daySelections: [],
    timeSelections: [],
  }

  toggleDayOfWeekSelector = dayOfWeek => {
    const { daySelections } = this.state
    const nextSelections = [...daySelections]

    const dayIndex = nextSelections.indexOf(dayOfWeek)
    if (dayIndex === -1) {
      nextSelections.push(dayOfWeek)
    } else {
      nextSelections.splice(dayIndex, 1)
    }

    this.setState({ daySelections: nextSelections })
  }

  toggleTimeOfDaySelector = timeOfDay => {
    const { timeSelections } = this.state
    const nextSelections = [...timeSelections]

    const timeIndex = nextSelections.indexOf(timeOfDay)
    if (timeIndex === -1) {
      nextSelections.push(timeOfDay)
    } else {
      nextSelections.splice(timeIndex, 1)
    }

    this.setState({ timeSelections: nextSelections })
  }

  resetAllSelections = () => {
    console.log('reseting selections')
    this.setState({ daySelections: [], timeSelections: [] })
  }

  render() {
    return (
      <Provider
        value={{
          ...this.state,
          toggleDayOfWeekSelector: this.toggleDayOfWeekSelector,
          toggleTimeOfDaySelector: this.toggleTimeOfDaySelector,
          resetAllSelections: this.resetAllSelections,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { SelectionProvider, Consumer as SelectionConsumer }
