import { IoMdStar } from "react-icons/io"

const dummy = [
  {
    name: "Fantastis",
    rate: 45,
  },
  {
    name: "Sangat Bagus",
    rate: 30,
  },
  {
    name: "Memuaskan",
    rate: 15,
  },
  {
    name: "Biasa",
    rate: 4,
  },
  {
    name: "Buruk",
    rate: 1,
  },
]

const Ratings = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-10 sm:gap-52 items-center sm:items-end my-7 px-14 py-8 bg-card-bg rounded-[1.25rem]">
      <div className="flex flex-col items-center gap-5">
        <h3 className="text-h3 sm:text-h4 font-bold text-orange-500 text-center">Ratings</h3>
        <div className='border-[1rem] border-orange-500 aspect-square h-52 w-auto sm:h-[9.25rem] rounded-full flex items-center justify-center text-white text-h3 sm:text-h4 font-bold'>
          <IoMdStar className="text-yellow-500" />
          4,6
        </div>
      </div>
      <div className="w-full sm:w-3/5 flex flex-col gap-2">
        {dummy.map(data => (
          <div key={data.name} className="flex w-full text-white items-center justify-between text-b1 font-bold">
            {data.name}
            <div className="h-2 bg-white w-3/5 sm:w-1/2 rounded-md">
              <div className="h-2 bg-orange-500 rounded-md" style={{width: `${data.rate*2}%`}}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Ratings