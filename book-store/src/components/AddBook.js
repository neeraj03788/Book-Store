import React, {useState} from 'react';
import { TextField,FormLabel,Button,FormControlLabel, Checkbox } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const AddBook = () => {
    const history = useNavigate();
    const [inputs, setinputs] = useState({
        name:"",
        author:"",
        description:"",
        price:"",
        image:""
    })
const handlechange= (e)=>{
    setinputs((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value,
        [e.target.author]:e.target.value,
        [e.target.description]:e.target.value,
        [e.target.price]:e.target.value,
        [e.target.available]:e.target.value,
        [e.target.image]:e.target.value,

    }))
}
const [checked, setchecked] = useState(false);
const handlesubmit = (e)=>{
    e.preventDefault();
    sendrequest().then(()=>history('/books'));
    
}
// request to the database

const sendrequest= async()=>{
    await axios.post('http://localhost:5000/books',{
        name :String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        available: Boolean(inputs.avaiable),
        price: Number(inputs.price),
        image: String(inputs.image)
    }).then(res=>res.data)
}
  return (
    <form onSubmit={handlesubmit}>
        <Box 
        display='flex' flexDirection={'column'} justifyContent={'center'} maxWidth={700} alignContent={'center'} alignSelf={'center'} marginLeft='auto' marginRight={'auto'} marginTop={10}>
        <FormLabel>Name</FormLabel>
            <TextField value={inputs.name} onChange={handlechange} margin="normal" fullWidth variant="outlined" name='name'/>
        <FormLabel>Author</FormLabel>
            <TextField value={inputs.author} onChange={handlechange} margin='normal' fullWidth variant="outlined" name='author'/>
        <FormLabel>Description</FormLabel>
            <TextField value={inputs.description} onChange={handlechange} margin='normal' fullWidth variant="outlined" name='description'/>
        <FormLabel>Price</FormLabel>
            <TextField value={inputs.price} onChange={handlechange} type='number' margin='normal' fullWidth variant="outlined" name='price'/>
        {/* <FormLabel>avilable</FormLabel>
            <TextField  type='boolean' margin='normal' fullWidth variant="outlined" name='avilable'/> */}
        <FormLabel>image</FormLabel>
            <TextField  value={inputs.image} onChange={handlechange} margin='normal' fullWidth variant="outlined" name='image'/>
            <FormControlLabel control={<Checkbox checked={checked} onChange={()=>setchecked(!checked)}/>} name='available' label="Available" />

            <Button varient="contained" type='submit'>Add Book</Button>
            </Box>
     </form>
  )
}

export default AddBook;