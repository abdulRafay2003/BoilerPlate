/**
 * @format
 */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {
  AppRegistry,
  Platform,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import configureStore from './src/redux/Store';
import DataHandler from './src/services/dataHandler.service';
import {PersistGate} from 'redux-persist/integration/react';
// import PushNotificationIOS from "@react-native-community/push-notification-ios";
// import PushNotification from "react-native-push-notification";
// import { notificationManager } from "./src/config/utills/NotificationManager";
// import { NavigationService } from "./src/config";
// import AsyncStorage from "@react-native-async-storage/async-storage";
const {runSaga, store, persistor} = configureStore();
DataHandler.setStore(store);

// // Must be outside of any component LifeCycle (such as `componentDidMount`).
// PushNotification.configure({
//   // (optional) Called when Token is generated (iOS and Android)
//   onRegister: function (token) {
//     console.log("TOKEN:FCM", token);
//   },

//   // (required) Called when a remote is received or opened, or local notification is opened
//   onNotification: function (notification) {
//     console.log("NOTIFICATION:===ON", notification);
//     notificationManager.showNotification(
//       notification?.id,
//       notification?.title,
//       notification?.message,
//       notification?.data

//     );
//     // process the notification
//     // (required) Called when a remote is received or opened, or local notification is opened

//     if (notification?.userInteraction == true) {
//       console.log("notificaton is here");
//       AsyncStorage.getItem("userData").then((user) => {
//         if (user) {
//           let parsedData = JSON.parse(user);
//           console.log("notificaton is here", parsedData);
//           NavigationService.navigate("Notification");
//           // setTimeout(() => {
//           //   NavigationService.reset_0('TabStack');
//           // }, 2000);
//         }
//       });
//     }

//     notification.finish(PushNotificationIOS.FetchResult.NoData);
//   },

//   // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
//   onAction: function (notification) {
//     console.log("ACTION:--===", notification.action);
//     console.log("NOTIFICATION:Action==", notification);
//     // process the action
//   },

//   // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
//   onRegistrationError: function (err) {
//     console.error(err.message, err);
//   },

//   // IOS ONLY (optional): default: all - Permissions to register.
//   permissions: {
//     alert: true,
//     badge: true,
//     sound: true,
//   },

//   // Should the initial notification be popped automatically
//   // default: true

//   popInitialNotification: true,

//   /**
//    * (optional) default: true
//    * - Specified if permissions (ios) and token (android and ios) will requested or not,
//    * - if not, you must call PushNotificationsHandler.requestPermissions() later
//    * - if you are not using remote notification or do not have Firebase installed, use this:
//    *     requestPermissions: Platform.OS === 'ios'
//    */

//   requestPermissions: true,
// });

class AppView extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </>
    );
  }
}

AppRegistry.registerComponent(appName, () => AppView);
