import React from 'react'
import {Button, Navbar, TextInput} from 'flowbite-react'
import {Link} from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMoon} from 'react-icons/fa'

function Header() {
  return (
    <Navbar className='border-b-2 pb-2 mt-2 '>
      <Link to='/' className='self-center text-sm sm:text-xl  whitespace-nowrap font-semibold dark:text-white '>
        <span className='px-3 rounded-lg ml-1 py-1 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>{`Vikram's`} </span>
        Blog
      </Link>
      <form className='lg:mr-[50vw] left-10 '>
        <TextInput 
          type='text'
          placeholder='search...'
          
          className='hidden lg:inline lg:mb-3 ml-10 justify-between '
         
        />
      </form>
      <Button className='w-12 h-10 rounded-[50%] mr-8 lg:hidden ' color='gray' >
        <AiOutlineSearch className='self-center mt-3  '/>
      </Button>
      <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 hidden  sm:inline items-center rounded-[40%] ' color='gray'>
          <FaMoon className='self-center ml-4'/>
        </Button>
        <Link to='/signin'>
            <Button  className='px-3 py-0.3  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
              Sign In
            </Button>
        </Link>
      </div>

    </Navbar>
  )
}

export default Header
