import React from "react";
import { TouchableOpacity } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"

import Icon from "react-native-vector-icons/Ionicons";
import { AntDesign } from "react-native-vector-icons";
import { MenuOutlined } from "@ant-design/icons"

import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ExploreScreen from "../screens/ExploreScreen";


const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="white"
        >
            <Tab.Screen
                name="Home"
                component={HomeStackScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarColor: '#009387',
                    tabBarIcon: ({ color }) => (
                        <Icon name="home-sharp" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Notification"
                component={DetailStackScreen}
                options={{
                    tabBarLabel: 'Notification',
                    tabBarColor: "#1f65ff",
                    tabBarIcon: ({ color }) => (
                        <Icon name="notifications-sharp" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarColor: '#694fad',
                    tabBarIcon: ({ color }) => (
                        <Icon name="person-sharp" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Explore"
                component={ExploreScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarColor: 'green',
                    tabBarIcon: ({ color }) => (
                        <Icon name="aperture-sharp" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
};

export default MainTabScreen;

const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator initialRouteName="Home">
            <HomeStack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerTintColor: "red",
                    headerTitle: "Home",
                    headerTitleAlign: "center",
                    headerStyle: {
                        backgroundColor: "#009387"
                    },
                    headerLeft: () => {
                        <TouchableOpacity>
                            <MenuOutlined />
                        </TouchableOpacity>
                    }
                }
                }
            />
        </HomeStack.Navigator >
    )
}

const DetailStackScreen = () => {
    return (
        <DetailStack.Navigator initialRouteName="Home">
            <DetailStack.Screen
                name="Detail"
                component={DetailScreen}
                options={{
                    headerTintColor: "red",
                    headerTitle: "Detail",
                    headerTitleAlign: "center",
                    headerStyle: {
                        backgroundColor: "#1f65ff"
                    },
                    headerRight: () => {
                        <AntDesign
                            name="bars"
                            size={25}
                            color="red"
                        />
                    }
                }}
            />
        </DetailStack.Navigator >
    )
}