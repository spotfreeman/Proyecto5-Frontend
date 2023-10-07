// Funcionalidades
import { ProductoTable } from '../components/ProductoTable';

// Bootstrap
import Card from 'react-bootstrap/Card'
import { PaypalButton } from '../components/Paypal/PaypalButton';


export const ProductosPage = () => {
    return (
        <>

            <Card className='border-0'>
                <div className='text-center'>
                    <Card bg='secondary rounded-0'> <h2 className='text-center text-white' style={{ height: '70px' }}>Productos</h2> </Card>
                </div>
            </Card>

            <Card>
                <ProductoTable />
            </Card>

        </>
    )
}
