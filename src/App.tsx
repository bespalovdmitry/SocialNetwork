import React from 'react';
import './App.css';
import {Box} from '@mui/material';
import {HeaderMenu} from './components/HeaderMenu';
import {LeftSideBar} from './components/LeftSideBar';
import {MainContent} from './components/MainContent';

function App() {
    return (
        <Box sx={{display: 'flex'}} className="App">
            <HeaderMenu/>
            <LeftSideBar/>
            <MainContent />
        </Box>
    );
}

export default App;

