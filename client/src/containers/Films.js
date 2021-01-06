import React, {useEffect} from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import {connect} from 'react-redux'
import {getFilms, deleteFilm, resetError} from '../actions'
import Film from '../components/Film'
import Toast from 'react-native-toast-message';
const Films = ({
  films, 
  getFilms, 
  deleteFilm,
  resetError
}) => {
    const {loading, error} = films
    useEffect(()=>{
        getFilms()
    }, [getFilms])
    useEffect(()=>{
        if(error){
            console.log(error)
            Toast.show({
                type: 'error',
                position: 'bottom',
                text1: error,
                visibilityTime: 4000,
                autoHide: true,
                bottomOffset: 40,
                onHide: ()=>resetError(),
              });
        }
    }, [error])

    const renderFilms = () => {
        if(loading){
            return <View style={styles.filmsInfo}>
                <Text style={styles.filmsInfoText}>
                    Loading...
                </Text>
            </View>
        }
        if(!films.films.length){
            return <View style={styles.filmsInfo}>
                <Text style={styles.filmsInfoText}>
                    No available films
                </Text>
            </View>
        }
        return films.films.map(film => <Film key={film._id} deleteFilm={deleteFilm} film={film}/>)
    }
    return (
        <View style={styles.films}>
            {renderFilms()}
        </View>
    );
}
const styles = StyleSheet.create({
    films:{
        marginBottom: 35
    },
    filmsInfo:{
        marginBottom: 20
    },
    filmsInfoText:{
        fontSize: 22,
        textAlign:'center'
    }
})
const mapStateToProps = store => ({
    films: store.films
})
const mapDispatchToProps = {
    getFilms,
    deleteFilm,
    resetError
}
  export default connect(mapStateToProps, mapDispatchToProps)(Films);