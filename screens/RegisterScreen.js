import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import colors from '../constants/colors';
import FormTextInput from '../components/FormTextInput';
import Button from '../components/Button';
import IconButton from '../components/IconButton';
import { global } from '../constants/globalstyles';
import Feather from '@expo/vector-icons/Feather';
import firebase from 'firebase';
import ErrorMessage from '../components/ErrorMessage';
import facebookLogin from '../services/facebookLogin';

class RegisterScreen extends React.Component {
    state = {
        name: "",
        surname: "",
        email: "",
        password: "",
        confirmPassword: "",
        passwordsMatch: true,
        registerLoading:false,
        facebookLoading:false,
        feedbackMessage:""
    };


    registerUser = () => {
        this.setState({registerLoading:true})
        
        firebase.auth()
        .createUserWithEmailAndPassword(this.state.email,this.state.password)
        .then((user)=>{
            console.log("User",user);
            this.setState({registerLoading:false})
            this.setState({feedbackMessage:''});
            this.props.navigation.navigate("RegisterSuccess");
          
        }).catch((err)=>{
            this.setState({registerLoading:false})

            this.setState({feedbackMessage:err.message});
            console.log("Registration Error- " ,err.message)
        });
        
    }

    loginWithFacebook = ()=>{
        this.setState({feedbackMessage:"",facebookLoading:true});
        facebookLogin((message, result, error)=>{
            this.setState({facebookLoading:false});
            if(message === 'success'){
                AsyncStorage.setItem('User',JSON.stringify(result));
                this.props.navigation.navigate('Main');
            }else{
                this.setState({feedbackMessage:message});
                console.log('error',error);
            }
        });
    }

    back = () => {
        this.props.navigation.navigate('Auth')
    }

    handleSetValue = (value) => {
        this.setState({ value });
    }

    checkPassword = (confirmPassword) => {
        if (this.state.confirmPassword != this.state.password) {
            this.setState({ passwordsMatch: false });
        } else {
            this.setState({ passwordsMatch: true });
        }
        console.log("ValidatePassword match - ",this.state.passwordsMatch)
    }

  

    _errorMessage = ()=>{
        if(this.state.feedbackMessage){
        return(
         <View style={{flex:1,flexDirection:'row'}}>
             <Feather name={'alert-circle'} color={colors.red} size={24} style={{marginRight:10}}/>
              <Text style={styles.feedback}>
                        {this.state.feedbackMessage}
              </Text>
         </View>
        )
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backBtn} onPress={this.back}>
                        <Feather name="arrow-left-circle" color={colors.white} size={30} />
                    </TouchableOpacity>
                    <Text style={[global.textCenter, global.h1]}>Register</Text>
                </View>
                <ScrollView style={styles.form} keyboardShouldPersistTaps='handled'>
                    <FormTextInput
                        value={this.state.name}
                        onChangeText={(name) => this.setState({ name })}
                        onFocus={()=>this.setState({feedbackMessage:''})}
                        placeholder="Name">
                    </FormTextInput>
                    <FormTextInput
                        value={this.state.surname}
                        onChangeText={(surname) => this.setState({ surname })}
                        onFocus={()=>this.setState({feedbackMessage:''})}
                        placeholder="Surname">
                    </FormTextInput>
                    <FormTextInput
                        value={this.state.email}
                        onChangeText={(email) => this.setState({ email: email.toLowerCase() })}
                        onFocus={()=>this.setState({feedbackMessage:''})}
                        placeholder="Email Address">
                    </FormTextInput>
                    <FormTextInput
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })}
                        onFocus={()=>this.setState({feedbackMessage:''})}
                        secureTextEntry={true}
                        placeholder="Password">
                    </FormTextInput>
                    <FormTextInput
                        value={this.state.confirmPassword}
                        onChangeText={(confirmPassword)=>this.setState({ confirmPassword })}
                        onFocus={()=>this.setState({feedbackMessage:''})}
                        onEndEditing={this.checkPassword}
                        secureTextEntry={true}
                        placeholder="Confirm Password">
                    </FormTextInput>
                    <Text style={styles.passwordError}>{this.state.passwordsMatch ? '' : 'Passwords do not match'}</Text>
                    <Button onPress={this.registerUser} label={'Submit'} loading={this.state.registerLoading} bgColor={colors.green} />
                    <IconButton label="Login With Facebook" onPress={this.loginWithFacebook} bgColor={colors.facebookBlue} icon={'facebook'} />
                    <ErrorMessage message={this.state.feedbackMessage}/>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkGrey,
        alignSelf: 'stretch',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
    },
    passwordError: {
        color: colors.red
    },
    header: {
        height: 80,
        paddingTop: 20,
    },
    form: {

    },
   
    backBtn: {
        marginTop: 20,
        position: 'absolute',
        left: 20,
        top: 10
    }
});

export default RegisterScreen;