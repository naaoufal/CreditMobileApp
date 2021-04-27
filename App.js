import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Switch, Route } from 'react-router-native';
import Home from './app/screen/Home'
import Credit from './app/screen/Credit'
<<<<<<< HEAD
=======
import Login from './app/screen/Login'
>>>>>>> 80c26bd8aac72219e007b9cc4a71e3428eae7cf2
import Reservation from './app/screen/reservation'

export default function App() {
  return (
    <NativeRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/credit' component={Credit} />
<<<<<<< HEAD
=======
        <Route exact path='/login' component={Login} />
>>>>>>> 80c26bd8aac72219e007b9cc4a71e3428eae7cf2
        <Route exact path='/reservation' component={Reservation} />
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
