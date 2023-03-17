import { useState } from "react"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

const Pagination = ({page, setPage}) => {
  var pageView = [];
  const totalPage = 2;

  //page logic
  // if (page < 4) {
  //   for (let i = 1; i <= 5; i++) {
  //     pageView.push(i)
  //   }
  // } else {
  //   if (page + 2 >= totalPage) {
  //     for (let i = (totalPage - 4); i <= totalPage; i++) {
  //       pageView.push(i)
  //     }
  //   } else {
  //     for (let i = page - 2; i <= page + 2; i++) {
  //       pageView.push(i)
  //     }
  //   }
  // }

  for(let i = 1; i <= totalPage; i++){
    pageView.push(i)
  }

  function handlePrev() {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  function handleNext() {
    setPage(page + 1)
  }

  return (
    <div className="flex items-center justify-center mt-8 gap-2">
      <button onClick={handlePrev} disabled={page > 1 ? false : true} className={`h-8 w-8 flex items-center justify-center rounded ${page > 1 ? "border-primary-color border-[1px] text-white hover:bg-primary-color" : "bg-gray-500 text-gray-400"}`}><IoIosArrowBack /></button>
      {pageView.map(pageNum => <div onClick={() => setPage(pageNum)} key={"page" + pageNum} className={`h-8 w-8 ${pageNum === page ? "border-orange-500 text-orange-500" : "border-primary-color text-primary-color hover:bg-primary-color hover:text-dark"} border-[1px] flex items-center justify-center rounded cursor-pointer`}>{pageNum}</div>)}
      <button onClick={handleNext} disabled={page < totalPage ? false : true} className={`h-8 w-8 flex items-center justify-center rounded ${page < totalPage ? "border-primary-color border-[1px] text-white hover:bg-primary-color" : "bg-gray-500 text-gray-400"}`}><IoIosArrowForward /></button>
    </div>
  )
}

export default Pagination