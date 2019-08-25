import constants from "../constants/constants";
import { Facebook } from 'expo';
import firebase from 'firebase';

function facebookLogin(callback){
       return Facebook.logInWithReadPermissionsAsync(constants.FacebookAppId,{ permissions: ['public_profile'] }).then(result=>{
            if (result.type === 'success') {
                const credential = firebase.auth.FacebookAuthProvider.credential(result.token);
                firebase.auth().signInAndRetrieveDataWithCredential(credential).then((login)=>{
                    return callback('success',login,null);
                }).catch((error) => {
                  return callback('Error while logging in with facebook',null,error);
                });
              }else{
                return callback('Login cancelled',null,result.error);
              }
          }).catch((error)=>{
            return callback('Could not login to facebook',null,error);
          });
};

export default facebookLogin;