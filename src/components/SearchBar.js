import React from 'react';
import {Paper, TextField} from '@material-ui/core';

class SearchBar extends React.Component{
    render(){
        return (
            <Paper elevation={6} style={{padding:'25px'}}>
                <form>
                    <TextField fullWidth label="Search" />
                </form>
            </Paper>
        )
    }
}

export default SearchBar;