import Image from "next/image"
import Link from "next/link"
import React from "react"

const navItems = [
  {
    label: "Preguntas",
    path: "/faq",
  },

]

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-3 sm:px-4 border-b-2 border-neutral-800 mb-10">
      <Link href="/" className="inline-flex gap-3">
        <Image width={30} height={30} src="/svg/sacra.jpg" />
        <h2 className="text-center text-2xl sm:3xl font-semibold text-[#333]">
          Sacra
        </h2>
      </Link>
      <nav>
        <ul className="flex gap-2 sm:gap-4">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link className="w-max block" href={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header