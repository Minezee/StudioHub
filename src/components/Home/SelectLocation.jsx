import { Listbox } from '@headlessui/react'
import { SlArrowDown } from 'react-icons/sl';

const SelectLocation = ({selectedLocation, onChanges, location}) => {
    return (
        <div className='w-1/2'>
            <Listbox value={selectedLocation} onChange={onChanges}>
                <div className='w-full relative'>
                    <Listbox.Button className="bg-white flex justify-between items-center px-5 py-4 w-full rounded-xl text-2xl font-medium mt-3 hover:bg-gray-100">
                        {selectedLocation.name}
                        <SlArrowDown className='w-4' />
                    </Listbox.Button>
                    <Listbox.Options className="bg-white rounded-2xl absolute top-[4.25rem] z-20 w-full">
                        {location.map((location) => (
                            <Listbox.Option
                                key={location.name}
                                value={location}
                                disabled={location.unavailable}
                                className="bg-white px-5 py-4 w-full rounded-xl text-lg font-medium cursor-pointer hover:bg-gray-100"
                            >
                                {location.name}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </div>
            </Listbox>
        </div>
    )
}

export default SelectLocation