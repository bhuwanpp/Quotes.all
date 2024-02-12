'use client'

import {  useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import supabase from "@/app/config/supabaseClient"

export default function Update() {
  const first = useParams()
  const id =first.update;

    const router = useRouter()
  
    const [quotes, setQuotes] = useState('')
    const [formError, setFormError] = useState('')

    const handleSubmit = async(e:any) =>{
      e.preventDefault()

      if (!quotes) {
        setFormError('Please fill in all the fields correctly.')
        return
      }

      const {data,error} = await supabase
      .from('Quotes')
      .update({quotes})
      .eq('id',id)
      .select()

      if (error) {
        setFormError('Please fill in all the fields correctly.')
      }
      if (data) {
        router.push('/yourQuotes')
        setFormError('')
      }

    }
    useEffect(() => {
      const fetchQuotes = async () => {
          const { data, error } = await supabase
            .from('Quotes')
            .select()
            .eq('id', id)
            .single()
            
          if (error) {
            router.push('/yourQuotes')
            console.error('Error fetching data:', error.message);
          }
          if (data) {
           setQuotes(data.quotes)
          }
      };
      fetchQuotes();
    }, [id,router]); 
  

  return (
    <div className="page create px-3 sm:px-10">
      <h2 className="text-center text-teal-500 text-2xl pb-5">Quote.edit</h2>
      <form onSubmit={handleSubmit}>

        <label  className=" pl-1 text-lg pb-3 block">Edit your Quotes:</label>
        <textarea 
          id="title"
          value={quotes}
          onChange={(e) => setQuotes(e.target.value)} className="outline-none
          px-3  rounded-md border block h-32 w-96 py-2  text-xl text-gray-800 border-black"
          />

       
        <div className="button pl-20 pt-5">
        <button className="bg-indigo-500 text-white hover:bg-indigo-600 transition-all duration-500  rounded-md px-6 py-0 text-2xl">Update</button>
        </div>
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  )
}
