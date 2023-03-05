import { SortBy, Card, ResultHeader, Filter } from "@/components/global"

const SearchResult = () => {
    return (
        <>
            <ResultHeader />
            <div className="flex flex-col md:flex-row ">
                <Filter />
                <div className="flex-1">
                    <SortBy />
                    <div className="flex flex-col gap-7">
                        {[1, 2, 3, 4, 5, 6, 7].map(data => (
                            <Card key={data}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchResult