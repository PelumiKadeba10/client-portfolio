import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

function NavHome() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = ['Home', 'About', 'Resume', 'Portfolio', 'Testimonials', 'Contact']

  return (
    <nav className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center pt-10">
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="hover:text-amber-300 transition duration-300"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Hamburger Button */}
          <div className="md:hidden absolute right-0 pr-15">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
          className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <div className={`fixed grid grid-cols-1 left-0 top-0 h-full w-60 bg-amber-300 shadow-lg transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            {/* Close Button (X) */}
            <div className="p-4 text-xl font-bold text-gray-900 flex justify-between items-center">
              <div>TimDesigns</div>
              <button onClick={toggleMenu} className="text-gray-900">
                <X className='hover:bg-red-500' size={28} />
              </button>
            </div>

            {/* Navigation Items */}
            <div className="flex flex-col space-y-6 px-4 py-8">
              {navItems.map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="text-lg text-center text-gray-700 hover:text-white hover: transition duration-300"
                  onClick={() => setIsOpen(false)} // Close menu on item click
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
        )}
      </div>
    </nav>
  )
}

export default NavHome
