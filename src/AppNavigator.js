import React from 'react'
import { View } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import IssueListScreen from './IssueList'
import TimeSelectorScreen from './TimeSelector'

const AppNavigator = createStackNavigator(
  {
    IssueList:  IssueListScreen,
    TimeSelector: TimeSelectorScreen,
  }
)

  // ,
  // {
  //   initialRouteName: 'IssueList',
  //   headerMode: 'none',
  //   defaultNavigationOptions: {
  //     gesturesEnabled: false,
  //   },
  // }



const AppNavigatorContainer = createAppContainer(AppNavigator)

export default AppNavigatorContainer
