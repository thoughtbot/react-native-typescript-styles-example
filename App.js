import React, {Component} from 'react';
import {Platform, StyleSheet, Text, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';

import store from './app/store';
import PoolFilterScreen from './app/components/PoolFilter';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
          <PoolFilterScreen />
        </SafeAreaView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
