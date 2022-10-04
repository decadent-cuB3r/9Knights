import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Explore Stack Components
import ProfileScreen from '../../screens/ProfileScreen';

//Theme and color mode
import { useTheme } from '@react-navigation/native'

//stack initial
const Stack = createStackNavigator();

const ProfileStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
            />
        </Stack.Navigator>
    )
}

export default ProfileStack;