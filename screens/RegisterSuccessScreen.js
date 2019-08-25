import React from 'react';
import { View , StyleSheet, Text } from 'react-native';
import Button from '../components/Button';
import colors from '../constants/colors';

class RegisterSuccessScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Thank you for registering on campTrip.  You can now login with your details</Text>
                <Button label={'Login'} onPress={()=>{this.navigation.navigate('Auth')}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignSelf:'stretch',
        backgroundColor:colors.darkGrey
    },
    text:{
        color:"#ffffff"
    }
});

export default RegisterSuccessScreen;