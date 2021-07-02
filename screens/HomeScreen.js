import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.display}>Home Screen</Text>
            <View style={styles.button}>
                <Button
                    title="Click Here"
                    onPress={() => alert('Button Clicked')}
                    color="#009387"
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

export default HomeScreen;