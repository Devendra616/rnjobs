import {AsyncStorage} from 'react-native';
import * as Facebook from 'expo-facebook';
import {FACEBOOK_APPID} from 'react-native-dotenv';
import {
    FACEBOOK_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_FAIL
}    
from './types';

const STORAGE_KEY = '@fb_token'
/* 
    How to use AsyncStorage
    AsyncStorage.setItem(key,value);
    AsyncStorage.getItem(key)
*/

export const facebookLogin = () => {
    return async (dispatch) => {           
        let token = await AsyncStorage.getItem(STORAGE_KEY);
             
        if(token) {
            // Dispatch action for suceessful FB login
            dispatch({type:FACEBOOK_LOGIN_SUCCESS, payload:token});
        } else {
            // Start FB login process
            doFacebookLogin(dispatch);
        }
    }
};

const doFacebookLogin = async (dispatch) => {
    try {
        await Facebook.initializeAsync(FACEBOOK_APPID);
        let result = await Facebook.logInWithReadPermissionsAsync({
            permissions: ['public_profile'],
          });
          let {type,token} = result;
        if(type === 'cancel') {
            return dispatch({type: FACEBOOK_LOGIN_FAIL});
        }

        await AsyncStorage.setItem(STORAGE_KEY,token);
  
        return dispatch({type:FACEBOOK_LOGIN_SUCCESS, payload:token});
    } catch (err)     {
        console.log(`Facebook Login Error: ${err}`,);
    }
}