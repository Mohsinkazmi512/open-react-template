import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
            <Link href="/" className="block" aria-label="Spark AI">
              <img src="/images/features-03-image-01.png" alt="Your Logo" width={50} height={50} className="w-25 h-25 " />
            </Link>
          </div>
              <div className="text-gray-400">Spark Ai (SAI) is a Student Learning Enhancement (SLE) TOOL.</div>
            </div>

            {/* 2nd, 3rd and 4th blocks for Website */}
<div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">

{/* 2nd block for Website */}
{/* Updated "Services" block with new features */}
<div className="text-sm">
  <h6 className="text-gray-200 font-medium mb-1">Services</h6>
  <ul>
  <li className="mb-1">
      <Link href="/" className="text-gray-400 hover:text-purple-600 transition duration-150 ease-in-out">Free Training</Link>
    </li>
    <li className="mb-1">
      <Link href="/" className="text-gray-400 hover:text-purple-600 transition duration-150 ease-in-out">Focused Customization</Link>
    </li>
    <li className="mb-1">
      <Link href="/" className="text-gray-400 hover:text-purple-600 transition duration-150 ease-in-out">Institutional Accommodation</Link>
    </li>
    <li className="mb-1">
      <Link href="/" className="text-gray-400 hover:text-purple-600 transition duration-150 ease-in-out">Free App Upgradation</Link>
    </li>
    <li className="mb-1">
      <Link href="/" className="text-gray-400 hover:text-purple-600 transition duration-150 ease-in-out">Free Regular Maintenance</Link>
    </li>
    
  </ul>
</div>


{/* 3rd block for Website */}
<div className="text-sm">
  <h6 className="text-gray-200 font-medium mb-1">Resources</h6>
  <ul>
    <li className="mb-1">
      <Link href="/" className="text-gray-400 hover:text-purple-600 transition duration-150 ease-in-out">Explore our Blog</Link>
    </li>
    <li className="mb-1">
      <Link href="/" className="text-gray-400 hover:text-purple-600 transition duration-150 ease-in-out">Latest News</Link>
    </li>
  </ul>
</div>

{/* 4th block for Website */}
<div className="text-sm">
  <h6 className="text-gray-200 font-medium mb-1">Company</h6>
  <ul>
    <li className="mb-1">
      <Link href="/" className="text-gray-400 hover:text-purple-600 transition duration-150 ease-in-out">Contact</Link>
    </li>
    <li className="mb-1">
      <Link href="/" className="text-gray-400 hover:text-purple-600 transition duration-150 ease-in-out">FAQs</Link>
    </li>
    <li className="mb-1">
      <Link href="/" className="text-gray-400 hover:text-purple-600 transition duration-150 ease-in-out">Customer Support</Link>
    </li>
  </ul>
</div>


</div>


          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">

            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            
              <li>
                <Link href="https://twitter.com/sparkai_sle?t=r2_oWRp-FvAXlAZl7xdQGA&s=08" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Twitter">
                  <svg className="w-12 h-12 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                  </svg>
                </Link>
              </li>
              
              {/* <li className="ml-4">
  <Link href="https://www.youtube.com/channel/UCEJIF1imv8HTgIm_k1H3F6w" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover-bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="YouTube">
    <svg className="w-12 h-12 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    </svg>
  </Link>
</li> */}
              {/* <li className="ml-4">
                <Link href="/" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Github">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                  </svg>
                </Link>
              </li> */}
              <li className="ml-4">
                <Link href="https://www.facebook.com/profile.php?id=61550818293730&mibextid=ZbWKwL" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Facebook">
                  <svg className="w-12 h-12 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link href="https://instagram.com/sparkai.sle?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D " className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Instagram">
                  <svg className="w-12 h-12 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                  </svg>
                </Link>
              </li>
              {/* <li className="ml-4">
                <Link href="/" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Linkedin">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                  </svg>
                </Link>
              </li> */}
            </ul>

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">&copy; sparkai.online All rights reserved.</div>

          </div>

        </div>
      </div>
    </footer>
  )
}
