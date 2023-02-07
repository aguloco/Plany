import { useState, useEffect,  } from 'react';
// import { Badge, Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Title } from "@tremor/react";
import { Card, Table, Icon, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Text, Title, Badge,} from "@tremor/react";
import React from "react";

function ProductsList() {

    const [products, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://https://planymacetas.onrender.com/api/productos')
        .then((response) => response.json())
        .then((data) => { 
            const productsMapped = data.products.map((item) => {  
                return {
                nombre: item.nombre,
                precio: item.precio,
                categoria: item.Categoria.nombre,
                imagen: "https://planymacetas.onrender.com/img/tiendaProductos/" + item.imagen
                }
             })
            setProduct(productsMapped); 
        }) .catch((error) => {
            console.log(error)
            })
        
    },[]);

    
    return (

        <Card>
    <Title>Productos Tienda</Title>
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
                    Precio
                </TableHeaderCell>
                <TableHeaderCell>
                    Categoria
                </TableHeaderCell>
            </TableRow>
        </TableHead>
        <TableBody>
            { products.map((product) => { return  (
                <TableRow key={ product.imagen }>
                    <TableCell>
                        <img src={ product.imagen } className="productImg" />
                    </TableCell>
                    <TableCell>
                        { product.nombre }
                    </TableCell>
                    <TableCell>
                        <Text>$ { product.precio }</Text>
                    </TableCell>
                    <TableCell>
                        <Text>{ product.categoria }</Text>
                    </TableCell>
                    
                </TableRow>
            )})}
        </TableBody>
    </Table>
  </Card>
    )
}

export default ProductsList;