import { Navigation } from "react-native-navigation";
export const goRoot = (componentName) => Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: componentName
            }
          }
        ]
      }
    }
});

export const goPush = (componentId, component) => {
    Navigation.push(componentId, {
      component: {
        name: component,
      },
    });
};
  