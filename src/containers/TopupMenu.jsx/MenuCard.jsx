import { TopUp } from "@/constants/Topup"
import { NavLink } from "react-router-dom"

const MenuCard = ({ data, index }) => (
    <div className='w-full bg-yellow-500 flex justify-between items-center p-5'>
        <div className='text-dark'>
            <h3 className='text-h5 font-semibold'>ADD RP {data.menu.toLocaleString('id-ID')}</h3>
            {index === 0 && <p className='text-h6'>Minimum fund level</p>}
        </div>
        <div className='bg-dark text-white p-1 pl-6 flex items-center gap-6 font-bold'>
            Rp {data.price.toLocaleString('id-ID')}
            <NavLink to="/payment-method" className='bg-orange-500 text-dark py-4 px-5'>Add Funds</NavLink>
        </div>
    </div>
)

export default MenuCard