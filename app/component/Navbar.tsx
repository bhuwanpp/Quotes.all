import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  const logo = '/logo.png'
  return (
    <main className="sm:px-12 w-40 px-4 pt-5">
            <Link href='/' className="relative group transition-all duration-500 ">
        <Image src={logo} width={60}  height={10} alt="image"
         className="rounded-md h-14  "/>
         <p className=" hidden group-hover:hidden  lg:group-hover:inline pt-2 absolute pointer-events-none
          top-16 left-10  text-sm text-gray-700 ">Home</p>
         </Link>
    </main>
  )
}
