import React from "react";
import { StyleSheet, View } from "react-native";
import AddTodoListItemInput from "./components/AddTodoListItemInput";
import TodoList from "./components/TodoList";
import TodoListHeader from "./components/TodoListHeader";

/**
 *  Itt található alkalmazás belépő pontja
 */
export default class App extends React.Component {
    // Definiálom a komponens állapotát,
    // tehát egy új adattagot felveszek a lista elemeknek, melynek értéke kezdetben egy üres tömb lesz
    state = {
        todoListItems: [],
    };

    // Render függvény amely a megjelenítésért felelős
    render() {
        return (
            // style attribútum segítségével tudjuk hozzárendelni egy komponenshez a fájl legalján definiált szabályokat
            <View style={styles.container}>
                {/* Itt lehet látni a főbb komponenseket: fejléc, lista, valamint beviteli mező + gomb */}
                <TodoListHeader title="Todolist" />
                <TodoList
                    todoListItems={this.state.todoListItems}
                    removeTodoListItem={this.removeTodoListItem}
                    toggleTodoListItemCheckBox={this.toggleTodoListItemCheckBox}
                />
                <AddTodoListItemInput addTodoListItem={this.addTodoListItem} />
            </View>
        );
    }

    // Hozzáadok egy új elemet a listához
    addTodoListItem = (listItem) => {
        const { todoListItems } = this.state;

        // A komponens állapotát "frissítjük"
        this.setState({ todoListItems: [...todoListItems, listItem] });
    };

    // Eltávolítok egy elemet tömb index alapján a listából
    removeTodoListItem = (index) => {
        const todoListItems = [...this.state.todoListItems];

        todoListItems.splice(index, 1);

        this.setState({ todoListItems });
    };

    // Módosítom a egy adott tömb indexen lévő objektum isCompleted értékét, gyakorlatilag negálom
    toggleTodoListItemCheckBox = (index) => {
        const todoListItems = [...this.state.todoListItems];

        todoListItems[index].isDone = !todoListItems[index].isDone;

        this.setState({ todoListItems });
    };
}

// Webfejlesztésből jól ismert CSS-hez hasonló szabályokat tudunk létrehozni,
// melyel egy komponens kinézetét, pozicióját tudjuk testre szabni
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
