import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import RegisterSuccessScreen from '../screens/RegisterSuccessScreen';

export default createAppContainer(createSwitchNavigator({
  Auth:LoginScreen,
  Register:RegisterScreen,
  RegisterSuccess:RegisterSuccessScreen,
  Main: MainTabNavigator,
},{
  initialRouteName:'Auth'
}));