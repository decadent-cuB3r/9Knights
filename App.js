import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Box, Center, Text } from 'native-base';
import TabNavigator from './navigation/myTabs/TabNavigator';
import { NativeBaseProvider } from 'native-base';
import EventItem from "./components/eventItem";

import Navigation from './navigation';


export default function App() {
  return (
    <NativeBaseProvider>
      <Navigation />

    </NativeBaseProvider>

  );
}

