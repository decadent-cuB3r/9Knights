import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Explore Stack Components
import HomeScreen from '../../screens/HomeScreen';

//Theme and color mode
import { useTheme } from '@react-navigation/native'

//stack initial
const Stack = createStackNavigator();

const ExploreStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
            />
        </Stack.Navigator>
    )
}

export default ExploreStack;