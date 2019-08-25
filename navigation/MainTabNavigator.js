import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TripLogs from '../screens/TripLogs';
import colors from '../constants/colors';
import AddButton from '../components/AddButton';
import AddTripScreen from '../screens/AddTripScreen';

const navOptions = {
  headerMode:'none'
}

const HomeStack = createStackNavigator({
  Home: HomeScreen,
},navOptions);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'home'}
    />
  ),
};

const TripLogsStack = createStackNavigator({
  Triplog: TripLogs,
},navOptions);

TripLogsStack.navigationOptions = {
  tabBarLabel: 'Trips',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'book-open'}
    />
  ),
};

const ExploreStack = createStackNavigator({
  Explore: ExploreScreen,
},navOptions);

ExploreStack.navigationOptions = {
  tabBarLabel: 'Explore',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'globe'}
    />
  ),
};

const ProfileStack = createStackNavigator({
  Profile:ProfileScreen
},navOptions);



ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'user'}
    />
  )
}

export default createBottomTabNavigator({
  HomeStack,
  TripLogsStack,
  Adding: {
    screen: AddTripScreen,
    navigationOptions: () => ({
        tabBarIcon: <AddButton /> 
    })
  },
  ExploreStack,
  ProfileStack
},{
  tabBarOptions:{
    showLabel: false,
    style: {
        backgroundColor: colors.navy,
    },
    tabStyle: {}
  }
});
