import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StyleSheet, Image } from 'react-native'
import ExploreStack from '../myStacks/ExploreStack';
import RidingMapStack from '../myStacks/RidingMapStack';
import CommunicationStack from '../myStacks/CommunicationStack';
import ProfileStack from '../myStacks/ProfileStack';
import PostStack from '../myStacks/PostStack';


import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/MaterialIcons';


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: { height: 95, borderRadius: 30, position: "absolute", paddingRight: 15, paddingLeft:15, ...styles.shadow },
                    tabBarInactiveTintColor: '#989898',
                    tabBarShowLabel: true,
                    tabBarActiveTintColor: '#DA4F40',
                }}
            >
                <Tab.Screen
                    name='ExploreStack'
                    component={ExploreStack}
                    options={{
                        headerShown: false,
                        title: '探索旅程',
                        tabBarIcon: ({color}) => <View style={{marginTop:10}}><Icon name='motorcycle' color={color} size={32} /></View>
                    }}
                />
                <Tab.Screen
                    name='RidingMapStack'
                    component={RidingMapStack}
                    options={{
                        headerShown: false,
                        title: '騎乘地圖',
                        tabBarIcon: ({color}) => <View style={{marginTop:8}}><Icon name='map-marked-alt' color={color} size={30} /></View>
                    }}
                />
                <Tab.Screen
                    name='PostStack'
                    component={PostStack}
                    options={{
                        headerShown: false,
                        title: '',
                        tabBarIcon: ({focused}) =>(
                            <Image
                                source={require('../../assets/middleBtn.png')}
                                style={{
                                    width:70,
                                    height:80
                                }}
                            />
                        )
                    }}
                />
                <Tab.Screen
                    name='CommunicationStack'
                    component={CommunicationStack}
                    options={{
                        headerShown: false,
                        title: '車友交流',
                        tabBarIcon: ({color}) => <View style={{marginTop:16}}><Icon2 name='chat' color={color} size={30} /></View>
                    }}
                />
                <Tab.Screen
                    name='ProfileStack'
                    component={ProfileStack}
                    options={{
                        headerShown: false,
                        title: '個人資料',
                        tabBarIcon: ({color}) => <View style={{marginTop:12}}><Icon3 name='sports-motorsports' color={color} size={34} /></View>
                    }}
                />
            </Tab.Navigator>
        
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#989898',
        shadowOffset: {
            width: 0,
            height: -10,
        },
        shadowOpacity: 0.05,
        elevation: 4
    }
});

export default TabNavigator;