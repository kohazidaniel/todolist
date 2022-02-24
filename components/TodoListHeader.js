import { StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";

export default class TodoListHeader extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.headerTitle}>
                    {/*
                        Fejléc címsorát jelenítjük meg, amit eggyel kintebb a title attribútumon keresztül adhatunk meg,
                        de ha nem adjuk meg a || operátor segítségével a "Title" értéket kapja meg
                    */}
                    {this.props.title || "Title"}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 60,
        backgroundColor: "lightgrey",
        elevation: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 25,
        marginTop: 25,
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: "bold",
    },
});
