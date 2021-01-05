import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux'
import {importFile} from '../actions/'
import DocumentPicker from 'react-native-document-picker';
const FilePicker = ({importFile}) => {
  const selectFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      console.log(res)
     // importFile(res);
    } catch (err) {
        console.log(err)
    }
  };
  return (
    <View style={styles.selectFileContainer}>
      <TouchableOpacity
        style={styles.selectFile}
        activeOpacity={0.5}
        onPress={selectFile}>
        <Text style={styles.selectFileText}>Select File</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  selectFileContainer:{
    marginBottom:20
  },
  selectFile:{
    width: '100%',
    height: 50,
    backgroundColor: 'black',
    borderRadius: 10,
    justifyContent:'center'
  },
  selectFileText:{
    width: '100%',
    textAlign: 'center',
    color: 'white',
    fontSize: 19
  } 
});

export default connect(null, {importFile})(FilePicker)