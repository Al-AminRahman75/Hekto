import React from 'react'
import Logo from "../assets/logo.png"


const Navbar = () => {
  return (
    <nav>
        <div className="container mx-auto">
            <div className="flex justify-between">
                <div className="">
                    <img src={Logo} alt="" />
                </div>
                <div className="">
                    <ul>
                        li*5
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
