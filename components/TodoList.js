import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";
import TodoListItem from "./TodoListItem";

/**
 * List elemeket összefogó komponens
 */
export default class TodoList extends Component {
    render() {
        const {
            todoListItems,
            removeTodoListItem,
            toggleTodoListItemCheckBox,
        } = this.props;
        return (
            // Ha sok lista elem rajzolódik ki, akkor egyszerűen kilógnak a képernyőröl,
            // ez a komponens biztosítja hogy a kilogó elemekhez letudjunk "görgetni"
            <ScrollView style={styles.container}>
                {/*
                    A tömbön végigmegyünk a map függvény segítségével, és minden tömb elem alapján
                    "legyártunk" egy lista elem komponenst
                */}
                {todoListItems.map((item, index) => (
                    <TodoListItem
                        removeTodoListItem={removeTodoListItem}
                        toggleTodoListItemCheckBox={toggleTodoListItemCheckBox}
                        key={String(index + item.value)}
                        index={index}
                        item={item}
                    />
                ))}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
