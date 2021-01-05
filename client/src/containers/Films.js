import React, {useEffect} from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import {connect} from 'react-redux'
import {getFilms, deleteFilm} from '../actions'
import Film from '../components/Film'
const Films = ({
  films,
  loading, 
  getFilms, 
  deleteFilm
}) => {
    useEffect(()=>{
        getFilms()
    }, [getFilms])

    const renderFilms = () => {
        if(loading){
            return <View style={styles.filmsInfo}>
                <Text style={styles.filmsInfoText}>
                    Loading...
                </Text>
            </View>
        }
        if(!films.length){
            return <View style={styles.filmsInfo}>
                <Text style={styles.filmsInfoText}>
                    No available films
                </Text>
            </View>
        }
        return films.map(film => <Film key={film._id} deleteFilm={deleteFilm} film={film}/>)
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
    loading: store.films.loading,
    films: store.films.films,
});
const mapDispatchToProps = {
    getFilms,
    deleteFilm
}
  export default connect(mapStateToProps, mapDispatchToProps)(Films);