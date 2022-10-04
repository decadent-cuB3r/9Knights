import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Explore Stack Components
import RidingMapScreen from '../../screens/RidingMapScreen';

//Theme and color mode
import { useTheme } from '@react-navigation/native'

//stack initial
const Stack = createStackNavigator();

const RidingMapStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="RidingMapScreen"
                component={RidingMapScreen}
            />
        </Stack.Navigator>
    )
}

export default RidingMapStack;