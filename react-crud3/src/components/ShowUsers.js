import React,{useEffect,useState} from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { show_alerta } from '../functions';

const ShowUsers = () => {
    const url='https://planymacetas.onrender.com/api/usuarios';
    const [users,setUsers]= useState([]);
    const [id,setId]= useState('');
    const [name,setName]= useState('');
    const [LastName,setLastName]= useState('');
    const [email,setEmail]= useState('');
  return (
    <div>ShowUsers</div>
  )
}

export default ShowUsers