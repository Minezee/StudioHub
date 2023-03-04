import { Listbox } from '@headlessui/react'
import { SlArrowDown } from 'react-icons/sl';

const Dropdown = ({listboxValue, onChanges, option}) => {
    return (
        <div>
            <Listbox value={listboxValue} onChange={onChanges}>
                <div className='w-full relative'>
                    <Listbox.Button className="bg-dark text-light-txt flex justify-between items-center px-5 py-4 w-full rounded-xl text-2xl font-medium mt-3 hover:bg-gray-900">
                        {listboxValue.name}
                        <SlArrowDown className='w-4' />
                    </Listbox.Button>
                    <Listbox.Options className="bg-dark text-light-txt rounded-2xl absolute top-[4.25rem] z-20 w-full">
                        {option.map((data) => (
                            <Listbox.Option
                                key={data.name}
                                value={data}
                                disabled={data.unavailable}
                                className="bg-dark text-light-txt px-5 py-4 w-full rounded-xl text-lg font-medium cursor-pointer hover:bg-gray-900"
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

export default Dropdown