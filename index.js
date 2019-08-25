import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import AppNavigator from './navigation/AppNavigator';
import LoginScreen from './screens/LoginScreen';

export default class Index extends React.Component {
    state = {
      checkedSignIn:false,
      signedIn:false,
      register:false
    }
    updateLogin = ()=>{
      console.log("Logging In....")
      this.setState({
        signedIn:true
      })
    }
  
    render() {
      
      if(this.state.signedIn){
        return (
          <View>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
          </View>
        );
      }else{
        return(
          <LoginScreen loggedin={this.updateLogin}></LoginScreen>
        )
      }
    }
  }