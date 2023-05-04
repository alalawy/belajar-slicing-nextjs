import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <header className="fixed top-10 left-[90px] right-[90px] flex justify-between items-center">
    <div className="flex items-center">
      <Link href="/b">
        <img src="/images/logo.svg" className="h-[45px]" />
      </Link>
      <nav className="ml-[50px]">
        <ul className="flex space-x-[30px]">
          <li>
            <Link href="/">
              <p className="text-text-secondary">Featured</p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <p className="text-text-secondary">How it works</p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <p className="text-text-secondary">Pricing</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    <div>
      <ul className="flex">
        <li>
          <Link href="/">
            <p className="px-[32px] py-[12px] text-text-secondary">
              Contact us
            </p>
          </Link>
        </li>
        <li>
          <Link href="/">
            <p className="px-[32px] py-[12px] text-white bg-primary rounded-md">
              Join us
            </p>
          </Link>
        </li>
      </ul>
    </div>
  </header>
  )
}

export default Header