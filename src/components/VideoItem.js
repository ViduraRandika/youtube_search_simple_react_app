import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

const VideoItem = () => {
    return (
        <Grid item xs={12}>
            <Paper style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
                <img style={{marginRight: '20px'}} alt='thumbnail' src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
                <Typography variant='subtitle1'><b>SAMPLE TITLE</b></Typography>
            </Paper>
        </Grid>
    )
}

export default VideoItem;