import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Switch, Route } from 'react-router-native';
import Home from './app/screen/Home'
<<<<<<< HEAD
import Credit from './app/screen/Credit'
=======
import Login from './app/screen/Login'
>>>>>>> e70a05e3d615a5cfcd07d6eb7e85c9e7ecec3b04
import Reservation from './app/screen/reservation'

export default function App() {
  return (
    <NativeRouter>
      <Switch>
        <Route exact path='/' component={Home} />
<<<<<<< HEAD
        <Route exact path='/credit' component={Credit} />

=======
        <Route exact path='/login' component={Login} />
        <Route exact path='/reservation' component={Reservation} />
>>>>>>> e70a05e3d615a5cfcd07d6eb7e85c9e7ecec3b04
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
