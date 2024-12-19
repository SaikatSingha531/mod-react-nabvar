import React from 'react'
// import "./Navbar.css"

const Navbar = () => {
  return (
    <>
    <div className="container bg-purple-500 max-w-full h-11 flex items-center justify-between p-5">
        <div className="logo">
            Logo
        </div>

        <div className="search flex gap-3">
            <input type="text"/>
            <button>Search</button>
        </div>

        <div className="menu">
            <ul className='flex gap-3'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar