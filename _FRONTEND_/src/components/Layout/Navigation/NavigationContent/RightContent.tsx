import React from 'react'
import NavIcon from './NavIcon'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { BiLogIn } from 'react-icons/bi'
import { BsCart2 } from 'react-icons/bs'

const RightContent = () => {
   return (
      <section className="right-content">

         <NavIcon content={ <BsCart2 /> } text='Cart' additionalNum={ 99 } />
         <NavIcon content={ <AiOutlineUserAdd /> } text='Register' />
         <NavIcon content={ <BiLogIn /> } text='Log in' />

      </section>
   )
}

export default RightContent