import React from 'react';
import {connect} from 'react-redux'
import {sortFilms} from '../actions/'
import {
  View,
  StyleSheet    
} from 'react-native';
import Action from '../components/Action';
import {goPush} from '../navigation'
const ActionsBar = ({sortFilms, componentId}) => {
  return (
    <View style={styles.actionBar}>
       <Action action={sortFilms} text='Sort a-z'/>
       <Action action={()=>goPush(componentId,'AddNew')} text='Add new'/>
    </View>
  );
};
const mapDispatchToProps = {
    sortFilms
}
const styles = StyleSheet.create({
    actionBar: {
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
export default connect(null, mapDispatchToProps)(ActionsBar);
