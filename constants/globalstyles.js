import {StyleSheet} from 'react-native';
import colors from './colors';

export const global = StyleSheet.create({
    h1:{
        color:colors.white,
        fontSize:24
    },
    textCenter:{
        textAlign:'center'
    },
    boldText:{
        fontWeight:'bold'
    },
    fontFamily:{
        fontFamily:'comfortaa'
    },
    viewBackground:{
        backgroundColor:colors.darkNavy
    }
});