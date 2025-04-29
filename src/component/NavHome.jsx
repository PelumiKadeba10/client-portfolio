import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

function NavHome() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = ['/', 'About', 'Resume', 'Portfolio', 'Testimonials', 'Contact']

  return (
    <nav className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center pt-10">
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12">
          {navItems.map((item) => {
            const path = item === '/' ? '/' : `/${item.toLowerCase()}`
            const label = item === '/' ? 'Home' : item
            return (
              <Link
                key={item}
                to={path}
                className="hover:text-amber-300 transition duration-200"
              >
                {label}
              </Link>
            )
          })}

          </div>

          {/* Hamburger Button */}
          <div className="md:hidden absolute top-6 left-6">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={35} /> : <Menu size={35} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
          className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-40 transition-opacity duration-300 ${isOpen ? '' : 'opacity-0 pointer-events-none'}`}
        >
          <div className={`fixed grid grid-cols-1 left-0 top-0 h-full w-60 bg-amber-300 shadow-lg transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            {/* Close Button (X) */}
            <div className="p-4 text-xl font-bold text-gray-900">
              <button onClick={toggleMenu} className="text-gray-900 hover:bg-red-500 hover:text-white rounded">
                <X  size={28} />
              </button>
            </div>

            {/* Navigation Items */}
            <div className="flex flex-col space-y-6 px-4 py-8">
            {navItems.map((item) => {
              const path = item === '/' ? '/' : `/${item.toLowerCase()}`
              const label = item === '/' ? 'Home' : item
              return (
                <Link
                  key={item}
                  to={path}
                  className="hover:text-[#8D8D8D] transition duration-200 text-center"
                >
                  {label}
                </Link>
              )
            })}

            </div>
          </div>
        </div>
        )}
      </div>
    </nav>
  )
}

export default NavHome
