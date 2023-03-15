import { NavLink } from "react-router-dom"

const WalletInfo = () => (
    <aside className='flex-1'>
        <h3 className='text-h5 text-white'>Your Studio Hub Account</h3>
        <div className='w-full bg-primary-color py-6 px-5 rounded-lg'>
            <div className='flex justify-between items-end'>
                <h4 className='font-bold'>Current Wallet Balance</h4>
                <span className='font-semibold text-h5'>Rp 150.000</span>
            </div>
            <NavLink to="/history">
                <button className='w-full py-4 bg-orange-500 mt-16 rounded-lg font-bold'>See my History details</button>
            </NavLink>
        </div>
    </aside>
)

export default WalletInfo