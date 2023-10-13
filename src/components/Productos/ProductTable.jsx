import { useContext, useEffect, useState } from "react"
import ProductoContext from "../../context/Producto/ProductoContext"
import { Button, Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export const ProductTable = () => {

    const navigate = useNavigate()

    const [products, setProducts] = useState([])

    const globalContext = useContext(ProductoContext)
    const { getProducts, getOneProduct } = globalContext;
    const getAllProducts = async () => {
        const data = await getProducts()
        setProducts(data)
    }

    useEffect(() => {
        getAllProducts()
    }, [])


    return (
        <>
            <Container>
                {products.map(prod => {
                    return (
                        <div key={prod._id}>
                            <h2>{prod.id} </h2>
                            <h3>{prod.nombre} </h3>
                            <h3>{prod.descripcion} </h3>
                            <Button variant="primary" onClick={() => (getOneProduct(prod._id))} >Detalle </Button>
                        </div>

                    )
                })}
            </Container>

        </>
    )
}