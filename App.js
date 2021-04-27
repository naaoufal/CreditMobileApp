import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Switch, Route } from 'react-router-native';
import Home from './app/screen/Home'
import Credit from './app/screen/Credit'

export default function App() {
  return (
    <NativeRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/credit' component={Credit} />

      </Switch>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
