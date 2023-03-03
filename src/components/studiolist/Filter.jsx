import { useState, useEffect } from 'react';
import { RadioGroup } from '@headlessui/react';


const filterMenu = [
    {
        title: "Sort Results",
        submenu: ['Highest Price', 'Lowest Price', 'Newest']
    },
    {
        title: "Rating",
        submenu: ['5 Stars', '4 Stars & Up', '3 Stars & Up', '2 Stars & Up', '1 Star & Up']
    },
    {
        title: "Facilities",
        submenu: ["Facilities1", "Facilities2", "Facilities3", "Facilities4", "Facilities5"]
    }
]

const Filter = () => {
    const [selectedFilter, setSelectedFilter] = useState({
        "Sort Results": null,
        "Rating": null,
        "Facilities": null
    });

    const handleSelect = (title, value) => {
        setSelectedFilter(prevSelected => ({
            ...prevSelected,
            [title]: value
        }));
    };

    const handleOptionClick = (menu, sub) => {
        if (selectedFilter[menu.title] === sub) {
            // reset selected value if same option clicked
            handleSelect(menu.title, null);
        }
    };

    return (
        <aside className="w-1/4 flex flex-col gap-8 px-8 py-8">
            {filterMenu.map((menu) => (
                <div key={menu.title}>
                    <h3 className="font-bold">{menu.title}</h3>
                    <RadioGroup value={selectedFilter[menu.title]} onChange={(value) => handleSelect(menu.title, value)}>
                        <RadioGroup.Label className="sr-only">{menu.title}</RadioGroup.Label>
                        <div className="flex flex-col gap-4 mt-4">
                            {menu.submenu.map((sub) => (
                                <RadioGroup.Option
                                    key={sub}
                                    value={sub}
                                    onClick={() => handleOptionClick(menu, sub)}
                                    className="rounded-md cursor-pointer flex items-center space-x-4">
                                    {({ checked }) => (
                                        <>
                                            <span className={`${checked ? "border-2" : "border"} border-yellow-400 rounded-full h-4 w-4 flex justify-center items-center`}>
                                                {checked && <span className='border bg-yellow-400 rounded-full h-[0.5625rem] w-[0.5625rem]' />}
                                            </span>
                                            <RadioGroup.Label as="span" className="font-medium text-gray-900">
                                                {sub}
                                            </RadioGroup.Label>
                                        </>
                                    )}
                                </RadioGroup.Option>
                            ))}
                        </div>
                    </RadioGroup>
                </div>
            ))}
        </aside>
    )
}

export default Filter