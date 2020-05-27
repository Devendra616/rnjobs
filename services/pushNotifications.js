import { Notifications } from 'expo';
import constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { AsyncStorage } from 'react-native';

const registerForPushNotifications =  asyc () => {
    let {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    if(status !== 'granted') {
        alert('You will not be notified!');
        return;
    }

    // get token identifier for this device
    let token = await Notifications.getExpoPushTokenAsync();
    // Send token to the backend server to be retrived later
    return fetch('',{

    });

    
}

export default registerForPushNotifications