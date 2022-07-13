import React, {useContext} from 'react';
import {Button, Container, Grid} from "@mui/material";
import {Context} from "../index";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const Login = () => {
    const {auth} = useContext(Context);

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const user = await auth.signInWithPopup(provider);
        console.log(user);
    }
    return (
        <Container>
            <Grid container
            style={{height: window.innerHeight - 50}}
                  alignItems={'center'}
                  justifyContent={'center'}
            >
                <Grid style={{width:400, background: 'lightgrey'}}
                      container
                      alignItems={'center'}
                      direction={'column'}
                >
                    <box>
                        <Button onClick={login} variant={"outlined"}>Login via Google</Button>
                    </box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;