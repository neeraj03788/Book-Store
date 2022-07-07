import React from 'react'
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './Book.css';
import axios from 'axios';

const Book = (props) => {
  
  const history = useNavigate();
  const {_id,author,description,image,price} = props.book;
  const deletehandler= async()=>{
    await axios
    .delete(`http://localhost:5000/books/${_id}`)
    .then((res)=>res.data).then(()=>history("/books"));
    
    
  }
  return (
   <div className='card'>
     <img src={image} alt="" />
     <article>by {author}</article>
     <h3>{price}</h3>
     <p>{description}</p>
     <Button LinkComponent={Link} to={`/books/${_id}`} sx={{mt:'auto'}}>UPDATE</Button>
     <Button onClick={deletehandler} sx={{mt:'auto'}}>DELETE</Button>
   </div> 
   
    
    
  )
}

export default Book
