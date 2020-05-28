import { Notifications } from 'expo';
import constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { AsyncStorage } from 'react-native';
import axios from 'axios';



const PUSH_ENDPOINT = 'http://rallycoding.herokuapp.com/api/tokens';
const STORE_KEY = 'pushToken';
const registerForPushNotifications =  async () => {

    
     //check if token already present
    let previousToken = await AsyncStorage.getItem(STORE_KEY);
    console.log('previous', previousToken);
    if(previousToken) {
        return;
    } else {
        // take permission for sending push notification and generate token
        try{ 
            let {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            console.log(status);
            if(status !== 'granted') {
                alert('You will not be notified!');
                return;
            }
            // get token identifier for this device
            let token = await Notifications.getExpoPushTokenAsync();
            console.log("new",token);
            // Send token to the backend server to be retrived later
            await axios.post(PUSH_ENDPOINT,{token:{token}}); 
            AsyncStorage.setItem(STORE_KEY,token);
        } catch(err) {
            console.log("Can not send push notification:", err);
        }
    }    
    
}

export default registerForPushNotifications