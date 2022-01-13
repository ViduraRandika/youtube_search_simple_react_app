import React from 'react';
import {Grid} from '@material-ui/core';

import SearchBar from './components/SearchBar';
import MainVideo from './components/MainVideo';
import VideoList from './components/VideoList';

class App extends React.Component{
    render(){
        return(
            <Grid justifyContent='center' container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10} >
                        <Grid item xs={12}><SearchBar /></Grid>
                        <Grid item xs={8}><MainVideo /></Grid>
                        <Grid item xs={4}><VideoList /></Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;