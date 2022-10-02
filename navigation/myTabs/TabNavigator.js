import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Naigator>
            <Tab.Screen
                name='ExploreStack'
                component={{}}
            />
        </Tab.Naigator>
    )
}

export default TabNavigator;