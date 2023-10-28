import Link from 'next/link'
import MobileMenu from './mobile-menu'
import FeatImage01 from '@/public/images/features-03-image-01.png'; // Import your custom logo image


export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Spark AI">
              <img src="/images/features-03-image-01.png" alt="Your Logo" width={300} height={300} className="w-20 h-20 " />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/"
                  className="font-medium text-white hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                Home
                </Link>
              </li>
              <li>
                <Link href="/aboutus" className="font-medium text-gold hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  About
                  </Link>
              </li>
              <li>
                <Link 
                href="/contactus" className="font-medium text-white hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  Contact
                  </Link>
              </li>
              <li>
                <Link 
                href="/privacypolicy" className="font-medium text-white hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
