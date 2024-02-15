'use client'
import { useEffect, useState } from "react";
export async function getData(){
  const url = 'https://famous-quotes4.p.rapidapi.com/random?category=all&count=100';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '904eb19f61msh5f935a2fc165a03p1376fajsn18201a84ff5e',
		'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
  return result
} catch (error) {
	console.error(error);
}
}
export default function Quotes() {
  const [quotes,setQuotes] =useState<any[]>([])
  useEffect(() =>{
    const fetchData  = async() =>{
      const data  =  await getData()
      setQuotes(data)
    } 
    fetchData()
  },[])
  return (
    <div className=" px-3 md:px-10"> 
    <h1 className="text-center text-teal-500 text-2xl pb-3 ">Quote.allQuote</h1>
    <h2 className="text-center text-3xl py-3 text-indigo-400 ">Random Quotes</h2>
{quotes &&
  quotes.map((quote) =>
  <h2 key={quote.id}  className="pb-3">
    <p  className="bg-green-100 text-gray-800
      px-5 sm:px-10 md:px-20 py-3  m-2 rounded-md">{quote.text} - {quote.author}</p>
  </h2>
)}

    </div>
  )
}
