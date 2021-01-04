import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-paper';

const Action = ({
    text,
    action,
    label
}) => {
    return(
        <View>
            <Button style={{backgroundColor:'black'}} mode="contained" onPress={action}>
                {text}
            </Button>
        </View>
    )
}

export default Action