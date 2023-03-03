import { IoMdStar, IoMdStarHalf } from "react-icons/io";

const DisplayStar = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className="flex items-center gap-1">
            {[...Array(fullStars)].map((_, index) => (
                <IoMdStar key={index} className="text-yellow-500 w-6 h-6" />
            ))}
            {hasHalfStar && (
                <IoMdStarHalf half className="text-yellow-500 w-6 h-6" />
            )}
            {[...Array(emptyStars)].map((_, index) => (
                <IoMdStar key={fullStars + index} className="text-gray-300 w-6 h-6" />
            ))}
        </div>
    );
};

export default DisplayStar