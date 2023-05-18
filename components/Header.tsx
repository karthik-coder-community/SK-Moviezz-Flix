import Image from 'next/image'
import React from 'react'
import Logo from '../public/assets/Netflix_logo.svg'
import DP from '../public/assets/dp.png'

import { BellIcon, SearchIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import useAuth from '../hooks/useAuth'
import BasicMenu from './BasicMenu'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { logout} = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image
          src={Logo}
          width={200}
          height={200}
          className="cursor-pointer object-contain"
          alt=''
        />

       <BasicMenu />

        <ul className="hidden space-x-4 md:flex">
          <li className=" headerLink cursor-default font-semibold text-white hover:text-orange-600">
            Home
          </li>
          <li className="headerLink hover:text-orange-600">TV Shows</li>
          <li className="headerLink hover:text-orange-600">Movies</li>
          <li className="headerLink hover:text-orange-600">New & Popular</li>
          <li className="headerLink hover:text-orange-600">My List</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light ">
        <SearchIcon className="sm hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        {/* <Link /> */}
        <Link className='font-semibold text-orange-500' href="/plans">Subscribe</Link>
          <Image
          // onClick={logout}
            src={DP}
            alt=""
            className="cursor-pointer rounded"
          />
        {/* </Link> */}
      </div>
    </header>
  )
}

export default Header
