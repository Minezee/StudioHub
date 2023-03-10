import styles from "@/styles/Styles.module.css"
import { useState, useContext } from "react"
import { RadioGroup } from "@headlessui/react";
import { Link } from "react-router-dom";
import { ReactComponent as Mic } from "@/assets/mic.svg";
import { OrderContext } from "@/context/OrderContext";

const Cart = ({ setActiveStep }) => {
    const [orderType, setOrderType] = useState('self');
    const { buyerData ,updateBuyerData } = useContext(OrderContext);
    const [name, setName] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [email, setEmail] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        updateBuyerData({
            contactName: name,
            contactPhoneNum:phoneNum,
            contactAddress: email,
        });
        console.log(buyerData);
        setActiveStep(1);
    }

    return (
        <div className='w-full flex gap-11 text-white'>
            <form onSubmit={handleSubmit} className='w-4/6 pl-5'>
                <label htmlFor="name" className={styles.label}>Nama Kontak</label>
                <input
                    type="text"
                    value={name}
                    required
                    onChange={(e)=> setName(e.target.value)}
                    className={styles.input}
                    placeholder="Masukan nama kontak"
                />
                <p>Isi nama pemesanan sesuai KTP/Paspor/SIM (tanpa tanda baca/gelar)</p>
                <div className="w-full flex gap-5 mt-7">
                    <div className="w-1/2">
                        <label htmlFor="name" className={styles.label}>No handphone kontak</label>
                        <input
                            type="tel"
                            value={phoneNum}
                            required
                            onChange={(e)=> setPhoneNum(e.target.value)}
                            className={styles.input}
                            placeholder="Masukan nomor kontak"
                        />
                        <p>Contoh: +62812345678, untuk Kode Negara(+62)</p>
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="name" className={styles.label}>Alamat email kontak</label>
                        <input
                            type="email"
                            value={email}
                            required
                            onChange={(e)=> setEmail(e.target.value)}
                            className={styles.input}
                            placeholder="Masukan Email Kontak"
                        />
                        <p>Contoh: email@example.com</p>
                    </div>
                </div>

                <RadioGroup value={orderType} onChange={setOrderType} className="flex gap-10 justify-evenly mt-10">
                    <RadioGroup.Label className="sr-only">Order untuk?</RadioGroup.Label>
                    <RadioGroup.Option
                        value="self"
                        className="rounded-md cursor-pointer flex items-center gap-8">
                        {({ checked }) => (
                            <>
                                <span className="border border-yellow-400 rounded-full h-8 w-8 flex justify-center items-center">
                                    {checked && <span className=' bg-yellow-400 rounded-full h-1/2 aspect-square' />}
                                </span>
                                <RadioGroup.Label as="span" className="text-h6">
                                    Sama dengan pemesan
                                </RadioGroup.Label>
                            </>
                        )}
                    </RadioGroup.Option>
                    <RadioGroup.Option
                        value="other"
                        className="rounded-md cursor-pointer flex items-center gap-8">
                        {({ checked }) => (
                            <>
                                <span className="border border-yellow-400 rounded-full h-8 w-8 flex justify-center items-center">
                                    {checked && <span className=' bg-yellow-400 rounded-full h-1/2 aspect-square' />}
                                </span>
                                <RadioGroup.Label as="span" className="text-h6">
                                    Saya memesan untuk orang lain
                                </RadioGroup.Label>
                            </>
                        )}
                    </RadioGroup.Option>
                </RadioGroup>

                <div className="w-full text-h6 font-semibold">
                    <h4 className="my-10 text-orange-500">Rincian Harga</h4>
                    <div className="flex justify-between">
                        <h5>Total</h5>
                        Rp. 55.000
                    </div>
                    <div className="w-full h-1 bg-white mt-3 mb-7" />
                    <div className="flex flex-col gap-10">
                        <div className="flex justify-between">
                            <p className="text-b1 font-normal">{"(1x) Room Vip((1jam)"}</p>
                            Rp. 50.000
                        </div>
                        <div className="flex justify-between">
                            <p className="text-b1 font-normal">Pajak dan Biaya</p>
                            Rp. 5.000
                        </div>
                    </div>
                    <div className="flex justify-between items-end mt-7 mb-14">
                        <p className="w-1/2">
                            Dengan mengeklik tombol dibawah, Anda menyetujui <Link className={styles.link}>Syarat dan Ketentuan</Link> serta <Link className={styles.link}>Kebijakan Privasi</Link> dari Studiohub
                        </p>
                        <button type="submit" className={`${styles.orderBtn} bg-orange-500`}>Order Now</button>
                    </div>
                </div>
            </form>
            <div className="flex-1">
                <div className="w-full bg-card-bg h-auto p-7 rounded-[1.25rem]">
                    <div className="flex gap-5">
                        <Mic />
                        <div className="flex flex-col items-end">
                            <h3 className="text-h6 font-semibold text-orange-500">Corner Music Studio</h3>
                            <p>Lowokwaru, malang</p>
                        </div>
                    </div>
                    <div className="mt-10 flex flex-col gap-3">
                        <div className="flex justify-between">
                            <span>Check-in</span>
                            Sun, 12 Mar 2023, 15:00
                        </div>
                        <div className="flex justify-between">
                            <span>Check-out</span>
                            Sun, 12 Mar 2023, 16:00
                        </div>
                        <div className="mt-7">
                            <p>{"(1x) Room Vip"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart