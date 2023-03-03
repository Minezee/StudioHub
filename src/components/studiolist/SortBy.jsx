import { RadioGroup } from "@headlessui/react"
import { useState } from "react"

const SortBy = () => {
    const [selectedFilter, setSelectedFilter] = useState("ALL");
    const filter = ["ALL", "Recomendation", "Popularity", "Prize"];

    return (
        <RadioGroup value={selectedFilter} onChange={setSelectedFilter} className="bg-yellow-400 flex-1 flex justify-evenly py-4 rounded-xl mb-7">
            <RadioGroup.Label className="sr-only">Sort By</RadioGroup.Label>
            {filter.map(name => (
                <RadioGroup.Option 
                    key={name}
                    value={name}>
                    {({ checked }) => (
                        <button className={`${checked ? 'bg-white text-orange-400' : 'text-white'} text-2xl font-semibold px-12 py-2 flex rounded-xl border border-white`}>{name}</button>
                    )}
                </RadioGroup.Option>
            ))}
        </RadioGroup>
    )
}

export default SortBy