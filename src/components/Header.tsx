import {useState} from 'react'
import { FaBars } from "react-icons/fa6";
import Logo from "../assets/csed.png";
import ss9 from "../assets/final.svg";

const Header = () => {

    const[menuOpen,setMenuOpen]=useState(false);

    const toggle=()=>{
        setMenuOpen(!menuOpen);
    }

  return (
    <>
    <div className='relative overflow-x-hidden' id='home'>
        
        <nav className='flex justify-between md:pt-4 w-[92%]  mx-auto' >
        <img src={Logo} alt='Logo' className='w-[30%] h-auto object-contain'></img>
        <div className='text-white text-[2rem] m-4'>
            {/* <ul className='flex justify-around gap-24 md:flex-row flex-col'> */}

            <div className='md:hidden h-5 w-5' onClick={toggle}>
                <FaBars/>
            </div>

            <ul className='hidden md:flex space-x-24 font-Goldman'>
                <li>
                    <a href='#timeline' className='hover:text-primary duration-300'>TIMELINE</a>
                </li>
                <li>
                    <a href='#tracks'  className='hover:text-primary duration-300'>TRACKS</a>
                </li>
                <li>
                    <a href='#faq'  className='hover:text-primary duration-300'>FAQ</a>
                </li>
            </ul>
        </div>

        {menuOpen && (
  <ul
    className='absolute right-0  bg-gradient-to-r from-transparent from-40% to-secondary  text-white w-full top-16 animate-slide-down md:hidden backdrop-blur-lg'
    style={{ zIndex: 1000 }}
  >
    <li>
      <a href='#timeline' className='block text-right p-4 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500 transition-colors font-Goldman'>TIMELINE</a>
    </li>
    <li>
      <a href='#tracks' className='block text-right p-4 hover:bg-primary transition-colors font-Goldman'>TRACKS</a>
    </li>
    <li>
      <a href='#faq' className='block text-right p-4 hover:bg-primary transition-colors font-Goldman'>FAQ</a>
    </li>
  </ul>
)}

        </nav>
        <img src={ss9} alt='Startup Street 9.0' className='mt-12 px-6 mx-auto w-100% h-auto object-contain'></img>
        <div className='h-[6rem] w-[6rem] md:h-[20rem] md:w-[20rem] bg-primary rounded-full  absolute -top-24 -right-6 blur-[100rem] -z-10'></div>
        
    </div>
    </>
  )
}

export default Header