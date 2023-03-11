import styles from "@/styles/Styles.module.css"
import { useContext } from "react"
import { OrderContext } from "@/context/OrderContext"
import { studio } from "@/assets";
import { mandiri, BCA, BSI, BNI, livin } from "@/assets";
import { Link } from "react-router-dom";

const Review = ({setActiveStep}) => {
    const { buyerData } = useContext(OrderContext);
    
    function handleClick(){
        setActiveStep(2);
    }

    return (
        <div className='w-full flex flex-col gap-11 text-white'>
            <div className="w-full flex gap-4">
                <div className="w-4/6 flex flex-col gap-7">
                    <div className="font-semibold">
                        <h3 className="text-h4 text-orange-400">Mohon Review Pesanan Anda</h3>
                        <p className="text-h6">Mohon periksa kembali pesanan Anda sebelum melanjutkan  pembayaran</p>
                    </div>
                    <div className="flex bg-card-bg font-semibold">
                        <img src={studio} alt="studio image" className="w-[16.5rem] aspect-[1/0.9] rounded-[1.25rem]" />
                        <div className="flex-1 flex flex-col bg-yellow-400 rounded-[1.25rem] px-6 py-3 text-dark">
                            <h4 className="text-h4">Room Deluxe</h4>
                            <p className="text-h6">Recording Room</p>
                            <div className="w-full h-1 bg-dark rounded-full" />
                            <div className="flex flex-col gap-3 justify-center flex-1 font-bold">
                                <div className="flex gap-[4.75rem]">
                                    Check-in
                                    <span>Sun, 5 Mar 2023, 15:00</span>
                                </div>
                                <div className="flex gap-[4.75rem]">
                                    Check-in
                                    <span>Sun, 5 Mar 2023, 15:00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-card-bg rounded-[1.25rem] px-9 pt-7">
                    <div className="flex flex-col gap-3">
                        <h5 className="text-h6 font-semibold text-orange-500">Detil Kontak</h5>
                        <span>daniel andrew</span>
                        <span>+62812345678</span>
                        <span>daniel123@gmail.com</span>
                    </div>
                    <div className="flex flex-col gap-3 mt-5">
                        <h5 className="text-h6 font-semibold text-orange-500">Detil Tamu</h5>
                        <span>{buyerData.contactName}</span>
                        <span>{buyerData.contactPhoneNum}</span>
                        <span>{buyerData.contactEmail}</span>
                    </div>
                </div>
            </div>
            <div>
                <h4 className="text-h5 font-semibold text-orange-400">My Wallets</h4>
                <p className="text-h6 font-semibold">Current Wallet Balance : Rp 150 000</p>
            </div>
            <div className="text-white w-4/6">
                <div className="text-h6 font-semibold">
                    <h4 className="text-h5 font-semibold text-orange-400">Perincian Harga</h4>
                    <div className="mt-10 flex flex-col gap-3">
                        <div className="flex justify-between">
                            Total item
                            <span>Rp 60.434</span>
                        </div>
                        <div className="flex justify-between">
                            Admin
                            <span>Rp 60.434</span>
                        </div>
                        <div className="flex justify-between">
                            Buyer Service Fee
                            <span>Rp 60.434</span>
                        </div>
                        <div className="flex justify-between">
                            Total Payment
                            <span className="text-h5 font-bold text-orange-500">Rp 60.434</span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-end mt-7 mb-14">
                    <p className="w-1/2 text-h6 font-semibold">
                        Dengan mengeklik tombol dibawah, Anda menyetujui <Link className={styles.link}>Syarat dan Ketentuan</Link> serta <Link className={styles.link}>Kebijakan Privasi</Link> dari Studiohub
                    </p>
                    <button onClick={handleClick} className={`${styles.orderBtn} bg-orange-500`}>Pay Now</button>
                </div>
            </div>
        </div>
    )
}

export default Review