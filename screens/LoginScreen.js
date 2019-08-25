import * as React from 'react';
import { StyleSheet, Text, View, Image, Keyboard, AsyncStorage } from "react-native";
import colors from '../constants/colors';
import FormTextInput from '../components/FormTextInput';
import Button from '../components/Button';
import { global } from '../constants/globalstyles';
import IconButton from '../components/IconButton';
import ErrorMessage from '../components/ErrorMessage';
import facebookLogin from '../services/facebookLogin';
import firebase from 'firebase';
import DismissKeyboard from '../components/DismissKeyboard';

class LoginScreen extends React.Component {
    state = {
        email:"",
        password:"",
        disableLogin:false,
        errorMessage:"",
        loginLoading:false,
        feedbackMessage:"",
        facebookLoading:false
    };

    handleEmailChange=(email)=>{
        this.setState({email:email.toLowerCase()});
    }
    handlePasswordChange = (password)=>{
        this.setState({password});
    }

    loginWithFacebook = ()=>{
        this.setState({feedbackMessage:"",facebookLoading:true});
        facebookLogin((message,result,error)=>{
            this.setState({facebookLoading:false});
            if(message == 'success'){
                AsyncStorage.setItem('User',JSON.stringify(result));
                this.props.navigation.navigate('Main');
            }else{
                this.toggleFeedback(message);
                console.log('error',error)
            }
            
        });
    }

    toggleFeedback(message){
        Keyboard.dismiss();
        this.setState({feedbackMessage:message});
        setTimeout(()=>{
            this.setState({feedbackMessage:""});
        },3000);
    };

    loginUser = ()=>{
        this.props.navigation.navigate('Main');
        // Keyboard.dismiss;
        // if(this.state.email == ""){
        //     this.toggleFeedback('Please Enter Email Address');
        //     return;
        // }

        // if(this.state.password == ""){
        //     this.toggleFeedback('Please Enter Password')
        //     return;
        // }

        // this.setState({loginLoading:true});
        // firebase.auth()
        // .signInWithEmailAndPassword(this.state.email,this.state.password).then((user)=>{
        //         console.log("Logged In User",user);
        //         AsyncStorage.setItem('User',JSON.stringify(user));
        //         this.setState({loginLoading:false});
        //         this.props.navigation.navigate('Main');
        // }).catch((error)=>{
        //     console.log(error);
        //     this.toggleFeedback(error.message);
        //     this.setState({loginLoading:false});
        // });
    }
    
    registerUser = ()=>{
        this.props.navigation.navigate('Register');
    }

    render() {
        return (
            <DismissKeyboard>
            <View style={styles.container}>
               <View style={styles.logoContainer}>
                        <Image resizeMode={'cover'} 
                                style={{ marginTop:10, width: '100%', height: 200 }} 
                                source={require('./../assets/images/campTrip_logo_white.png')} />
               </View>
                <View style={styles.loginForm}>
                    <View>
                        <Text style={[global.h1,global.textCenter]}>Start Logging Trips</Text>
                            <FormTextInput
                                disabled={this.state.loginLoading}
                                value={this.state.email}
                                onChangeText={this.handleEmailChange}
                                placeholder="Email Address">
                            </FormTextInput>
                            <FormTextInput 
                                disabled={this.state.loginLoading}
                                value={this.state.password}
                                onChangeText={this.handlePasswordChange}
                                secureTextEntry={true}
                                placeholder="Password">
                            </FormTextInput>
                        
                        <Text>{this.state.errorMessage}</Text>
                        
                        <Button style={{marginTop:10}} label="Login" onPress={this.loginUser} loading={this.state.loginLoading}/>
                        <IconButton icon="facebook" loading={this.state.facebookLoading} bgColor={colors.facebookBlue} style={{marginTop:10}} label="Login" onPress={this.loginWithFacebook}/>
                        <ErrorMessage message={this.state.feedbackMessage}/>
                    </View>
                </View>
                <View style={styles.registerContainer}>
                    <Text style={{color:colors.white}}>Don't have an account yet?</Text>
                    <Button style={{marginTop:10}} label="Register" bgColor={colors.green} onPress={this.registerUser}/>
                </View>


                {/* <View style={styles.footer}>
                    <View style={styles.socialIcons}>
                        <Image resizeMethod={'resize'}
                            style={{width:50,height:50,margin:10}} 
                            source={require('./../assets/images/facebook_icon_green.png')} />
                        <Image resizeMethod={'resize'}
                            style={{width:50,height:50,margin:10}} 
                            source={require('./../assets/images/instagram_icon_green.png')} />
                    </View>
                </View> */}



            </View>
            </DismissKeyboard>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkGrey,
        alignSelf:'stretch',
        paddingLeft:20,
        paddingRight:20
    },
    logoContainer:{
        flex:1,
        marginTop:30,
        flexDirection:'row',
        alignContent:'center',
        alignItems:'center',
    },
    loginForm: {
        flex: 2,
        paddingTop:50
    },
    registerContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-end'
    },
    footer:{
        flex:1,
        alignSelf:'stretch',
        alignItems:'center',
        alignContent:'flex-end'
    },
    socialIcons:{
        flexDirection:'row',
        alignContent:'center',
    },
    loginBtnContainer:{
        flex:1,
        flexDirection:'row'
    }
});

export default LoginScreen;