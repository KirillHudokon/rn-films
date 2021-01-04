import { Navigation } from "react-native-navigation";
import App from './src/screens/App';
Navigation.registerComponent('App', () => App);
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