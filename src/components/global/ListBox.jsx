import { Listbox } from '@headlessui/react'
import { SlArrowDown } from 'react-icons/sl';

const ListBox = ({listboxValue, onChanges, option}) => {
    return (
        <div className='w-1/2'>
            <Listbox value={listboxValue} onChange={onChanges}>
                <div className='w-full relative'>
                    <Listbox.Button className="bg-white flex justify-between items-center px-5 py-4 w-full rounded-xl text-2xl font-medium mt-3 hover:bg-gray-100">
                        {listboxValue.name}
                        <SlArrowDown className='w-4' />
                    </Listbox.Button>
                    <Listbox.Options className="bg-white rounded-2xl absolute top-[4.25rem] z-20 w-full">
                        {option.map((data) => (
                            <Listbox.Option
                                key={data.name}
                                value={data}
                                disabled={data.unavailable}
                                className="bg-white px-5 py-4 w-full rounded-xl text-lg font-medium cursor-pointer hover:bg-gray-100"
                            >
                                {data.name}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </div>
            </Listbox>
        </div>
    )
}

export default ListBox