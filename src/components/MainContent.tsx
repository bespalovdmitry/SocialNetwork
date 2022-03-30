import {Box, Container, Grid, Paper, Toolbar} from '@mui/material';
import React from 'react';
import {Cover} from './Cover';
import {styled} from '@mui/material/styles';
import {MyInfo} from "./MyInfo";
import {Posts} from "./Posts";

export const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
}));

export const MainContent = () => {
    return (
        <Box sx={{width: '100%'}}>
            <Toolbar/>
            <Cover/>
            <Container>
                <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                    <Posts />
                    <MyInfo />
                </Grid>
            </Container>
        </Box>
    )
}

