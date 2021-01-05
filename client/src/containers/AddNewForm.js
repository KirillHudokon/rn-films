import React, { useState, useReducer } from 'react';
import { TextInput, Button } from 'react-native-paper';
import { connect } from 'react-redux'
import { addFilm } from '../actions/'
import { textValues } from '../utils/textValues'
import { Navigation } from 'react-native-navigation';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
const initialState = {
    title: '',
    format: '',
    releaseYear: '',
    stars: ''
}
const SET_NEW_INFO = 'SET_NEW_INFO'
function reducer(state, action) {
    switch (action.type) {
        case SET_NEW_INFO:
            return { ...state, [action.payload.name]: action.payload.value };
        default:
            throw new Error();
    }
}
const AddNewForm = ({ addFilm, componentId }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [errors, setErrors] = useState([])

    const check = () => {
        const validation = {
            title(val){
                if(val.length < 4){
                    return {
                        name: 'title', 
                        message: 'not valid, length must be > 4'
                    }
                }
            },
            format(val){
                const newVal = val.toLowerCase()
                if(newVal !== 'vhs' && newVal !== 'dvd' && newVal !== 'blu-ray'){
                    return {
                        name : 'format',
                        message: 'unknown format'
                    }
                }
            },
            releaseYear(val){
                if(isNaN(val)){
                    return {
                        name: 'releaseYear',
                        message : 'release year must be a number'
                    }
                }
                if(val<1850 || val>2020){
                    return {
                        name: 'releaseYear',
                        message : 'not valid, value must be >= 1850 and <= 2020'
                    }
                }
            },
            stars(val){
                if(val.length < 3){
                    return {
                        name: 'stars',
                        message : 'not valid, length must be > 3'
                    }
                }
                if([...new Set(val.split(',').map(field=> field.trim().toLowerCase()))].length !== val.split(',').map(field=> field.trim().toLowerCase()).length){
                    return {
                        name: 'stars',
                        message : 'not valid, please remove same stars'
                    }
                }
            }
        }
        const filterErrors = Object.entries(state).map(info => {
            if (typeof info[1] !== 'number') {
                return validation[info[0]](info[1].trim())
            }
            return validation[info[0]](info[1])
        }).filter(filteredInfo => filteredInfo)
        setErrors(filterErrors)
        return filterErrors
    }
    const sumbit = () => {
        const savedErrors = check()
        if (!savedErrors.length) {
            let newState = { ...state }
            newState = { ...newState, releaseYear: Number(newState.releaseYear) }
            addFilm(newState)
            Navigation.pop(componentId)
        }
    }
    const renderFields = () => {
        return Object.keys(initialState).map(field => {
            const error = errors.find(fieldError => fieldError.name === field)
            return <View style={styles.field} key={field}>
                <TextInput
                    error={Boolean(error)}
                    mode="outlined"
                    label={textValues[field]}
                    onChangeText={(text) => {
                        if (field === "releaseYear" && isNaN(text)) {

                        }
                        dispatch({
                            type: SET_NEW_INFO,
                            payload: {
                                name: field,
                                value: field === "releaseYear" ? text.replace(/[^0-9]/g, '') : text
                            }
                        })
                    }}

                    value={state[field]}
                />
                {
                    error?.message && <View style={styles.errorContainer}>
                        <Text style={styles.errorText}>
                            {error.message}
                        </Text>
                    </View>
                }
            </View>
        })
    }
    return (
        <View style={styles.form}>
            <View style={styles.fieldContainer}>
                {renderFields()}
            </View>
            <View style={styles.buttonContainer}>
                <Button variant="contained" color="white" style={{ backgroundColor: '#4caf50', borderRadius: 10 }} onPress={sumbit}>
                    Add film
            </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    field: {
        marginBottom: 20
    },
    errorText: {
        paddingLeft: 10,
        color: 'red'
    }
})
export default connect(null, { addFilm })(AddNewForm);
