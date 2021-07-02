import React, { useState } from "react";
import { StyleSheet, View, Text, Button, Platform, TextInput, TouchableOpacity } from "react-native";

import * as Animatable from 'react-native-animatable';
import { AntDesign } from "@expo/vector-icons";

import { AuthContext } from "../components/context";

const SignInScreen = props => {
    //storing data
    const [data, setData] = useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
    });

    const { signIn } = React.useContext(AuthContext);

    //Check Circle Logic
    const textInputChange = (val) => {
        if (val.length != 0) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            })
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false
            })
        }
    }

    //Password Eye Logic
    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val,
        })
    }

    //update secure text
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome</Text>
            </View>

            <Animatable.View style={styles.footer} animation="slideInUp">
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <AntDesign
                        name="user"
                        size={20}
                        color="#05375a"
                        style={{ marginTop: 15 }}
                    />
                    <TextInput
                        placeholder="Your Email"
                        style={[styles.textInput, { marginTop: 10 }]}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        onChangeText={(val) => textInputChange(val)}
                    />
                    {data.check_textInputChange ?
                        <Animatable.View animation="bounceIn">
                            <AntDesign
                                name="checkcircleo"
                                color="green"
                                size={20}
                                style={{ marginTop: 15 }}
                            />
                        </Animatable.View>
                        : null}
                </View>
                <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
                <View style={styles.action}>
                    <AntDesign
                        name="lock1"
                        size={20}
                        color="#05375a"
                        style={{ marginTop: 15 }}
                    />
                    <TextInput
                        placeholder="Your Password"
                        style={[styles.textInput, { marginTop: 10 }]}
                        autoCapitalize="none"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                        {data.secureTextEntry ?
                            <AntDesign
                                name="eyeo"
                                color="grey"
                                size={20}
                                style={{ marginTop: 15 }}
                            />
                            :
                            <AntDesign
                                name="eye"
                                color="grey"
                                size={20}
                                style={{ marginTop: 15 }}
                            />
                        }
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <Button
                        title="Sign In"
                        color="#009387"
                        onPress={() => { signIn() }}
                    />
                </View>
                <View style={styles.buttons} >
                    <Button
                        title="signUp"
                        color="#2E852E"
                        onPress={() => props.navigation.navigate('SignUpScreen')} />
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
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        marginTop: 50,
        paddingHorizontal: 30,
    },
    buttons: {
        marginTop: 30,
        paddingHorizontal: 30,
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default SignInScreen;