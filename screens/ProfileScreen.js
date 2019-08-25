import React from 'react';
import { View, StyleSheet, Text,AsyncStorage,TouchableOpacity } from 'react-native';
import colors from '../constants/colors';
import ScaleImage from '../components/ScaleImage';
import Button from '../components/Button';
import { global } from '../constants/globalstyles';
import {Feather} from '@expo/vector-icons';
import IconButton from '../components/IconButton';

class ProfileScreen extends React.Component{
  
    logout = ()=>{
        AsyncStorage.clear();
        this.props.navigation.navigate('Auth')
    }
    render(){
        return(
            <View style={[styles.container,global.viewBackground]}>
                <View style={styles.picContainer}>
                    <View style={styles.picWrapper}>
                        <ScaleImage source={require('../assets/images/user_default.jpg')} subtract={200} originalWidth={240} originalHeight={240} />
                    </View>
                </View>
                <View style={styles.userInfo}>
                    <Text style={styles.userInfoText}>Heinrich Coetzee</Text>
                    <Text style={styles.userInfoText}>heinrichcoetzee@icloud.com</Text>
                </View>
                <View style={styles.actions}>
                    <View style={styles.actionItem}>
                         <IconButton icon={'sign-out'} label={'Logout'} onPress={this.logout} bgColor={colors.orange} style={{paddingLeft:10,paddingRight:10}}/>
                    </View>
                    
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignSelf:'stretch',
        backgroundColor:colors.navy,
        justifyContent:'space-between'
    },
    picContainer:{
        flex:2,
        justifyContent:'center',
    },
    picWrapper:{
        marginTop:40,
        marginLeft:20,
        marginRight:20,
        borderRadius:20,
        alignSelf:'center',
        alignContent:'center',
        overflow: 'hidden'
    },
    userInfo:{
        flex:2,
        alignContent:'flex-start',
        padding:30
    },
    userInfoText:{
        color:colors.white
    },
    actions:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end',
        padding:20
    },
    actionItem:{
        justifyContent:'flex-end',
        paddingBottom:10
    }
});

export default ProfileScreen;