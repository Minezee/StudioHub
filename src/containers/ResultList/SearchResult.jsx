import { SortBy, Card, ResultHeader, Filter, Pagination, StudioCard } from "@/components/global"
import { eventList } from "@/constants/eventList";
import { rentList } from "@/constants/rentList";
import { useQuery } from "react-query";
import axiosInstance from "@/helpers/api";
import { useState, useEffect } from "react";

const getListData = async (result, sort, page) => {
    if (result === "studio") {
        const response = await axiosInstance.get(`studio${sort}?page=${page}`);
        return response.data.data;
    } else if (result === "rent") {
        return rentList;
    } else {
        return eventList;
    }
};

const SearchResult = ({ result }) => {
    const [page, setPage] = useState(1);
    const [selectedFilter, setSelectedFilter] = useState({
        "Sort Results": null,
        "Rating": null,
        "Facilities": null
    });
    var sort = "";
    const { isLoading, error, data, refetch } = useQuery(
        "getListData",
        () => getListData(result, sort, page),
        {
            enabled: false,
        }
    );

    useEffect(() => {
        refetch();
    }, [page]);

    useEffect(() => {
        if (selectedFilter["Sort Results"] === "Highest Price") {
            sort = "/highest_price"
        } else if (selectedFilter["Sort Results"] === "Lowest Price") {
            sort = "/lowest_price"
        } else {
            sort = ""
        }
        refetch()
    }, [selectedFilter["Sort Results"]])

    if (error) return console.log("error!")

    return (
        <>
            <ResultHeader />
            <div className="flex flex-col md:flex-row ">
                <Filter selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
                <div className="flex-1">
                    <SortBy />
                    {isLoading ?
                        <div className="h-[50vh] w-full flex items-center justify-center text-h4 font-bold text-white">
                            Getting your studio data. . .
                        </div>
                        :
                        <div className="flex flex-col gap-7">
                            {data?.map((data, index) => (
                                <div key={data.name + index}>
                                    {result === "studio" ?
                                        <StudioCard data={data} />
                                        :
                                        <Card data={data} />
                                    }
                                </div>
                            ))}
                        </div>
                    }
                    <Pagination page={page} setPage={setPage} />
                </div>
            </div>
        </>
    )
}

export default SearchResult