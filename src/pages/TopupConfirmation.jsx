import UserLayout from "@/components/layout/UserLayout"
import styles from "@/styles/Styles.module.css"
import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AppContext } from "@/context/AppContext"

const TopupConfirmation = () => {
    const navigate = useNavigate();
    const { userData } = useContext(AppContext);

    function handleClick(){
        navigate('/topup-payment');
    }

    return (
        <UserLayout>
                <div className="flex items-start gap-4 text-white mt-20">
                    <div className="w-[73%]">
                        <h3 className="text-h5 font-semibold text-orange-500">Price List</h3>
                        <div className="flex flex-col gap-3">
                            <div className="flex justify-between items-center text-h6 font-semibold">
                                Sub total
                                <span>Rp 45.000</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex justify-between items-center text-h6 font-semibold">
                                Total Payment
                                <span className="text-orange-500 text-h5 font-bold">Rp 45 000</span>
                            </div>
                        </div>
                        <div className="flex gap-10 mt-7 text-h6 font-semibold">
                            <div>
                                <p>Payment method:</p>
                                <p>Account:</p>
                            </div>
                            <div>
                                <p>BNI</p>
                                <p>{userData.name}</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-end mt-7">
                            <p className="w-1/2 text-h6 font-semibold">
                                Dengan mengeklik tombol dibawah, Anda menyetujui <Link className={styles.link}>Syarat dan Ketentuan</Link> serta <Link className={styles.link}>Kebijakan Privasi</Link> dari Studiohub
                            </p>
                            <button onClick={handleClick} className={`${styles.orderBtn} bg-orange-500`}>Pay Now</button>
                        </div>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-h5">PURCHASING ON STUDIOHUB</h3>
                        <div className="bg-primary-color px-6 py-7">
                            <p className="whitespace-pre-line font-bold text-dark">
                                {`When you submit your payment information your data is protected by Secure Socket Layer (SSL) technology certified by a digital certificate.
                                Once you've completed this transaction, your payment method will be debited you'll receive an email message confirming receipt of your purchase.`}
                            </p>
                        </div>
                    </div>
                </div>
        </UserLayout>
    )
}

export default TopupConfirmation