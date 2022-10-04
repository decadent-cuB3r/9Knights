import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Explore Stack Components
import PostScreen from '../../screens/PostScreen';

//Theme and color mode
import { useTheme } from '@react-navigation/native'

//stack initial
const Stack = createStackNavigator();

const PostStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="PostScreen"
                component={PostScreen}
            />
        </Stack.Navigator>
    )
}

export default PostStack;