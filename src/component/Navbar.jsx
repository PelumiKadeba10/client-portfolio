import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = ['Home', 'About', 'Resume', 'Portfolio', 'Testimonials', 'Contact']

  return (
    <nav className="">
      <div className="z-50">
        {/* Hamburger Button (for mobile) */}
        <div className="md:hidden absolute right-0 top-4 pr-10">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          
        </div>

        {/* Side Navigation (for mobile and desktop) */}
        <div
          className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <div className={`fixed grid grid-cols-1 left-0 top-0 h-full w-60 bg-amber-300 shadow-lg transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            {/* Close Button (X) */}
            <div className="p-4 text-xl font-bold text-gray-900 flex justify-between items-center">
            <button onClick={toggleMenu} className="text-gray-900 hover:bg-red-500 hover:text-white rounded">
                <X  size={28} />
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

        {/* Desktop Menu */}
        <div className="hidden md:grid gap-2 left-0 top-0 min-h-screen w-52 bg-amber-300 shadow-lg z-30">
          
          {/* Navigation Items */}
          <div className="flex flex-col space-y-6 justify-center text-center px-4 py-8">
            {navItems.map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="text-lg text-gray-700 hover:text-white transition duration-300"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
