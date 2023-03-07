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
    <div className="flex justify-between items-end my-7 text-5xl">
      <div className="flex flex-col items-center gap-5">
        <h3 className="text-5xl font-bold text-orange-500 text-center">Ratings</h3>
        <div className='border-[1.75rem] border-orange-500 aspect-square h-[18.25rem] rounded-full flex items-center justify-center text-white text-[4rem] font-bold'>
          <IoMdStar className="text-yellow-500" />
          4,6
        </div>
      </div>
      <div className="w-3/5 flex flex-col gap-8">
        {dummy.map(data => (
          <div key={data.name} className="flex w-full text-white items-center justify-between text-2xl font-bold">
            {data.name}
            <div className="h-2 bg-white w-[50%] rounded-md">
              <div className="h-2 bg-orange-500 rounded-md" style={{width: `${data.rate*2}%`}}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Ratings