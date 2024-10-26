import React from 'react'
import { Link, NavLink } from 'react-router-dom'
 
  

const Header = () => {
  
  return (
    <header className="shadow sticky z-50 top-0">
    <nav className="bg-white border-gray-300 px-4 lg:px-6 py-2.5 text-black">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className="flex items-center">
                <div  className="mr-3 h-12 text-3xl font-bold"> PRA$HANT</div>
                  
            </Link>
            <div className="flex items-center lg:order-2">
                 
                <Link
                    to="/contact"
                    className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                    Hire Me
                </Link>
            </div>
            <div
                className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 "
                id="mobile-menu-2"
            >
                <ul className="flex  flex-col mt-3 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <Link to='/'
                             className={({isActive}) =>
                              `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-black"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                          }
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/services'
                             className={({isActive}) =>
                              `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-black"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                          }
                        >
                           Services
                        </Link>
                    </li>
                    <li>
                        <Link to='/about'
                             className={({isActive}) =>
                              `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-black"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                          }
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to='/contact'
                             className={({isActive}) =>
                              `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-black"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                          }
                        >
                            Contact
                        </Link>
                    </li>
                    
                    
                    
                </ul>
            </div>
        </div>
    </nav>
</header>
  )
}

export default Header