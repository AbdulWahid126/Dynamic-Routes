import Link from 'next/link'
import { FaRoute } from "react-icons/fa6";

function Header() {
  return (
    <header>
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
            <FaRoute />
              <span className="ml-2 text-xl font-bold text-purple-800">DYNAMIC ROUTES</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
    </header>
  )
}

export default Header