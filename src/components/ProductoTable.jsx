// Importaciones basicas
import { useContext, useEffect, useState } from "react";
import ProductoContext from "../context/Producto/ProductoContext";

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
            <div className="container">
                <div className="row">
                    <div className="col">
                        <table>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Codigo</th>
                                    <th>Valor</th>
                                    <th>Descripcion</th>
                                    <th>Material</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    productos.map(producto => (
                                        <tr key={producto._id}>
                                            <td>{producto.nombre}</td>
                                            <td>{producto.codigo}</td>
                                            <td>{producto.valor}</td>
                                            <td>{producto.descripcion}</td>
                                            <td>{producto.material}</td>
                                            <td><Button variant="primary">Primary</Button>{' '}</td>
                                        </tr>)
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}