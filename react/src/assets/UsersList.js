import { useState, useEffect,  } from 'react';
// import { Badge, Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Title } from "@tremor/react";
import { Card, Table, Icon, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Text, Title, Badge,} from "@tremor/react";
import React from "react";

function UsersList() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://planymacetas.onrender.com/api/usuarios'
        )
        .then((response) => response.json())
        .then((data) => { 
            const usersMapped = data.users.map((item) => {  
                return {
                nombre: item.nombre,
                apellido: item.apellido,
                email: item.email,
                imagen: "https://planymacetas.onrender.com/img/avatars/" + item.imagen
                }
             })
            setUsers(usersMapped); 
        }) .catch((error) => {
            console.log(error)
            })
        
    },[]);

    
    return (

        <Card>
    <Title>Clientes</Title>
    <Table marginTop="mt-5">
        <TableHead>
            <TableRow>
                <TableHeaderCell>
                    Imagen
                </TableHeaderCell>
                <TableHeaderCell>
                    Nombre
                </TableHeaderCell>
                <TableHeaderCell>
                    Apellido
                </TableHeaderCell>
                <TableHeaderCell>
                    Email
                </TableHeaderCell>
            </TableRow>
        </TableHead>
        <TableBody>
            { users.map((user) => { return  (
                <TableRow key={ user.email }>
                    <TableCell>
                        <img src={user.imagen} className="userImg" />
                    </TableCell>
                    <TableCell>
                        { user.nombre }
                    </TableCell>
                    <TableCell>
                        <Text>{ user.apellido }</Text>
                    </TableCell>
                    <TableCell>
                        <Text>{ user.email }</Text>
                    </TableCell>
                    
                </TableRow>
            )})}
        </TableBody>
    </Table>
  </Card>
    )
}

export default UsersList;