import React from 'react';
import {Button, Container, Grid} from "@mui/material";

const Login = () => {
    return (
        <Container>
            <Grid container
            style={{height: window.innerHeight - 50}}
                  alignItems={'center'}
                  justify={'center'}
            >
                <Grid style={{width:400, background: 'lightgrey'}}
                      container
                      alignItems={'center'}
                      direction={'column'}
                >
                    <box>
                        <Button variant={"outlined"}>Login via Google</Button>
                    </box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;