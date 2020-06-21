# React Native Job Board

  ##  Live Demo on Expo: 
With an Android phone, you can scan this QR code with your Expo mobile app to load this project immediately.        

[online-link](https://expo.io/@devsingh/rn-jobs)
![QR Code](https://res.cloudinary.com/nmdc/image/upload/v1592735574/RN-Jobs/QRCode.jpg)

# Description
An application in React Native to search Job listings near your area. User will go to map and get his location where to search. It will trigger API search for jobs in that location. User can then apply for jobs, from the search list based on description.

Technologies used :
  
- React Native
- Map : react-native-maps
- Navigation
- Facebook Authentication
- Github jobs
- Latitude-longitude to Zip Code converter:  `npm i latlng-to-zip`  

# Project Setup

On your terminal type
  

    npm install
    expo start  

I am using react-navigation v5 which is different from v4 in many respect.  

# Screens

- WelcomeScreen
- AuthScreen
- MapScreen
- DeckScreen
- ReviewScreen
- SettingScreen  
For specifying options for each screen used [docs](https://reactnavigation.org/docs/screen-options).
### Welcome Screen
  
![Welcome Screen](https://res.cloudinary.com/nmdc/video/upload/v1591807676/RN-Jobs/Welcome%20action%20gif.gif)

Welcome screen shows manual for the App. Three or more slides are shown with a button at last slide to trigger navigation to Auth screen. The Welcome Screen is shown only to unregistered users, after the user is authenicated, the screen need not be shown.

  

### Auth Screen

Auth screen is for authenication of the user using facebook login. We used expo-facebook authentication method.

  

### Map Screen

User sets location on the map to view jobs. Once the location is set, the user gets job listings for nearby location set on the map screen. Github jobs has jobs listing mostly from Americal and Europe. I did not find any jobs in India at time of testing.

  

### Deck Screen

The Deck screen shows the listings of jobs for that location. Presently, the jobs shows only for **Javascript** profile. The deck has cards of jobs which can be **swiped left** to *discard* and **swiped right** to *apply*. Cards swiped right move to myJobs which is review screen.
![Swapping Action](https://res.cloudinary.com/nmdc/video/upload/v1591807676/RN-Jobs/swapping%20action%20gif.gif)
  

### Review Screen

The Review Screen is the myJobs screen where we get jobs which we have filtered to apply.

  

### Settings Screen

The user setting screen is where we can clear map location and myJobs lists.

  

# Flow Diagrams
### Main Flow
[![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVERcblx0QVtXZWxjb21lIFNjcmVlbl0gLS0-IEIoQXV0aCBTY3JlZW4pIC0tPiBDKE1haW4gRmxvdylcblx0RFtNYWluIEZsb3ddIC0tPkVbTWFwIFNjcmVlbl0gLS0-IEZbRGVjayBTY3JlZW5dIC0tPiBHW1JldmlldyBGbG93XVxuXHRIW1JldmlldyBGbG93XSAtLT5JW1JldmlldyBTY3JlZW5dLS0-IEpbU2V0dGluZyBzY3JlZW5dXG4iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ)](https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVERcblx0QVtXZWxjb21lIFNjcmVlbl0gLS0-IEIoQXV0aCBTY3JlZW4pIC0tPiBDKE1haW4gRmxvdylcblx0RFtNYWluIEZsb3ddIC0tPkVbTWFwIFNjcmVlbl0gLS0-IEZbRGVjayBTY3JlZW5dIC0tPiBHW1JldmlldyBGbG93XVxuXHRIW1JldmlldyBGbG93XSAtLT5JW1JldmlldyBTY3JlZW5dLS0-IEpbU2V0dGluZyBzY3JlZW5dXG4iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ)

### Auth Screen

[![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVERcblx0QVtBdXRoIFNjcmVlbl0gLS0-fEluaXRpYXRlIEZiIGxvZ2lufCBCe0lzIEF1dGhlbnRpY2F0ZWR9XG5cdEIgLS0-fFllc3wgQ1tTZW5kIHRvIE1hcFNjcmVlbl1cblx0QiAtLT58Tm98IERbQXR0ZW1wdCB0byBsb2dpbiB3aXRoIEZhY2Vib29rXVxuXHREIC0tPiBFW0dldCBUb2tlbl1cblx0RSAtLT58U2F2ZSBUb2tlbiBmb3IgZnV0dXJlfCBDXG5cdFx0XHRcdFx0IiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)](https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVERcblx0QVtBdXRoIFNjcmVlbl0gLS0-fEluaXRpYXRlIEZiIGxvZ2lufCBCe0lzIEF1dGhlbnRpY2F0ZWR9XG5cdEIgLS0-fFllc3wgQ1tTZW5kIHRvIE1hcFNjcmVlbl1cblx0QiAtLT58Tm98IERbQXR0ZW1wdCB0byBsb2dpbiB3aXRoIEZhY2Vib29rXVxuXHREIC0tPiBFW0dldCBUb2tlbl1cblx0RSAtLT58U2F2ZSBUb2tlbiBmb3IgZnV0dXJlfCBDXG5cdFx0XHRcdFx0IiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)

  ### Map Screen
  [![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVERcblxuS1sgXS0tPnxSZWdpb258RFtNYXAgVmlld10gLS0-IEUoVXNlciBEcmFncyktLT4gRihPbiBSZWdpb24gQ2hhbmdlKS0tPnxyZWdpb258RFxuXG5cbkFbVXNlciBQcmVzc2VzIFNlYXJjaCBIZXJlIGJ1dHRvbl0gLS0-fENhbGwgQWN0aW9uIENyZWF0b3Igd2l0aCBjdXJyZW50IHJlZ2lvbnwgQihHZXRzIGxpc3Qgb2Ygam9icylcbkIgLS0-IENbTmF2aWdhdGUgdXNlciB0byBTd2lwZSBEZWNrXVxuXG4iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ)](https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVERcblxuS1sgXS0tPnxSZWdpb258RFtNYXAgVmlld10gLS0-IEUoVXNlciBEcmFncyktLT4gRihPbiBSZWdpb24gQ2hhbmdlKS0tPnxyZWdpb258RFxuXG5cbkFbVXNlciBQcmVzc2VzIFNlYXJjaCBIZXJlIGJ1dHRvbl0gLS0-fENhbGwgQWN0aW9uIENyZWF0b3Igd2l0aCBjdXJyZW50IHJlZ2lvbnwgQihHZXRzIGxpc3Qgb2Ygam9icylcbkIgLS0-IENbTmF2aWdhdGUgdXNlciB0byBTd2lwZSBEZWNrXVxuXG4iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ)
  
### Deck Screen
[![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVERcblxuQVtPbiBTd2lwZSBSaWdodF0tLT58b25Td2lwZVJpZ2h0IGNhbGxlZCB3aXRoIGpvYnxCW1Bhc3MgdGhlIGxpa2VkIGpvYiB0byBhY3Rpb24gY3JlYXRvcl1cbkIgLS0-fGxpa2VzX3JlZHVjZXJ8IENbTGlrZWQgam9iIGdldHMgc3RvcmVkXVxuXG5EW09uIFN3aXBlIExlZnRdIC0tPiB8aWdub3JlfEUocmV0dXJuKSIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9)](https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVERcblxuQVtPbiBTd2lwZSBSaWdodF0tLT58b25Td2lwZVJpZ2h0IGNhbGxlZCB3aXRoIGpvYnxCW1Bhc3MgdGhlIGxpa2VkIGpvYiB0byBhY3Rpb24gY3JlYXRvcl1cbkIgLS0-fGxpa2VzX3JlZHVjZXJ8IENbTGlrZWQgam9iIGdldHMgc3RvcmVkXVxuXG5EW09uIFN3aXBlIExlZnRdIC0tPiB8aWdub3JlfEUocmV0dXJuKSIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9)

### Reducer Flow
[![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVERcblxuQShBcHBsaWNhdGlvbiBzdGFydHMpLS0-IEJbUmVuZGVycyBDb21wb25lbnRdXG5CIC0tPkMoQ29tcG9uZW50IGFjdGlvbiBBY3Rpb24gQ3JlYXRvcilcbkMgLS0-IERbRGlzcGF0Y2hlcyBBY3Rpb25dXG5EIC0tPiBFKEFjdGlvbiBmbG93cyB0aHJvdWdoIE1pZGRsZXdhcmUpXG5FIC0tPiBGW0FjdGlvbiBoaXRzIFJlZHVjZXJzXVxuRi0tPiBHW1JlZHVjZXJzIHJlY2FsY3VsYXRlIFN0YXRlXSBcbkcgLS0-IEhbU3RhdGUgZmxvd3MgaW50byBDb21wb25lbnRzXVxuRyAtLT4gSVtTdGF0ZSBzYXZlZCB0byBBc3luYyBTdG9yYWdlXVxuSCAtLT4gSltDb21wb25lbnQgUmVyZW5kZXJzXVxuXG4iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ)](https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVERcblxuQShBcHBsaWNhdGlvbiBzdGFydHMpLS0-IEJbUmVuZGVycyBDb21wb25lbnRdXG5CIC0tPkMoQ29tcG9uZW50IGFjdGlvbiBBY3Rpb24gQ3JlYXRvcilcbkMgLS0-IERbRGlzcGF0Y2hlcyBBY3Rpb25dXG5EIC0tPiBFKEFjdGlvbiBmbG93cyB0aHJvdWdoIE1pZGRsZXdhcmUpXG5FIC0tPiBGW0FjdGlvbiBoaXRzIFJlZHVjZXJzXVxuRi0tPiBHW1JlZHVjZXJzIHJlY2FsY3VsYXRlIFN0YXRlXSBcbkcgLS0-IEhbU3RhdGUgZmxvd3MgaW50byBDb21wb25lbnRzXVxuRyAtLT4gSVtTdGF0ZSBzYXZlZCB0byBBc3luYyBTdG9yYWdlXVxuSCAtLT4gSltDb21wb25lbnQgUmVyZW5kZXJzXVxuXG4iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ)
### Push Notification Flow
[![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVERcblxuQXtEbyB0b2tlbiBleGlzdCBpbiBBc3luY1N0b3JhZ2UgP30gLS0-IHxOb3xCKFByb21wdCBVc2VyIGZvciBub3RpZmljYXRpb24gcGVybWlzc2lvbnMpXG5CIC0tPiBEKEdlbmVyYXRlIHB1c2ggdG9rZW4pIFxuRC0tPiBFKFNhdmUgdG9rZW4gdG8gc2VydmVyIGFuZCBBc3luY1N0b3JhZ2UpXG5FLS0-IEYoSGFuZGxlIEluY29taW5nIFJlcXVlc3QpXG5BIC0tPiB8WWVzfEZcbiIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9)](https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVERcblxuQXtEbyB0b2tlbiBleGlzdCBpbiBBc3luY1N0b3JhZ2UgP30gLS0-IHxOb3xCKFByb21wdCBVc2VyIGZvciBub3RpZmljYXRpb24gcGVybWlzc2lvbnMpXG5CIC0tPiBEKEdlbmVyYXRlIHB1c2ggdG9rZW4pIFxuRC0tPiBFKFNhdmUgdG9rZW4gdG8gc2VydmVyIGFuZCBBc3luY1N0b3JhZ2UpXG5FLS0-IEYoSGFuZGxlIEluY29taW5nIFJlcXVlc3QpXG5BIC0tPiB8WWVzfEZcbiIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9)

# Settings for Facebook Authentication on Expo

Create a facebook developer account if not already have. Create a new app so that you get App ID and secret key.

From Developer Console: Goto Settings -> Basic -> Add Platform.

- Select iOS. On the Bundle ID field add *host.exp.Exponent*.
- Select Android platform. On the Key Hash field add ***rRW++LUjmZZ+58EbN5DVhGAnkX4=*** . This is Expo Client key hash.
- Save the changes.

In your code use Facebook API from expo-facebook **```expo install expo-facebook```**

```javascript 
import {Facebook} from 'expo';
const loginFun = async () => {
	const [type,token] = await Facebook.logInWithReadPermissionsAsync(
										'APP_ID',
										{permissions:['public_profile]}
									 );
	if(type === 'success') {
	// logged in
	} else {
	// type === 'cancel'
	// login failed
	}
}
```
![Facebook-Authentication](https://res.cloudinary.com/nmdc/image/upload/v1590952860/RN-Jobs/facebook-auth.jpg)

# Google Map Integration

You must use an API key to authenticate each request to Google Maps Platform APIs
For calling google maps location data, we need API key. It can be generated from 
**[google maps](https://developers.google.com/maps/documentation/geocoding/get-api-key)**

I don't want map to pinch zoom in or zoom-out when swapped so just make it only readable element using map with `scrollEnabled={false}`.

# Problems and Resolutions

- **Customising the navigation header/bar.** 
	Each screen can configure various aspects about how it gets presented in the navigator that renders it.

In reactnavigation <v5  we  could  use
```javascript
class ReviewScreen extends Component {

	static navigationOptions = {
		headerRight: () => (
			<Button title="Setting"
			titleStyle={{ color: "rgba(0,122,255,1)", }}
			buttonStyle={{backgroundColor:'transparent'}}
			onPress={() => navigation.navigate('Setting')}
			/>
		),
	};
	render() {
	// ...
	}
}
```
With React Navigation 5.x, we need to pass the configuration when defining the screen:
```javascript
<Stack.Screen name="Review"
	component={ReviewScreen}
	options={({ navigation, }) => ({
		title:'Review Jobs',
		headerTitle:'Review',
		headerRight: () => (
			<Button title="Setting"
			titleStyle={{ color: "rgba(0,122,255,1)", }}
			buttonStyle={{backgroundColor:'transparent'}}
			onPress={() => navigation.navigate('Setting')}
			/>
		),
		})}
/>
```
- **Welcome Screen list items pages appears Horizontally but all in one page itself**
There was no tab/page change effect on welcome page for showing different messages.
On Slide Component set ***pagingEnabled:true*** . When true, the scroll view stops on multiples of the scroll view's size when scrolling. This can be used for horizontal pagination.

- **Map screen was showing blank with no errors**

Solution was to provide width and height in style configuration.
```javascript
mapStyle: {
	width: Dimensions.get('window').width,
	height: Dimensions.get('window').height,
},
```

```Dimensions``` being imported from 'react-native'

- **AsycStorage is depricated**

Use react-native async-storage

```npm i @react-native-community/async-storage```  

- **Data present in redux-persist at time of testing should be removed before moving to production.**
To delete the stored data with redux-persist for testing or moving to production , add .purge() to the end of persistStore : 
 ```let persistor = persistStore(store).purge();```

# Testing
Testing of push notification with token :

 - [http://rallycoding.herokuapp.com/api/tokens](http://rallycoding.herokuapp.com/api/tokens)
 -  [https://expo.io/notifications](https://expo.io/notifications)

# Scope of Improvement

- A text input where user can set his criteria to search job terms like Java, React, Mobile, .Net etc. Presetly there is search for Javascript only.
- Label on card to show accept/reject on swapping right/left respectively.

  

# Build

Run expo ```expo build:android``` or ```expo build:ios```. If you don't already have a packager running for this project, expo will start one for you.
