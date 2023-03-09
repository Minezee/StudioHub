import DisplayStar from "./DisplayStar"

const DetailHeader = ({name, location, rate}) => {
    return (
        <div className="flex flex-col sm:flex-row items-start justify-between">
            <div>
                <h2 className="text-orange-500 text-h3 sm:text-h2 font-semibold">{name}</h2>
                <p className="text-2xl font-semibold">{location}</p>
            </div>
            <DisplayStar rating={rate} lg />
        </div>
    )
}

export default DetailHeader