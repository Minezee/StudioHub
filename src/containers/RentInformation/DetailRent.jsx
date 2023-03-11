import { DetailHeader, DisplayImage } from "@/components/global"
import { NavLink, useNavigate } from "react-router-dom"
import styles from "@/styles/Styles.module.css"

const DetailRent = () => {
    const navigate = useNavigate()

    function handleClick(){
        sessionStorage.setItem('isPayment', true);
        navigate('/drum set/payment')
    }

    return (
        <div className='bg-card-bg px-4 sm:px-14 py-6 rounded-[20px] text-white'>
            <DetailHeader name="Drum Set" location="Lowokwaru, Malang" rate={4} />
            <DisplayImage />
            <p className="whitespace-pre-line">
                {`
                Drum set Rolling JB 1016
                Perbedaan dengan JB1026 adalah, type 1016 ini warna hardwarenya hitam, yaitu Stand cymbal, stand hihat, stand snare, kaki bass drum, tom holder dan semua ring drumnya hitam.
                
                Set yang di dapat adalah sebagai berikut :
                Drums :
                1. Bass 22" x 16"
                2. Floor tom 16" x 16"
                3. Tom kiri 12' x 9"
                4. Tom kanan 13' x 10"
                5. Snare drum 14' x 5,5"
                
                Hardware:
                6. Stand snare ( black )
                7. Stand Hihat ( black )
                8. Stand cymbal ( black )
                9. Stand cymbal boom ( black )
                10. Kursi drum
                11. Pedal drum
                
                Cymbal:
                12. Hihat 14" (1set)
                13. Cymbal 16"
                14. Cymbal 18"
                
                Termasuk :
                15. Kaki bass drum ( black )
                16. Kaki floor tom
                17. Stick drum
                
                Tersedia warna :
                - Red Sparkle / Metallic 
                - Black 
                - Hairline Red 
                - Hairline Black 
                - Metallic Blue
                `}
            </p>
            <div className="mt-10 sm:mt-20 flex justify-between items-center font-bold">
                <p className="text-h4 sm:text-h3 text-orange-500">Rp 350.000</p>
                <button onClick={handleClick} className={styles.orderBtn}>
                    Order Now
                </button>
            </div>
        </div>
    )
}

export default DetailRent