import {Avatar, Box} from '@mui/material';
import React from 'react';
import cover from '../media/abstract-facebook-cover-1.jpeg'
import avatar from '../media/messi.png'

export const Cover = () => {
    return (
        <Box component="main" sx={{
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            flexGrow: 1,
            p: 3,
            backgroundImage: `url(${cover})`,
            height: '250px',
        }}>
                <Avatar
                src={avatar}
                sx={{
                    border: '3px solid white',
                    position: 'absolute',
                    bottom: '-60px',
                    width: '6em',
                    height: '6em'
                }}
            />
        </Box>
    )
}