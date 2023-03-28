import React from 'react';
import { View, StyleSheet } from 'react-native';
import Navigation from './src/navigation/navigation';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

const styles = StyleSheet.create({})

export default App;
