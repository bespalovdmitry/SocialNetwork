import {Grid, Typography} from "@mui/material";
import React from "react";
import {Item} from "./MainContent";

export const MyInfo = () => {
    return (
        <Grid item xs={4} sx={{marginTop: '5em'}}>
            <Item>
                <Typography variant={'h6'}>Name: <span>Lionel Messi</span></Typography>
                <Typography variant={'h6'}>Club: <span>Barcelona FC</span></Typography>
                <Typography variant={'h6'}>Date of Birth: <span>24 June 1987</span></Typography>
            </Item>
        </Grid>
    )
}