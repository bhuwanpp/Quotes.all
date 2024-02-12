'use client'
import Link from "next/link"
import supabase from "../config/supabaseClient"

const QuotesCard = ({quotes,onDelete }:any) => {
  
  const handleDelete = async () => {
    const { data, error } = await supabase
      .from('Quotes')
      .delete()
      .eq('id', quotes.id)
      .select()
    
    if (error) {
      console.log(error)
    }
    if (data) {
      onDelete(quotes.id)
    }
  }

  return (
    <div  className=" flex px-3 sm:px-10 gap-3 sm:gap-4 items-center">
      <div className="your">
      <textarea readOnly className="bg-green-200 w-72 sm:w-[450px] md:w-[550px] outline-none text-xl h-28   px-2  m-2 rounded-md   ">{quotes.quotes}</textarea>
      </div>
      <div className="buttons">
        <Link href={"/yourQuotes/" + quotes.id} className=" pr-7 sm:pr-10 ">
          <i className="fa-solid fa-pen text-xl hover:scale-110 duration-500"></i>
        </Link>
        <button onClick={handleDelete} className="">
        <i className="fa-solid fa-trash text-xl hover:scale-110 duration-500"></i>
          
          </button>
      </div>
    </div>
  
  )
  }

export default QuotesCard