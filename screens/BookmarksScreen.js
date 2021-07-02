import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const BookmarksScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.display}>Bookmark Screen</Text>
            <View style={styles.button}>
                <Button
                    title="click here"
                    onPress={() => alert('Buttton Clicked')}
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

export default BookmarksScreen;