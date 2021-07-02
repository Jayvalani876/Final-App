import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.display}>This is Profile Screen</Text>
            <View style={styles.button}>
                <Button
                    title="Click Here"
                    onPress={() => alert('Buttton Clicked')}
                    color="#694fad"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        justifyContent: 'center'
    },
    display: {
        textAlign: 'center',
        alignItems: 'center',
        fontFamily: 'sofiaBold',
        fontSize: 18,
    },
    button: {
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 20
    }
});

export default ProfileScreen;