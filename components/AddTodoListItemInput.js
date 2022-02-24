import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import React, { Component } from "react";

/**
 * Ezen a komponensen belül tudjuk felvenni az új listaelemeket
 */
export default class AddTodoListItemInput extends Component {
    // Az állapoton belül definiáljuk a beviteli mező értéket "tükröző" adattagot üres sztring kezdőértékkel
    state = {
        inputValue: "",
    };

    render() {
        return (
            <View style={styles.container}>
                {/*
                    Beviteli mező, az onChangeText attribútumon keresztül megadtunk egy olyan függvényt,
                    amely biztosítja hogy a inputValue mindig "tükrözze" a mező tényleges értékét
                */}
                <TextInput
                    onChangeText={(value) =>
                        this.setState({ inputValue: value })
                    }
                    value={this.state.inputValue}
                    style={styles.input}
                />
                {/* Új lista elem hozzáadása */}
                <TouchableOpacity
                    onPress={this.addTodoListItem}
                    style={styles.button}
                >
                    <Text>+</Text>
                </TouchableOpacity>
            </View>
        );
    }

    // Új listaelem létrehozása
    addTodoListItem = () => {
        const { inputValue } = this.state;

        // Létrehozunk egy új objektumot, amely majd a lista elem állapotát fogja tükrözni,
        // például value lehet Mosogatni isComplete pedig alapjáraton false
        const newListItem = {
            value: inputValue,
            isComplete: false,
        };

        // Meghívjuk a "szülőtöl" kapott függvényt
        this.props.addTodoListItem(newListItem);
        // Az inputValue-et visszaállítjuk az eredeti állapotára, üres sztringre
        this.setState({ inputValue: "" });
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: 75,
        backgroundColor: "lightgrey",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        padding: 25,
    },
    button: {
        maxWidth: 30,
        height: 30,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        flex: 1,
    },
    input: {
        height: 30,
        flex: 1,
        backgroundColor: "white",
        padding: 5,
        marginRight: 10,
        borderRadius: 5,
    },
});
