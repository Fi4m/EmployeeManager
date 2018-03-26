import { AppRegistry } from 'react-native'
import firebase from 'firebase'
import App from './App'

const config = {
    apiKey: 'AIzaSyCO6vjU2F9nIIS_NqCu-I7sk7p0PjO149I',
    authDomain: 'reactauth-b4e16.firebaseapp.com/',
    databaseURL: 'https://reactauth-b4e16.firebaseio.com',
    projectId: 'reactauth-b4e16',
    storageBucket: 'reactauth-b4e16.appspot.com',
    messagingSenderId: '6002728053'
}
firebase.initializeApp(config)

AppRegistry.registerComponent('manager', () => App)
