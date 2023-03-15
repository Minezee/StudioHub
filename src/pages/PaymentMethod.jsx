import UserLayout from "@/components/layout/UserLayout"

const PaymentMethod = () => {
    return (
        <UserLayout>
            <div className="flex-1 flex justify-center items-center">
                <div>
                    <h3>Price List</h3>
                    <div className="flex justify-between">
                        <div>
                            <p>Sub total</p>
                            <p>Total Payment</p>
                        </div>
                        <div>
                            <p>Rp 45 000</p>
                            <p>Rp 45 000</p>
                        </div>
                    </div>
                </div>
            </div>
        </UserLayout>
    )
}

export default PaymentMethod