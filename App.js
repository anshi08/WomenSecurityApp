import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './Navigation/MyStack'

export default function App({navigation}) {
  return (
    <NavigationContainer>
        <MyStack/>
    </NavigationContainer>
  );
}
