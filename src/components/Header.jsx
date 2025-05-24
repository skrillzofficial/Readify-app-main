import React, {useState} from 'react'
import {Menu, X} from "lucide-react"
import {Link} from 'react-router-dom'

const Header = () => {
  // create the navbar here
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='w-11/12 container mx-auto'>
      <nav className="bg-white z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to='/'>
          <h1 className="text-2xl font-semibold italic text-orange-300">Readify</h1>
          </Link>
          <div className="hidden md:flex gap-6 text items-center">
            <Link to="/aboutpage" className="text-orange-400 hover:text-orange-400" href="#">
              About
            </Link>
            <Link to="/contact" className="text-orange-400 hover:text-orange-400" href="#">
              Contact
            </Link>
            <Link to='/'>
            <button className="bg-orange-500 text-white px-6 py-1 rounded hover:bg-orange-300">
              LEND ONE
            </button>
            </Link>
            
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={34} /> : <Menu size={34} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden flex flex-col items-center gap-4 bg-white px-4 pb-4 space-y-2">
            <a className="text-orange-400 hover:text-orange-400" href="#">
              About
            </a>
            <a className="text-orange-400 hover:text-orange-400" href="#">
              Contact
            </a>
            <button className="bg-orange-500 text-white px-6 py-1 rounded hover:bg-orange-300 ease-in duration-200">
              LEND ONE
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
