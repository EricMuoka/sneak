import { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import logo from '../../images/logo.png';

const NavbarItem = ({ tittle, classProps}) => {
    return (
        <li className={'mx-4 cursor-pointer ${classProps}'}>
            {tittle}
        </li>
    )
}
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    
    return (
        <nav className='w-full flex md:justify-center'>
            <div className='md:flex-[o.5] flex-initial justify-center items-center mx-8 my-4'>
                <img src={logo} alt="logo" className='w-32 cursor-pointer' />
            </div>
            <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial my-4 mx-16'>
                {['Market', 'Exchange', 'Tutorials', 'Wallets'].map((Item, index) => (
                    <NavbarItem key={ + index} tittle={Item}/>
                ))}
                <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>
                    Login
                </li>
            </ul>
            <div className='mx-16'>
                {toggleMenu
                  ? <AiOutlineClose fontSize={28}className='text-white md:hidden cursor-pointer my-4 mx-16' onClick={() => setToggleMenu(false)}/>
                  : <HiMenuAlt4 fontSize={28} className='text-white md:hidden cursor-pointer my-4 mx-16' onClick={() => setToggleMenu(true)}/>
                }
                {toggleMenu && (
                    <ul  
                      className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
                        flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in
                      '
                    >
                        <li className='text-xl w-full my-2 mx-16'>
                          <AiOutlineClose onClick={() => setToggleMenu(false)}/>
                        </li>
                        {['Market', 'Exchange', 'Tutorials', 'Wallets'].map((Item, index) => (
                           <NavbarItem key={ + index} tittle={Item} classProps='my-2 text-lg mx-16'/>
                      ))}
                    </ul>
                )}
            </div>
        </nav>
    );
}

export default Navbar;