import { useState, useEffect, Fragment } from 'react'
import { FaRegCopy } from 'react-icons/fa'
import { BsArrowRightShort } from 'react-icons/bs'
import './input.css'
const App = () => {
  return (
    <div className='App'>
      <section className='sec-one'>
        <h5 className='font-mono capitalize text-lg text-center'>
          password generator
        </h5>
        <header className='div-one d-flex mt-3 p-3'>
          <p className='font-semibold text-lg'>P4$5WOrD!</p>
          <FaRegCopy className='icon mt-1' />
        </header>
        <main className='mt-3 p-3 main-one'>
          <div className='d-flex justify-between'>
            <h5 className='font-mono'>character length</h5>
            <p>0</p>
          </div>
          <div className='mt-2 div-two'>
            <input type='range' min='1' max='10' className='w-100 inpuut' />
          </div>
          <div className='mt-2 d-flex'>
            <input type='checkbox' />
            <p className='capitalize font-mono ml-3'>
              include uppercase letters
            </p>
          </div>
          <div className='mt-2 d-flex'>
            <input type='checkbox' />
            <p className='capitalize font-mono ml-3'>
              include lowercase letters
            </p>
          </div>
          <div className='mt-2 d-flex'>
            <input type='checkbox' />
            <p className='capitalize font-mono ml-3'>include numbers</p>
          </div>
          <div className='mt-2 d-flex'>
            <input type='checkbox' />
            <p className='capitalize font-mono ml-3'>include symbols</p>
          </div>
          <section className='mt-3 font-mono d-flex justify-between p-3 sec-two'>
            <div>
              <p className='uppercase capa'>strength</p>
            </div>
            <div className='d-flex'>
              <p className='border'>1</p>
              <p className='border ml-1'>2</p>
              <p className='border ml-1'>3</p>
              <p className='border ml-1'>4</p>
            </div>
          </section>
          <section className='mt-3 font-mono uppercase p-3 d-flex text-center sec-three font-semibold text-lg justify-center'>
            <p>generate</p>
            <BsArrowRightShort className='arroe'/>
          </section>
        </main>
      </section>
    </div>
  )
}

export default App
