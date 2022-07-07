import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {useState} from 'react';
import { TextField,FormLabel,Button,FormControlLabel, Checkbox } from '@mui/material';
import { Box } from '@mui/system';


const Bookdetail = () => {
      const [inputs, setinputs] = useState({});
    const id = useParams().id;
    const history = useNavigate();
    useEffect(() => {
      const fetchhandler = async()=>{
        await axios.get(`http://localhost:5000/books/${id}`).then(res=>(res.data)).then((data)=>setinputs(data.book ))};
        fetchhandler();
    }, [id]);
    const sendrequest = async()=>{
      await axios.put(`http://localhost:5000/books/${id}`,{
        name :String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        available: Boolean(inputs.avaiable),
        price: Number(inputs.price),
        image: String(inputs.image), 
        available: Boolean(inputs.checked)
      }).then(res=>res.data);
    }
   
    const handlesubmit = (e)=>{
      e.preventDefault();
      sendrequest().then(()=>history('/'));

    }
    
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
  return (
    <div>
     {inputs && (<form form onSubmit={handlesubmit}>
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

            <Button varient="contained" type='submit'>UPDATE Book</Button>
            </Box>
     </form>)}
    </div>
  )
}

export default Bookdetail;