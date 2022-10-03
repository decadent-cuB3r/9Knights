import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ExploreStack from "../myStacks/ExploreStack";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Naigator>
            <Tab.Screen
                name='ExploreStack'
                component={{ ExploreStack }}
            />
            <Tab.Screen
                name=''
            />
        </Tab.Naigator>
    )
}

export default TabNavigator;