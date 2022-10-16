import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icons from 'react-native-vector-icons/Ionicons';
//Explore Stack Components
import HomeScreen from '../../screens/HomeScreen';
//import { useFonts, NotoSerifTC_400Regular } from "@expo-google-fonts/dev";

//Theme and color mode
import { useTheme } from '@react-navigation/native'

// const [fontsLoaded] = useFonts({
//     'Inter-Black': require('./assets/fonts/NotoSerifTC-Bold.otf'),
//   });

//stack initial
const Stack = createStackNavigator();

const ExploreStack = () => {
//    let [fontsLoaded] = useFonts({
//        NotoSerifTC_400Regular
//    });
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={({ navigation }) => ({
                    title: '探索旅程',
                    headerTitleAlign: 'left',
                    headerStyle: {
                        backgroundColor: '#DA4F40',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontSize: 32,
                        fontFamily: "NotoSerifTC_400Regular"
                    },
                    headerRight: () => (
                        <Icons></Icons>
                    ),
                    headerRight: () => (
                        <Icons></Icons>
                    ),
                })}
            />
        </Stack.Navigator>
    )
}

export default ExploreStack;