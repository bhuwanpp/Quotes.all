'use client'

import { useState } from "react"
import supabase from "../config/supabaseClient"
import { useRouter } from "next/navigation"

export default function page() {
  const [formError, setFormError] = useState('')
  const [quotes, setQuotes] = useState<any>('')
  const  router = useRouter()

      const handleSubmit= async (e:any) => {
        e.preventDefault()
        if (!quotes) {
          setFormError('You have to write something  in order to save ')
          return
        }

        const { data, error } = await supabase
          .from('Quotes')
          .insert([{quotes}])
          .select()

        if (error) {
          setFormError('Please fill in all the fields correctly.')
          console.log('error to create ')
        }
        if (data) {
          setFormError('')
          router.push('/')
        }
        }
  return (
    <div className=" px-3 sm:px-20 ">
      <h2 className="text-center text-teal-500 text-2xl pb-5">Quotes.create</h2>
      <form onSubmit={handleSubmit} className=" " >
        <div className="text pb-5 ">
          <label className="text-xl text-gray-800 pl-5 block pb-3 "> Write Your Quotes</label>
        <textarea
        value={quotes}
        onChange={(e) =>setQuotes(e.target.value)}
        placeholder="write here"
        className="border outline-none rounded-md p-2 text-lg border-black w-96 h-24  " />
        </div>
          <div className="button pl-32">
        <button className="bg-red-500 text-white hover:bg-red-600 transition-all duration-500  rounded-md px-6 py-0 text-2xl">Save</button>
          </div>
      </form>
          {formError && (<p className="pt-5 text-xl text-red-400">{formError}</p>)}
    </div>
  )

}
