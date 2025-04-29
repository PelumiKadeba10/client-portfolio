import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = ['/', 'About', 'Resume', 'Portfolio', 'Testimonials', 'Contact']

  return (
    <>
    {/* Hamburger Button (for mobile) */}
    <div className="md:hidden flex justify-end z-50 absolute top-6 left-6">
        <button
          onClick={toggleMenu}
          className="text-gray-700 focus:outline-none"
        >
          {isOpen ?  null : <Menu size={35} />}
        </button>
    </div>

    <nav className=" fixed z-60 h-full"> 
      <div className="">


        {/* Side Navigation (for mobile and desktop) */}
        <div
          className={`inset- bg-gray-900 bg-opacity-50 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <div className={`fixed grid grid-cols-1 left-0 top-0 min-h-screen w-60 bg-amber-300 shadow-lg transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            {/* Close Button (X) */}
            <div className="p-4 text-xl font-bold text-gray-900 flex justify-between items-center">
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
                  className="hover:text-[#8d8d8d] transition duration-300 text-center"
                >
                  {label}
                </Link>
              )
            })}

            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:grid gap-2 left-0 top-0 min-h-screen w-52 bg-amber-300 shadow-lg z-30">
          
          {/* Navigation Items */}
          <div className="flex flex-col space-y-6 justify-center text-center px-4 py-8">
          {navItems.map((item) => {
              const path = item === '/' ? '/' : `/${item.toLowerCase()}`
              const label = item === '/' ? 'Home' : item
              return (
                <Link
                  key={item}
                  to={path}
                  className="hover:text-[#8d8d8d] transition duration-200"
                >
                  {label}
                </Link>
              )
            })}

          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar
