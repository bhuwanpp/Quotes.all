'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { getData } from "./Quotes";

export default function Main() {
    const [quotes,setQuotes] =useState<any[]>([])
    useEffect(() =>{
      const fetchData  = async() =>{
        const data  =  await getData()
        setQuotes(data)
      } 
      fetchData()
    },[])
  return (
   <main>
    <div className="all  grid gap-3 sm:px-12 px-3  w-52">
    <Link href="/create" className="bg-green-300 shadow-xl hover:bg-green-400 text-gray-800
    transition-all duration-500 w-32 px-3 py-2  rounded-lg">
        Create
    </Link>
    <br />
    <Link href="/yourQuotes" className="bg-blue-300 shadow-xl
     hover:bg-blue-400 text-gray-800  w-32 px-3 py-2  transition-all duration-500 rounded-lg">
        Your  quotes
    </Link>
    <br />
    <Link href="/allQuotes" className="bg-lime-200 hover:bg-lime-300 text-gray-800 w-32 px-3 py-2 rounded-lg shadow-xl transition-all duration-500">
        All quotes
    </Link>
    </div>

    {/* <Quotes/> */}
<div className="day text-center px-3 sm:px-10 pt-5">
    <h2 className="text-2xl text-indigo-400 ">Quotes of the Time </h2>
    <div className="div flex md:justify-center text-md  md:text-xl 
    justify-start items-center pt-8 px-3 sm:px-10 md:px-20">
  {quotes.length > 0 &&
      <p className="p-4 text-orange-500  bg-sky-50
      rounded-md shadow-md">
        {quotes[0].text}
        <p className="text-lime-700
        text-end pr-10"> - {quotes[0].author}</p>
          </p>
  }
    </div>

</div>
   </main>
  )
}
