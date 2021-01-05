import React, {useState, useRef} from "react"
import {
    View,
    Text, 
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import Confirmation from './Confirmation'
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-paper';
import {textValues} from '../utils/textValues'
const Film = ({
  film, 
  deleteFilm
}) => {
    const [isOpen, setVisibility] = useState(false);
    const [isModalOpen, setModalVisibility] = useState(false)
    const changeModalVisibility = () =>{
        setModalVisibility(!isModalOpen) 
     } 
    const changeVisibility = (e) =>{
       setVisibility(!isOpen) 
    }
    const deleteFilmAction = () => {
        deleteFilm(film)
    } 
    const renderButton = () => {
        return <Button mode="outlined" onPress={changeVisibility}>
            {isOpen ? "Close" : "Open"}
        </Button>
    }
    const renderFilmInfo = () => {
        const filmInfo = Object.entries(film).map(info => {
            if(info[0] !== 'title' && info[0] !== '__v'){
                return <View key={`${film.id} - ${info[0]} : ${info[1]}`} style={styles.filmInfo}>
                    <Text>
                        {`${textValues[info[0]]} : ${info[1]}`}
                    </Text>
                </View>
            }
        })
        return isOpen ? (
            <View className={styles.filmInfoContainer}>
                    {filmInfo}
            </View>
        ) : null
    }
    const renderModal = () => {
        return <Modal isVisible={isModalOpen} onBackdropPress={changeModalVisibility}>
            <Confirmation closeModal={changeModalVisibility} action={deleteFilmAction}/>
        </Modal> 
      }
    return (
        <>
            <View style={styles.film}>
                    <View style={styles.filmHeader}>
                        <View style={styles.filmTitleContainer}>
                            <Text style={styles.filmTitle}>
                                {film.title.trim()}
                            </Text>
                        </View>
                        <View style={styles.filmDeleteContainer}>
                            <TouchableOpacity style={styles.filmDeleteTouch} onPress={changeModalVisibility}>
                                <Text>
                                <Icon name="trash" size={20} color="white"/>;  
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.filmContainer}>
                        <View style={styles.filmInfoVisibilityController}>
                            {renderButton()}
                        </View>               
                        {renderFilmInfo()}             
                    </View>
            </View>
            {renderModal()}
        </>
    );
}
const styles = StyleSheet.create({
    film: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom:10,
        overflow: 'hidden'
    },
    filmHeader: {
        marginBottom: 20,
        position: 'relative',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    filmTitle: {
        textAlign: 'center',
        color: 'white'
    },
    filmContainer: {
        padding: 10
    },
    filmInfoVisibilityController: {
        marginBottom: 10
    },
    filmInfo:{
        fontSize: 16,
        marginBottom: 10
    },
    filmDeleteContainer:{
        width: 40,
        height: '100%',
        position: 'absolute',
        top:0,
        right: 0
    },
    filmDeleteTouch:{
        backgroundColor:'black',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }

  })
  
  export default Film;