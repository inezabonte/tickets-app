import React from 'react';
import { Appbar } from 'react-native-paper';

export default function CustomNavigationBar({ navigation, previous }) {
    return (
      <Appbar.Header style={{backgroundColor:'#257AAA'}}>
        {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
        <Appbar.Content title="Tickets App" />
      </Appbar.Header>
    );
  }