import { TopUp } from "@/constants/Topup"
import MenuCard from "./MenuCard"
import WalletInfo from "./WalletInfo"

const MenuContainer = () => (
    <>
        <h2 className='text-white text-h4 font-bold'>ADD FUNDS TO YOUR STUDIO HUB WALLET</h2>
        <p className='text-white text-h5'>ADD FUND TO GABRIEL WALLET</p>
        <div className='flex gap-4 mt-12'>
            <section className='w-[70%] flex flex-col gap-3'>
                {TopUp.map((data, index) => (
                    <MenuCard key={"topup-" + index} data={data} index={index} />
                ))}
            </section>
            <WalletInfo />
        </div>
    </>
)

export default MenuContainer