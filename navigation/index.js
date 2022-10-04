import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabNavigator from '../navigation/myTabs/TabNavigator'

const Navigation = () => {
    return (
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    );
  }

export default Navigation;
