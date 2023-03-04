import { useState } from 'react'
import { SlArrowDown } from 'react-icons/sl';
import { Dropdown } from '@/components/global';
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const province = [    
    {
        name: 'Jawa Timur',
        city: [
            {
                name: "Malang",
            },
            {
                name: "Surabaya",
            },
            {
                name: "Batu",
            },
        ]
    },
    {
        name: 'Jawa Tengah',
        city: [
            {
                name: "Semarang",
            },
            {
                name: "Solo",
            },
            {
                name: "Magelang",
            },
        ]
    },
    {
        name: 'Jawa Barat',
        city: [
            {
                name: "Bandung",
            },
            {
                name: "Cimahi",
            },
            {
                name: "Bekasi",
            },
        ]
    },
];


const LocationSearch = ({ feature }) => {
    const [selectedMenu, setSelectedMenu] = useState("");
    const [selectedProvince, setSelectedProvince] = useState(province[0])
    const [selectedCity, setSelectedCity] = useState(selectedProvince.city[0])
    const navigate = useNavigate();

    function handleProvinceChange(selectedProvince) {
        setSelectedProvince(selectedProvince);
        setSelectedCity(selectedProvince.city[0]);
    }

    function handleSubmit(e){
        e.preventDefault()
        navigate(`/studio-list?province=${selectedProvince.name}&city=${selectedCity.name}&date=${"27 april 2023"}`)
    }

    return (
        <form onSubmit={handleSubmit} className='w-full bg-yellow-400 px-10 py-11 rounded-2xl mt-20 flex'>
            <div className="flex items-center gap-8">
                <div className="flex flex-col gap-7 text-orange-500 text-4xl font-bold">
                    {feature.map(menu => (
                        <button type='button' key={menu.name} onClick={() => setSelectedMenu(menu.name)} className={`${menu.name === selectedMenu ? "scale-105 bg-orange-500 text-dark" : "scale-100 bg-dark"} w-[19.75rem] py-6 px-6 rounded-2xl flex items-center justify-between hover:bg-orange-500 hover:text-dark`}>
                            <menu.icon className="h-12 w-auto" />
                            {menu.name}
                        </button>
                    ))}
                </div>
                <div className="bg-dark h-[23.25rem] w-2 rounded-lg" />
            </div>
            <div className="flex flex-col justify-evenly w-full mx-28">
                <div className='flex flex-col w-full'>
                    <label htmlFor="location" className="font-bold text-4xl text-white">Location</label>
                    <div className='grid grid-cols-2 gap-4'>
                        <Dropdown listboxValue={selectedProvince} onChanges={handleProvinceChange} option={province}/>
                        <Dropdown listboxValue={selectedCity} onChanges={setSelectedCity} option={selectedProvince.city}/>
                        <input type="date" className="bg-dark text-light-txt rounded-xl px-5 py-4 text-2xl font-medium mt-3 border-none outline-none hover:bg-gray-900" />
                    </div>
                </div>
                {/* Not fix? */}
                <div className='flex justify-end'>
                    <button type='submit' className='flex justify-between items-center gap-9 text-2xl text-dark bg-orange-500 font-medium px-6 py-3 rounded-xl hover:opacity-80'>
                        Search
                        <AiOutlineSearch />
                    </button>
                </div>
            </div>
        </form>
    )
}

export default LocationSearch