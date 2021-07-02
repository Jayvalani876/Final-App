import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const DetailScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.display}>This is Detail Screen</Text>
            <View style={styles.button}>
                <Button
                    title="Click Here"
                    onPress={() => alert('Button Clicked')}
                    color="#1f65ff"
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

export default DetailScreen;