import { Platform } from "react-native";

const constants = {
  IS_ENV_DEVELOPMENT: __DEV__,
  IS_ANDROID: Platform.OS === "android",
  IS_IOS: Platform.OS === "ios",
  IS_DEBUG_MODE_ENABLED: Boolean(window.navigator.userAgent),
  FirebaseConfig: {
    apiKey: "AIzaSyDm2pcwdq8hVf3nh1mTAkA_eIpik5P3NPw",
    authDomain: "camptrip-8fe2b.firebaseapp.com",
    databaseURL: "https://camptrip-8fe2b.firebaseio.com",
    projectId: "camptrip-8fe2b",
    storageBucket: "camptrip-8fe2b.appspot.com",
    messagingSenderId: "720317765395"
  },
  FacebookAppId:"407237716742819"
};

export default constants;