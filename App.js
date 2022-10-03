import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Box } from 'native-base';
import TabNavigator from './navigation/myTabs/TabNavigator';
import { NativeBaseProvider } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <Box>
        <Text>Test</Text>
      </Box>
    </NativeBaseProvider>
  );
}

