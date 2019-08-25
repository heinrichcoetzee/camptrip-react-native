import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import colors from './constants/colors';
import firebase from 'firebase';
import constants from './constants/constants';
import {FontAwesome, Feather} from '@expo/vector-icons';

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}


export let firebaseApp = firebase.initializeApp(constants.FirebaseConfig);

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };
  cacheImages = (images) => {
    return images.map(image => {
      if (typeof image === 'string') {
        return Image.prefetch(image);
      } else {
        return Asset.fromModule(image).downloadAsync();
      }
    });
  }

  cacheFonts = (fonts)=> {
    return fonts.map(font => Font.loadAsync(font));
  }
  

  render() {
    // if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
    //   return (
    //     <AppLoading
    //       startAsync={this._loadAssetsAsync}
    //       onError={this._handleLoadingError}
    //       onFinish={this._handleFinishLoading}
    //     />
    //   );
    // } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
          <AppNavigator />
        </View>
      );
    //}
  }

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
        require('./assets/images/campTrip_logo_white.png'),
        require('./assets/images/campTrip_logo.png'),
        require('./assets/images/facebook_icon_green.png'),
        require('./assets/images/instagram_icon_green.png'),
    ]);
    
    const fontAssets = cacheFonts([FontAwesome.font,Feather.font]);
    await Promise.all([imageAssets,fontAssets]);
  }


  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
    firebaseApp.initializeApp(constants.FirebaseConfig);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey
  },
});
