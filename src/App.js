import React from 'react';
import {Grid} from '@material-ui/core';

class App extends React.Component{
    render(){
        return(
            <Grid justifyContent='center' container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10} >
                        <Grid item xs={12}><h1>SEARCH BAR</h1></Grid>
                        <Grid item xs={8}><h1>MAIN VIDEO PLAYER</h1></Grid>
                        <Grid item xs={4}><h1>Video list</h1></Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;