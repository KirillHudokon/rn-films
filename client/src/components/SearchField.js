import React from 'react'
import {
    View,
    StyleSheet
} from 'react-native'
import { TextInput } from 'react-native-paper';
import searchHoc from '../hoc/searchHoc'

const SearchField = ({
    value,
    changeValue,
    label
}) => {
    
    return(
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                onChangeText={changeValue}
                value={value}
                placeholder={label}
                mode="outlined"
                label={label}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    inputContainer:{
        marginBottom:20,
    },
    input:{
        width: '100%',

    }
})

export default searchHoc(SearchField)