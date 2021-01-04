import React from 'react';
import {connect} from 'react-redux'
import {searchFilms, getFilms} from '../actions/'
import {
  View,
} from 'react-native';
import SearchField from '../components/SearchField';

const SearchBar = ({searchFilms, getFilms}) => {
  return (
    <View>
       <SearchField getAll={getFilms} searchFilms={()=>text=>searchFilms('stars', text)} label='stars'/>
       <SearchField getAll={getFilms} searchFilms={()=>text=>searchFilms('title', text)} label='title'/>
    </View>
  );
};
const mapDispatchToProps = {
    searchFilms,
    getFilms
}
export default connect(null, mapDispatchToProps)(SearchBar);
