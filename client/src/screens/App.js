import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet
} from 'react-native';
import ActionsBar from '../containers/ActionsBar';
import SearchBar from '../containers/SearchBar';


const App = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <SearchBar/>
        <ActionsBar/>
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
    },
    background: {
      color: '#000000'
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 15,
    paddingLeft: 10,
    paddingRight: 10
  },
})
export default App;
