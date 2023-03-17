import { SortBy, Card, ResultHeader, Filter, Pagination } from "@/components/global"
import { eventList } from "@/constants/eventList";
import { rentList } from "@/constants/rentList";
import { studioList } from "@/constants/studioList";

const SearchResult = ({ result }) => {
    var data;

    // Dummy Data before API Release!
    if (result == "studio") {
        data = studioList;
    } else if (result === "rent") {
        data = rentList;
    } else if (result === "event") {
        data = eventList;
    }

    return (
        <>
            <ResultHeader />
            <div className="flex flex-col md:flex-row ">
                <Filter />
                <div className="flex-1">
                    <SortBy />
                    <div className="flex flex-col gap-7">
                        {data.map((data, index) => (
                            <Card key={data.name + index} data={data}/>
                        ))}
                    </div>
                    <Pagination />
                </div>
            </div>
        </>
    )
}

export default SearchResult