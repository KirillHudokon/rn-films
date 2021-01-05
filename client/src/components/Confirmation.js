import React from 'react'
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet
} from "react-native"
function Confirmation({action, closeModal}) {
    const actionWithClosingModal = () => {
        action()
        closeModal()
    }
    return (
        <View style={styles.confirmationContainer}>
            <View style={styles.confirmationTitle}>
                <Text style={styles.confirmationTitleText}>
                    Are you sure?
                </Text>
            </View>
            <View style={styles.actionContainer}>
                <View style={styles.action}>
                    <TouchableOpacity style={[styles.actionButton, styles.actionSuccess]} onPress={actionWithClosingModal}>
                        <Text style={styles.actionText}>
                            Yes 
                        </Text> 
                    </TouchableOpacity>
                </View>
                <View style={styles.action}>
                    <TouchableOpacity style={[styles.actionButton, styles.actionClose]} onPress={closeModal}>
                        <Text style={styles.actionText}>
                            No
                        </Text>           
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    confirmationContainer: {
        width: '100%',
        backgroundColor: 'white',
        padding: 20,
    },
    confirmationTitle:{
        marginBottom: 30,
    },
    confirmationTitleText:{
        textAlign: 'center',
        fontSize: 19,   
    },
    actionContainer:{
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    actionButton:{
        width: 100,
        height: 30,
        justifyContent: 'center',
    },
    actionSuccess:{
        backgroundColor: 'red'
    },
    actionClose:{
        backgroundColor: '#00FF00'
    },
    actionText:{
        textAlign: 'center',
        fontSize: 19
    }
})

export default Confirmation;