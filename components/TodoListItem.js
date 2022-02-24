import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { Component } from "react";

/**
 * Lista elemek megjelenítéséért felelős komponens
 */
export default class TodoListItem extends Component {
    render() {
        // Ez az ún. object destructuring, ezzel gyakorlatilag adattagokat tudunk "kiszedni" az adott objektumból,
        // így később nem kell mindig this.props.valamilyenadat-al hivatkozni az adott "örökölt" adatra
        const { item, toggleTodoListItemCheckBox, removeTodoListItem, index } =
            this.props;
        return (
            <View style={styles.container}>
                {/* Ezzel a gombbal tudjuk szabályozni hogy elkészültünk egy lista elembe foglalt teendővel */}
                <TouchableOpacity
                    onPress={() => toggleTodoListItemCheckBox(index)}
                    style={[
                        styles.checkBox,
                        {
                            backgroundColor: item.isDone
                                ? "black"
                                : "lightgrey",
                        },
                    ]}
                />
                {/* Itt jelenítjük meg egy lista elem szöveges értékét */}
                <Text style={styles.itemValue}>{item.value}</Text>
                {/* Ezzel a gombbal tudjuk törölni az adott lista elemet */}
                <TouchableOpacity onPress={() => removeTodoListItem(index)}>
                    <Text>🗑️</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        elevation: 10,
        backgroundColor: "lightgrey",
        margin: 10,
        borderRadius: 5,
    },
    checkBox: {
        borderWidth: 1,
        width: 20,
        height: 20,
    },
    itemValue: {
        fontSize: 16,
        fontWeight: "bold",
    },
});
