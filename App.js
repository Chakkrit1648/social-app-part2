import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import firebase from "firebase";

import HomeScreen from './screens/HomeScreen'
import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import MessageScreen from './screens/MessageScreen'
import NotificationScreen from './screens/NotificationScreen'
import PostScreen from './screens/PostScreen'
import ProfileScreen from './screens/ProfileScreen'
import RegisterScreen from './screens/RegisterScreen'

var firebaseConfig = {
  apiKey: "AIzaSyDdNMGInCNR2xuB3UJuwI4UKs5kOrZ9qxk",
  authDomain: "reactexpo-7690d.firebaseapp.com",
  projectId: "reactexpo-7690d",
  storageBucket: "reactexpo-7690d.appspot.com",
  messagingSenderId: "948613967997",
  appId: "1:948613967997:web:c4e8daa29fafad7b00c114",
  measurementId: "G-VBTYV46V9B"
};

firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home: HomeScreen,
  Message: MessageScreen,
  Notification: NotificationScreen,
  Post: PostScreen,
  Profile: ProfileScreen,
});

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
});


export default createAppContainer(
  createSwitchNavigator(
      {
          Loading: LoadingScreen,
          App: AppStack,
          Auth: AuthStack
      },
      {
          initialRouteName: "Loading"
      }
  )
);