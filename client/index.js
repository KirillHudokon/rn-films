import React from 'react'
import { Navigation } from "react-native-navigation";
import { Provider } from 'react-redux';
import App from './src/screens/App';
import {store} from './src/store/configureStore'
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
Navigation.registerComponent('App', () => (props) => (
    <Provider store={store}>
      <App {...props} />
    </Provider>
), () => App);
Navigation.events().registerAppLaunchedListener(() => {
   Navigation.setRoot({
     root: {
       stack: {
         children: [
           {
             component: {
               name: 'App'
             }
           }
         ]
       }
     }
  });
});