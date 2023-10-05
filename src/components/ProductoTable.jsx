// Importaciones basicas

import { useContext, useEffect, useState } from "react";
import ProductoContext from "../context/Producto/ProductoContext";
import React from "react";

// Importaciones adicionales
import Button from 'react-bootstrap/Button';

export const ProductoTable = () => {

    const [productos, setProductos] = useState([])

    // globalContext se suele utilizar ctx
    const globalContext = useContext(ProductoContext)

    const { getProductos } = globalContext

    const getAllProductos = async () => {
        const data = await getProductos()
        setProductos(data)
    }
    useEffect(() => {
        getAllProductos()
    }, [])

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Codigo</th>
                        <th>Valor</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productos.map(producto => (
                            <tr key={producto._id}>
                                <td>{producto.nombre}</td>
                                <td>{producto.codigo}</td>
                                <td>{producto.valor}</td>
                            </tr>)
                        )
                    }
                </tbody>
            </table>
        </>
    )
}