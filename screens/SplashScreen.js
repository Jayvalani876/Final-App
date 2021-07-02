import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import * as Animatable from 'react-native-animatable';
import { MaterialIcons } from "react-native-vector-icons";;

const SplashScreen = props => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    duration={1500}
                    source={require("../assets/logo.jpg")}
                    style={styles.logo}
                    resizeMode="cover"
                />
            </View>
            <Animatable.View style={styles.footer} animation="fadeInUpBig">
                <Text style={styles.title}>Stay connected with everyone!</Text>
                <Text style={styles.text}>Sign in with Account</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('SignInScreen')}>
                        <Text style={styles.signIn}>Get Started</Text>
                        <MaterialIcons
                            name="navigate-next"
                            color="#FFFFFF"
                            size={20}
                        />
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: "65%",
        height: "55%",
        borderRadius: 150,
        borderColor: "black",
        borderWidth: 3,
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: '#313231',
        marginTop: 5,
        fontFamily: "sofiaMedium"
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30,
        display: "flex",

    },
    signIn: {
        width: 150,
        height: 40,
        borderRadius: 50,
        flexDirection: 'row',
        backgroundColor: '#009387',
        textAlign: 'center',
        paddingVertical: 10,
        fontFamily: "sofiaMedium",
        color: "white",
        fontSize: 15
    },
});

export default SplashScreen;