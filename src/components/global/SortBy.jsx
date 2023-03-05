import { RadioGroup } from "@headlessui/react"
import { useState } from "react"

const SortBy = () => {
    const [selectedFilter, setSelectedFilter] = useState("ALL");
    const filter = ["ALL", "Recomendation", "Popularity", "Prize"];

    return (
        <RadioGroup value={selectedFilter} onChange={setSelectedFilter} className="bg-yellow-400 flex-1 grid grid-cols-2 px-4 sm:px-0 gap-4 sm:gap-0 sm:flex sm:justify-evenly py-4 rounded-xl mb-7 w-full">
            <RadioGroup.Label className="sr-only">Sort By</RadioGroup.Label>
            {filter.map(name => (
                <RadioGroup.Option 
                    key={name}
                    value={name}>
                    {({ checked }) => (
                        <button className={`${checked ? 'bg-dark text-orange-500' : 'text-dark'} text-base sm:text-2xl font-semibold w-full sm:px-12 py-2 rounded-xl border border-dark`}>{name}</button>
                    )}
                </RadioGroup.Option>
            ))}
        </RadioGroup>
    )
}

export default SortBy