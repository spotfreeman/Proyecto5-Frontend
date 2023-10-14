import { PaypalButton } from "../components/Paypal/PaypalButton"
import { ProductoTable } from "../components/ProductoTable"


export const ShoppingPage = () => {
    return (
        <>
            <ProductoTable />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <PaypalButton invoice={'Producto01'} totalValue={'20.99'} />
                    </div>
                </div>
            </div>
        </>
    )
}