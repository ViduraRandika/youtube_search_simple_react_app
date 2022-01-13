import React from "react";
import { Grid } from "@material-ui/core";

import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => {
    return (
        <Grid container spacing={10}>
            {videos.map((video, id) => {
                return (
                    <VideoItem key={id} video={video} onVideoSelect={onVideoSelect}/>
                )
            })}
        </Grid>
    )
}

export default VideoList;