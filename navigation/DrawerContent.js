import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from "react-native-paper"

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { AuthContext } from "../components/context";

import {
    DrawerContentScrollView,
    DrawerItem
} from "@react-navigation/drawer"

export function DrawerContent(props) {

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const { signOut } = React.useContext(AuthContext);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme)
    }

    return (
        <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: "row", marginTop: 5 }}>
                            <Avatar.Image
                                source={{
                                    uri: "https://homepages.cae.wisc.edu/~ece533/images/watch.png"
                                }}
                                size={50}
                                style={{ marginTop: 5 }}
                            />
                            <View style={{ marginLeft: 20 }}>
                                <Title style={styles.title}>Jay Valani</Title>
                                <Caption style={styles.caption}>@jayvalani</Caption>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={[styles.section, { marginLeft: 19 }]}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>200</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            label="Home"
                            labelStyle={{ fontSize: 18, color: "#313231" }}
                            icon={(color, size) => (
                                <Icon
                                    name="home-outline"
                                    color={color, "#313231"}
                                    size={size, 25}
                                    onPress={() => { props.navigation.navigate('Home') }}
                                />
                            )}
                        />
                        <DrawerItem
                            label="Profile"
                            labelStyle={{ fontSize: 18, color: "#313231" }}
                            icon={(color, size) => (
                                <Icon
                                    name="account-outline"
                                    color={color, "#313231"}
                                    size={size, 25}
                                    onPress={() => { props.navigation.navigate('Profile') }}
                                />
                            )}
                        />
                        <DrawerItem
                            label="Bookmarks"
                            labelStyle={{ fontSize: 18, color: "#313231" }}
                            icon={(color, size) => (
                                <Icon
                                    name="bookmark-outline"
                                    color={color, "#313231"}
                                    size={size, 25}
                                    onPress={() => { props.navigation.navigate('BookmarksScreen') }}
                                />
                            )}
                        />
                        <DrawerItem
                            label="Settings"
                            labelStyle={{ fontSize: 18, color: "#313231" }}
                            icon={(color, size) => (
                                <Icon
                                    name="cog-outline"
                                    color={color, "#313231"}
                                    size={size, 25}
                                    onPress={() => { props.navigation.navigate('SettingsScreen') }}
                                />
                            )}
                        />
                        <DrawerItem
                            label="Support"
                            labelStyle={{ fontSize: 18, color: "#313231" }}
                            icon={(color, size) => (
                                <Icon
                                    name="account-check-outline"
                                    color={color, "#313231"}
                                    size={size, 25}
                                    onPress={() => { props.navigation.navigate('SupportScreen') }}
                                />
                            )}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Preference">
                        <TouchableRipple onPress={() => { toggleTheme() }}>
                            <View style={styles.preference}>
                                <Text style={{ fontSize: 15, fontFamily: "sofiaMedium", color: "#313231" }}>Dark Theam</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDarkTheme} />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    label="Sign Out"
                    labelStyle={{ fontSize: 18, color: "#313231" }}
                    icon={(color, size) => (
                        <Icon
                            name="exit-to-app"
                            color={color, "#313231"}
                            size={size, 25}
                            onPress={() => { signOut() }}
                        />
                    )}
                />
            </Drawer.Section>
        </View>
    )
};

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 14,
        marginTop: 3,
        fontFamily: "sofiaBold",
    },
    caption: {
        fontFamily: "sofiaMedium",
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
    },
    section: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 3,
    },
    paragraph: {
        fontFamily: "sofiaBold",
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: "#f4f4f4",
        borderTopWidth: 1
    },
    preference: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 12,
        paddingHorizontal: 16,
    }
});