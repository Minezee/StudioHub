import { SortBy, Card, ResultHeader, Filter } from "@/components/global"
import { display_studio, display_rent, display_event } from "@/assets";

const SearchResult = ({ result }) => {
    var data;

    // Dummy Data before API Release!
    if (result == "studio") {
        data = [
            {
                name: "Corner Music Studio",
                img: display_studio,
                rating: { star: 4.2, resp: 872 },

                location: "Lowokwaru, Malang",
            },
            {
                name: "Corner Music Studio",
                img: display_studio,
                rating: { star: 4.2, resp: 872 },
                location: "Lowokwaru, Malang",
            },
            {
                name: "Corner Music Studio",
                img: display_studio,
                rating: { star: 4.2, resp: 872 },
                location: "Lowokwaru, Malang",
            },
            {
                name: "Corner Music Studio",
                img: display_studio,
                rating: { star: 4.2, resp: 872 },
                location: "Lowokwaru, Malang",
            },
            {
                name: "Corner Music Studio",
                img: display_studio,
                rating: { star: 4.2, resp: 872 },
                location: "Lowokwaru, Malang",
            },
            {
                name: "Corner Music Studio",
                img: display_studio,
                rating: { star: 4.2, resp: 872 },
                location: "Lowokwaru, Malang",
            },
            {
                name: "Corner Music Studio",
                img: display_studio,
                rating: { star: 4.2, resp: 872 },
                location: "Lowokwaru, Malang",
            },
        ]
    } else if (result === "rent") {
        data = [
            {
                name: "Drum Set",
                img: display_rent,
                rating: { star: 4.2, resp: 872 },
                location: "Lowokwaru, Malang",
            },
            {
                name: "Drum Set",
                img: display_rent,
                rating: { star: 4.2, resp: 872 },
                location: "Lowokwaru, Malang",
            },
            {
                name: "Drum Set",
                img: display_rent,
                rating: { star: 4.2, resp: 872 },
                location: "Lowokwaru, Malang",
            },
            {
                name: "Drum Set",
                img: display_rent,
                rating: { star: 4.2, resp: 872 },
                location: "Lowokwaru, Malang",
            },
            {
                name: "Drum Set",
                img: display_rent,
                rating: { star: 4.2, resp: 872 },
                location: "Lowokwaru, Malang",
            },
            {
                name: "Drum Set",
                img: display_rent,
                rating: { star: 4.2, resp: 872 },
                location: "Lowokwaru, Malang",
            },
            {
                name: "Drum Set",
                img: display_rent,
                rating: { star: 4.2, resp: 872 },
                location: "Lowokwaru, Malang",
            },
        ]
    } else if (result === "event") {
        data = [
            {
                name: "Musik Hebat 2022",
                img: display_event,
                rating: { star: 4.2, resp: 872 },
                location: "Lowokwaru, Malang",
            },
            {
                name: "Musik Hebat 2022",
                img: display_event,
                rating: { star: 4.2, resp: 872 },
                location: "Lowokwaru, Malang",
            },
            {
                name: "Musik Hebat 2022",
                img: display_event,
                rating: { star: 4.2, resp: 872 },
                location: "Lowokwaru, Malang",
            },
            {
                name: "Musik Hebat 2022",
                img: display_event,
                rating: { star: 4.2, resp: 872 },
                location: "Lowokwaru, Malang",
            },
            {
                name: "Musik Hebat 2022",
                img: display_event,
                rating: { star: 4.2, resp: 872 },
                location: "Lowokwaru, Malang",
            },
            {
                name: "Musik Hebat 2022",
                img: display_event,
                rating: { star: 4.2, resp: 872 },
                location: "Lowokwaru, Malang",
            },
            {
                name: "Musik Hebat 2022",
                img: display_event,
                rating: { star: 4.2, resp: 872 },
                location: "Lowokwaru, Malang",
            },
        ]
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
                            <Card key={data.name + index} data={data} searchResult={result}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchResult