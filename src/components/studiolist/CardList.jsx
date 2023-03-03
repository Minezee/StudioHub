import SortBy from "./SortBy"
import Card from "./Card"

const CardList = () => {
    return (
        <div className="flex-1">
            <SortBy />
            <div className="flex flex-col gap-7">
                {[1,2,3,4,5,6,7].map(_ => (
                    <Card />
                ))}
            </div>
        </div>
    )
}

export default CardList