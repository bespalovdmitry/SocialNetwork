import {Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar} from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import React from 'react';

export const LeftSideBar = () => {
    const drawerWidth = '240px'
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                // flexShrink: 0,
                [`& .MuiDrawer-paper`]: {width: drawerWidth, boxSizing: 'border-box'},
            }}
        >
            <Toolbar/>
            <Box sx={{overflow: 'auto'}}>
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <FaceIcon fontSize={'small'} color={'primary'}/>
                        </ListItemIcon>
                        <ListItemText primary={'Profile'}/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <ChatBubbleOutlineIcon fontSize={'small'} color={'primary'}/>
                        </ListItemIcon>
                        <ListItemText primary={'Message'}/>
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    )
}