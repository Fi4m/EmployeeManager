import { Actions } from 'react-native-router-flux';
import firebase from 'firebase'
import { EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEES_FETCH_SUCCESS,
    EMPLOYEE_EDIT
} from './types'


export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    }
}

export const employeeCreate = ({ name, phone, shift }) => {
    return dispatch => {
        const { currentUser } = firebase.auth()
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({ name, phone, shift })
            .then(() => {
                Actions.pop()
                dispatch({ type: EMPLOYEE_CREATE })
            })
    }
}

export const employeesFetch = () => {
    return dispatch => {
        const { currentUser } = firebase.auth()
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                dispatch({
                    type: EMPLOYEES_FETCH_SUCCESS, 
                    payload: snapshot.val()
                })
            })
    }
}

export const employeeEdit = ({ name, phone, shift, uid }) => {
    return dispatch => {
        const { currentUser } = firebase.auth()
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .set({ name, phone, shift })
            .then(() => {
                Actions.pop()
                dispatch({ type: EMPLOYEE_EDIT })
            })
    }
}

export const employeeDelete = ({ uid }) => {
    return () => {
        const { currentUser } = firebase.auth()
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .remove()
        .then(() => {
            Actions.pop()
        })
    }
}
