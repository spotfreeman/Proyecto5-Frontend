import { PayPalButtons } from "@paypal/react-paypal-js"

export const PaypalButton = ({ invoice, totalValue }) => {
    return (
        <PayPalButtons
            createOrder={(data, actions) => {
                return action.order.create({
                    purchase_units: [
                        {
                            description: invoice,
                            amount: {
                                value: totalValue
                            }
                        }
                    ]
                })
            }}
            onApprove={async (data, actions) => {
                const order = await actions.order?.capture()
                console.log(order)
            }}
        />
    )
}