import React from "react";
import { Grid } from "@material-ui/core";

import VideoItem from './VideoItem';

const VideoList = () => {
    return (
        <Grid container spacing={10}>
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
        </Grid>
    )
}

export default VideoList;