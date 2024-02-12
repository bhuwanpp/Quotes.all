'use client'

import { useEffect, useState } from "react"
import supabase from "../config/supabaseClient"
import QuotesCard from "../component/YourQuote"

export default function page() {
 
    const [fetchError, setFetchError] = useState('')
    const [quotes, setQuotes] = useState<any[]>([])

    const handleDeleteSmoothie = (id: any) => {
      setQuotes((prevSmoothies: any) => {
        return prevSmoothies.filter((sm: any) => sm.id !== id)
      }
      )
  
    }
    useEffect(() => {
        const fetchQuotes = async () => {
          const { data, error } = await supabase
            .from('Quotes')
            .select();
            
          if (error) {
            setFetchError('Could not fetch the quotes')
            setQuotes([])
          }
          if (data) {
            setQuotes(data)
            setFetchError('')
          }
        }
        fetchQuotes()
      }, [])
    
  return (
    <div className="">
        <h2 className="text-center text-teal-500  text-2xl pb-5 ">Quote.yourquote</h2>
        <p className="text-xl text-gray-700  pb-3 pl-12 ">Your own quotes</p>
        {fetchError && (<p>{fetchError}</p>)}
      {quotes && (
        <div className="smoothies">
          <div className="smoothie-grid">
            {quotes.map(quote=> (
           <QuotesCard Key ={quote.id} quotes={quote} onDelete={handleDeleteSmoothie}/>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}





