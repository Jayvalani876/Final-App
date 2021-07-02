import React, { useState, useEffect, useMemo } from "react";

import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from "./MainTabScreen";
import SupportScreen from "../screens/SupportScreen";
import SettingsScreen from "../screens/SettingsScreen";
import BookMarksScreen from "../screens/BookmarksScreen";
import RootStackScreen from "./RootStackScreen";
import { AuthContext } from "../components/context";

import { DrawerContent } from "./DrawerContent";
import { View, ActivityIndicator } from "react-native";

const Drawer = createDrawerNavigator();

export const NavigationStack = () => {
    // const [isLoading, setIsLoading] = useState(true);
    // const [userTokens, setUserTokens] = useState(null);

    const initialLoginState = {
        isLoading: true,
        userName: null,
        userTokens: null,
    };
    const loginReducer = (preState, action) => {
        switch (action.type) {
            case 'RETRIEVE_TOKEN':
                return {};
            case 'LogIn':
                return {};
            case 'LogOut':
                return {};
            case 'Register':
                return {};

        }
    }

    const authContext = useMemo(() => ({
        signIn: () => {
            setUserTokens('fgkj');
            setIsLoading(false);
        },
        signOut: () => {
            setUserTokens(null);
            setIsLoading(false);
        },
        signUp: () => {
            setUserTokens('fgkj');
            setIsLoading(false);
        },
    }), []);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" />
            </View>
        )
    }

    return (

        <AuthContext.Provider value={authContext}>
            {userTokens != null ? (
                <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} >
                    <Drawer.Screen
                        name="HomeDrawer"
                        component={MainTabScreen}
                    />
                    <Drawer.Screen
                        name="SupportScreen"
                        component={SupportScreen}
                    />
                    <Drawer.Screen
                        name="SettingsScreen"
                        component={SettingsScreen}
                    />
                    <Drawer.Screen
                        name="BookmarksScreen"
                        component={BookMarksScreen}
                    />
                </Drawer.Navigator>
            )
                :
                <RootStackScreen />
            }
        </AuthContext.Provider>
    );
};