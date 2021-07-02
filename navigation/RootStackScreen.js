import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "../screens/SplashScreen";
import SignUpScreen from "../screens/SignUpScreen";
import SignInScreen from "../screens/SignInScreen";

const RootStack = createStackNavigator();

const RootStackScreen = props => {
    return (
        <RootStack.Navigator headerMode="none">
            <RootStack.Screen
                name="SplashScreen"
                component={SplashScreen}
            />
            <RootStack.Screen
                name="SignUpScreen"
                component={SignUpScreen}
            />
            <RootStack.Screen
                name="SignInScreen"
                component={SignInScreen}
            />
        </RootStack.Navigator>
    );
};

export default RootStackScreen;