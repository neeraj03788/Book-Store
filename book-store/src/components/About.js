import { Box, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <div>
        <Box>
            <Typography sx={{fontFamily: "fantasy"}} variant="h2" > Welcome to EBOOK-STORE where you upload your old books to sell </Typography>
            <Typography variant="h3" >By MERN STACK</Typography>
        </Box>
    </div>
  )
}

export default About
