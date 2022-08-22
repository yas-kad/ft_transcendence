import React, { useContext } from 'react'
import { Button, Typography } from '@mui/material'
import { AppContext } from '../../context/AppContext'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


export default function Loading() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CircularProgress />
        </Box>
    )
}
