/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';


const App = () => {
  return (
    <ScrollView>
      <View>
        <Text>
            1 1111
        </Text>
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
export default App;
