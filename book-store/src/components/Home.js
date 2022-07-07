import { Box, Button,  Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button LinkComponent={Link} to="/books" sx={{marginTop: "15px", background:"orangered"}} variant='contained' >
        <Typography variant='h3' >view all products</Typography>
        </Button>
      </Box>
    </div>
  )
}

export default Home;