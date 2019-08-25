import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../constants/colors';
import Feather from '@expo/vector-icons/Feather';


class AddButton extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Feather name={'plus'} size={35} color={colors.white} style={{textAlign:'center'}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.green,
        borderRadius:50,
        position:'absolute',
        width:90,
        height:90,
        top:-45,
        justifyContent:'center'
    }
})

export default AddButton;