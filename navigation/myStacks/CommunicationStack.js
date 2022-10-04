import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Explore Stack Components
import CommunicationScreen from '../../screens/CommunicationScreen';

//Theme and color mode
import { useTheme } from '@react-navigation/native'

//stack initial
const Stack = createStackNavigator();

const CommunicationStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="CommunicationScreen"
                component={CommunicationScreen}
            />
        </Stack.Navigator>
    )
}

export default CommunicationStack;