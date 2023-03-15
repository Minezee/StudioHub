import UserLayout from "@/components/layout/UserLayout"
import { FaSearch } from "react-icons/fa"

const History = () => {
    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <UserLayout>
            <div className="flex flex-col items-center sm:flex-row justify-between gap-5 sm:gap-0">
                <h2 className="text-h4 sm:text-h2 font-bold text-white">My Transaction</h2>
                <div className="flex items-center justify-center sm:justify-end">
                    <form onSubmit={handleSubmit} className="flex items-center bg-orange-500 pr-4 rounded-xl shadow-md w-full sm:w-4/5 text-xl">
                        <input
                            required
                            type="text"
                            placeholder="Search..."
                            className="px-4 focus:outline-none bg-transparent w-full placeholder-dark text-h5 py-4"
                        />
                        <button type="submit" className="px-2 text-xl">
                            <FaSearch />
                        </button>
                    </form>
                </div>
            </div>

            <table className="bg-white mt-12 w-full">
                <thead>
                    <tr className="bg-dark text-white sm:text-h5 font-light">
                        <th>ID Number</th>
                        <th>Transaction Date</th>
                        <th>Name</th>
                        <th>Prize</th>
                        <th>Status Booking</th>
                    </tr>
                </thead>
                <tbody className="[&>*:nth-child(odd)]:bg-light-txt [&>*:nth-child(even)]:bg-primary-color sm:text-h5 text-center">
                    {[1, 2, 3, 4, 5, 6].map(data => (
                        <tr className="[&>*]:py-3">
                            <td>#{data}</td>
                            <td>13/07/2023</td>
                            <td>Nauval Fahreza</td>
                            <td>Rp 68.434</td>
                            <td>Succes Payment</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </UserLayout>
    )
}

export default History