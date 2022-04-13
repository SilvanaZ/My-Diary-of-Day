import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { googleAuthProvider } from '../firebase/config';
import { types } from '../types';
import { errors } from '../errors';

export const login = (uid, displayName) => ({
    types: types.login,
    payload: {
        uid,
        displayName,
    }
});
export const startGoogleLogin = () => {
    return (dispatch) => {
        signInWithPopup(getAuth(),
            googleAuthProvider)
            .then(({user}) => {
                console.log(user);
                dispatch(login(user.uid, user.displayName))
            })
            .catch(error => console.error(error))
    }
}

export const startRegisterWithEmailandPassword = () =>{
    (email, password, name)=>{
        return (dispatch) =>{
            createUserWithEmailAndPassword(getAuth(), email, password)
            .then(async({user})=>{
                await updateProfile(user,{
                    displayName: name
                })
                dispatch(login(user.uid, user.displayName))
            })
            .catch(error => console.error(error))            
        }
    }
}

export const startLoginWithEmailAndPassword = (email, password) =>{
return (dispatch) =>{
    dispatch(startLoading());
    signInWithEmailAndPassword(getAuth(), email, password)
    .then(({user})=>{
        await 
    })
}
    }