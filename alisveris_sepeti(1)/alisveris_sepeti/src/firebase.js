
import { initializeApp } from "firebase/app";

import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { sendEmailVerification } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA10IIL_mbJ1hXSx19yKIo3R_YIchMfno0",
    authDomain: "live-login-register-2a87a.firebaseapp.com",
    projectId: "live-login-register-2a87a",
    storageBucket: "live-login-register-2a87a.appspot.com",
    messagingSenderId: "946007270803",
    appId: "1:946007270803:web:0190992cdf4342ac43f466"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();






export const register = async (email, password) => {

    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password)
        return user
    }
    catch (error) {
        console.log(error.message);
    }
}

export const login = async (email, password) => {
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password)
        return user
    } catch (error) {
        console.log(error.message);

    }

}


export const logout = async () => {

    try {
        await signOut(auth)
        return true
    }
    catch (error) {
        console.log(error.message);
    }

}

export const update = async data => {

    try {
        await updateProfile(auth.currentUser, data)
        return true
    } catch (error) {
        console.log(error.message);

    }




}


export const verification=async ()=>{

    try{
        sendEmailVerification(auth.currentUser)
    }catch(error){
        alert(error);

    }
    
}








export default app