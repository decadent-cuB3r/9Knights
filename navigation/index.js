import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabNavigator from '../navigation/myTabs/TabNavigator';
import LoginScreen from '../screens/LoginScreen';


const Navigation = () => {
  const login = false;


  return (
    !login ? <LoginScreen /> :
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
  );
}

export default Navigation;
