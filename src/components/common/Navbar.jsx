

const Navbar = () => {
    return (
        <div className='w-full flex justify-between items-center bg-gray-500 px-6 py-8 text-white'>
            <div className="bg-gray-400 px-4 py-2">LOGO</div>
            <div className='flex gap-10'>
                <div>Menu 1</div>
                <div>Menu 2</div>
                <div>Menu 3</div>
            </div>
            <button className='px-4 py-2 bg-gray-400'>Login</button>
        </div>
    )
}

export default Navbar