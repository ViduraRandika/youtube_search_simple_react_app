import React, { Fragment } from 'react';

import {Paper, Typography} from '@material-ui/core';

const MainVideo = () => {
    // Tempory url
    const videoSrc = 'https://www.youtube.com/watch?v=PkZNo7MFNFg'; 

    return(
        <React.Fragment>
            <Paper elevation={6} style={{height:'70%'}}>
                <iframe height='100%/' width='100%' title="Main video player" src={videoSrc} />
            </Paper>
            <Paper elevation={6} style={{padding: '15px'}}>
                <Typography variant='h4'>VIDEO TITLE</Typography>
                <Typography variant='subtitle1'>SAMPLE CHANNEL TITLE</Typography>
                <Typography variant='subtitle2'>DESCRIPTION GOES HERE</Typography>
            </Paper>
        </React.Fragment>
    )
}

export default MainVideo;