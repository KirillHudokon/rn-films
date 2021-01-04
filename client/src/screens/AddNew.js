import React from 'react'
import {
  View,
  ScrollView,
  StyleSheet
} from 'react-native';
import AddNewForm from '../containers/AddNewForm';
const AddNew = ({componentId}) => {
  return (
    <ScrollView style={styles.app}>
      <View style={styles.container}>
        <AddNewForm componentId={componentId}/>
      </View>
    </ScrollView>
  );
};

AddNew.options = {
  topBar: {
    title: {
      text: 'Add new film',
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
export default AddNew;
