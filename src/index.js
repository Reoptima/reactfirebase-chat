import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp({
        apiKey: "AIzaSyC9dDOd5PrBOPR3EVIjct7CV_QwAEESwBA",
        authDomain: "chaticks-45131.firebaseapp.com",
        projectId: "chaticks-45131",
        storageBucket: "chaticks-45131.appspot.com",
        messagingSenderId: "83758574133",
        appId: "1:83758574133:web:bb8e2c2178ebba95c51f7c",
        measurementId: "G-S5DRZDT310"
    }
);
export const Context = createContext(null)

const auth = firebase.auth();
const firestore = firebase.firestore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App/>
    </Context.Provider>,
);
