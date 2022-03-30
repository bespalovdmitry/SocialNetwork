import {Box, Grid, IconButton, Typography} from "@mui/material";
import {SendPost} from "./SendPost";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React from "react";
import {Item} from "./MainContent";

export const Posts = () => {
    return (
        <Grid item xs={8} sx={{marginTop: '5em'}}>
            <SendPost/>
            <Item sx={{mb: 2}}>
                <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis,
                    voluptates.</Typography>
                <Box display={'flex'} alignItems={'center'}>
                    <IconButton><FavoriteBorderIcon color={'secondary'}/></IconButton>
                    <Typography>1</Typography>
                </Box>
            </Item>
        </Grid>
    )
}