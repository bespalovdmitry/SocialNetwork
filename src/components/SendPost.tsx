import {Button, TextField} from "@mui/material";
import React from "react";
import {Item} from "./MainContent";

export const SendPost = () => {
    return (
        <Item sx={{display: 'flex', alignItems: 'flex-end', mb: 2}}>
            <TextField variant={'standard'} sx={{width: '100%', mr: 1}}/>
            <Button variant={'contained'}>SEND</Button>
        </Item>
    )
}