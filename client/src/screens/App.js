import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet
} from 'react-native';
import ActionsBar from '../containers/ActionsBar';
import FilePicker from '../containers/FilePicker';
import Films from '../containers/Films';
import SearchBar from '../containers/SearchBar';


const App = ({componentId}) => {
  return (
    <ScrollView style={styles.app}>
      <View style={styles.container}>
        <SearchBar/>
        <ActionsBar componentId={componentId}/>
        <Films/>
        <FilePicker/>
      </View>
    </ScrollView>
  );
};

App.options = {
  topBar: {
    title: {
      text: 'Film info',
      color: 'white',
      fontSize: 19,
      alignment: 'center'
    }
  }
}

const styles = StyleSheet.create({
  app:{
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  container: {
    flex: 1,
    paddingTop: 15,
    paddingLeft: 10,
    paddingRight: 10
  },
})
export default App;
