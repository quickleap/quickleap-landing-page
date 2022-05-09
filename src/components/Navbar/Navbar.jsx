import {useState} from 'react'
import Logo from '../../assets/logo.jpg'
import {
   GreenBtn,
   LogoWrapper,
   MobileMenu, 
   WhiteBtn
} from './NavbarStyles'
import {
   FaBars,
   FaTimes
} from 'react-icons/fa'

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false)

   function closeMenu () {
      setIsOpen(false)
   }

   function openMenu() {
      setIsOpen(true)
   }

   return (
      <div className='w-full h-[85px] relative'>
         <div className='w-full h-full mx-auto px-10 flex items-center justify-between relative'>
            <LogoWrapper className="flex items-center justify-center">
               <img src={Logo} alt="logo img" className="w-full"/>
            </LogoWrapper>
            {/* <div className="cursor-pointer text-green flex items-center justify-center lg:hidden">
               {
                  isOpen 
                     ? (<FaTimes fontFamily={25} onClick={closeMenu}/>)
                     : (<FaBars fontSize={25} onClick={openMenu}/>)
               }
            </div>
            <MobileMenu className="absolute top-[86px] right-0 w-full pt-10 justify-center hidden">
               <ul className="w-80 mx-auto text-left">
                  <li className="my-5 cursor-pointer text-2xl font-medium hover:text-green">About us</li>
                  <li className="my-5 cursor-pointer text-2xl font-medium hover:text-green">Market Place</li>
                  <li className="my-5 cursor-pointer text-2xl font-medium hover:text-green">Inventory Manager</li>
                  <li className="my-5 cursor-pointer text-2xl font-medium hover:text-green">Grow for life</li>
                  <li className="my-5 cursor-pointer text-2xl font-medium hover:text-green">Products</li>
                  <WhiteBtn className="my-5 cursor-pointer text-2xl font-medium">Sign In</WhiteBtn>
                  <GreenBtn className="my-5 cursor-pointer text-2xl font-medium">Create account</GreenBtn>
               </ul>
            </MobileMenu>
            <div className="hidden lg:flex">
               <div className="flex items-center">
                  <span className="font-semibold hover:text-green text-xl mr-[24px] cursor-pointer duration-100">About us</span>
                  <span className="font-semibold hover:text-green text-xl mr-[24px] cursor-pointer duration-100">Market place</span>
                  <span className="font-semibold hover:text-green text-xl  mr-[24px] cursor-pointer duration-100">Inventory manager</span>
                  <span className="font-semibold hover:text-green text-xl  mr-[24px] cursor-pointer duration-100">Grow for life</span>
                  <span className="font-semibold hover:text-green text-xl  mr-[24px] cursor-pointer duration-100">Products</span>
               </div>
               <div className="flex items-center">
                  <button className="mr-5 px-3 py-1 font-semibold text-xl text-green border-2 rounded-lg border-green hover:bg-green hover:text-white duration-100">Sign In</button>
                  <button className="mr-5 px-3 py-[5px] font-semibold text-xl bg-green/90 text-white hover:bg-green duration-100 rounded-lg">Create Account</button>
               </div>
            </div> */}
         </div>
      </div>
   )
}

export default Navbar