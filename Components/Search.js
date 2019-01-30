import React from 'react'
import { View, Button, TextInput} from "react-native";

class Search extends React.Component {
    render () {
        return (
            <View>
                <TextInput placeholder="Titre Film" />
                <Button title="Recherche" onPress={() => {}}></Button>
            </View>
        )
    }
}

export default Search