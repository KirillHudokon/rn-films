import React from 'react'
import { Navigation } from "react-native-navigation";
import { Provider } from 'react-redux';
import App from './src/screens/App';
import AddNew from './src/screens/AddNew';
import {store} from './src/store/configureStore'
import {goRoot} from './src/navigation'
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
Navigation.registerComponent('App', () => (props) => (
    <Provider store={store}>
      <App {...props} />
    </Provider>
), () => App);
Navigation.registerComponent('AddNew', () => (props) => (
  <Provider store={store}>
    <AddNew {...props} />
  </Provider>
), () => AddNew);

Navigation.events().registerAppLaunchedListener(() => {
  goRoot('App')
});

Navigation.setDefaultOptions({
  topBar: {
    backButton: { 
      color: "white"
    },
    background: {
      color: '#000000'
    }
  }
})