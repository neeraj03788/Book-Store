import React ,{useState}from 'react'
import {AppBar,Toolbar,Typography,Tabs,Tab} from "@mui/material"
import BookIcon from '@mui/icons-material/Book';
import {NavLink} from 'react-router-dom'
const Header = () => {
  const [value, setvalue] = useState();

  const valuechange = (e,val)=>{
    setvalue(val);
}
  return (
    <div>
        <AppBar sx={{backgroundColor: 'red'}}position="sticky">
            <Toolbar>
              <NavLink to="/"   >
            <Typography>
                <BookIcon />
            </Typography>
            </NavLink>
            <Tabs sx={{ml:'auto'}} textColor='inherit' indicatorColor='secondary' value={value} onChange={valuechange}>
            <Tab LinkComponent={NavLink} to='/books' label='Books'/>
                <Tab LinkComponent={NavLink} to='/addbook' label='add product'/>
                
                <Tab LinkComponent={NavLink} to='/about' label='About Us'/>
            </Tabs>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header 