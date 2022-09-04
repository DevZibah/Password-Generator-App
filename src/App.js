import { useState, useEffect, Fragment } from 'react'
import { FaRegCopy } from 'react-icons/fa'
import { BsArrowRightShort } from 'react-icons/bs'
import './input.css'
const App = () => {
  const [strength, setStrength] = useState('')
  const [password, setPassword] = useState('P4$5WOrD!')
  const [copied, setCopied] = useState(false)
  const [length, setLength] = useState(0)
  const [uppercase, setUppercase] = useState(false)
  const [lowercase, setLowercase] = useState(false)
  const [number, setNumber] = useState(false)
  const [symbol, setSymbol] = useState(false)

  return (
    <div className='App'>
      <section className='sec-one'>
        <h5 className='font-mono capitalize text-lg text-center'>
          password generator
        </h5>
        <header className='div-one d-flex mt-3 p-3'>
          <p className='font-semibold text-lg'>{password}</p>
          <div>
            {copied ? (
              'Copied!'
            ) : (
              <FaRegCopy
                className='icon mt-1'
                onClick={() => {
                  if (password.length > 0) {
                    navigator.clipboard.writeText(password)
                    setCopied(true)
                    setInterval(() => {
                      setCopied(false)
                    }, 3000)
                  }
                }}
              />
            )}
          </div>
        </header>
        <main className='mt-3 p-3 main-one'>
          <div className='d-flex justify-between'>
            <h5 className='font-mono'>character length</h5>
            <p>{length}</p>
          </div>
          <div className='mt-2 div-two'>
            <input
              type='range'
              min='0'
              max='20'
              value={length}
              onChange={(e) => setLength(e.target.valueAsNumber)}
              className='w-100 inpuut'
            />
          </div>
          <div className='mt-2 d-flex'>
            <input type='checkbox' onClick={() => setUppercase(!uppercase)} />
            <p className='capitalize font-mono ml-3'>
              include uppercase letters
            </p>
          </div>
          <div className='mt-2 d-flex'>
            <input type='checkbox' onClick={() => setLowercase(!lowercase)} />
            <p className='capitalize font-mono ml-3'>
              include lowercase letters
            </p>
          </div>
          <div className='mt-2 d-flex'>
            <input type='checkbox' onClick={() => setNumber(!number)} />
            <p className='capitalize font-mono ml-3'>include numbers</p>
          </div>
          <div className='mt-2 d-flex'>
            <input type='checkbox' onClick={() => setSymbol(!symbol)} />
            <p className='capitalize font-mono ml-3'>include symbols</p>
          </div>
          <section className='mt-3 font-mono d-flex justify-between p-3 sec-two'>
            <div>
              <p className='uppercase capa'>strength</p>
            </div>
            <div className='d-flex'>
              <p className='mr-2'>
                {(length > 0 &&
                  length <= 5 &&
                  uppercase === true &&
                  lowercase === false &&
                  number === false &&
                  symbol === false) ||
                (length > 0 &&
                  length <= 5 &&
                  uppercase === false &&
                  lowercase === true &&
                  number === false &&
                  symbol === false) ||
                (length > 0 &&
                  length <= 5 &&
                  uppercase === false &&
                  lowercase === false &&
                  number === true &&
                  symbol === false) ||
                (length > 0 &&
                  length <= 5 &&
                  uppercase === false &&
                  lowercase === false &&
                  number === false &&
                  symbol === true)
                  ? 'Too Weak!'
                  : (length > 0 &&
                      length <= 10 &&
                      uppercase === true &&
                      lowercase === true &&
                      number === false &&
                      symbol === false) ||
                    (length > 0 &&
                      length <= 10 &&
                      uppercase === false &&
                      lowercase === false &&
                      number === true &&
                      symbol === true) ||
                    (length > 0 &&
                      length <= 10 &&
                      uppercase === false &&
                      lowercase === true &&
                      number === true &&
                      symbol === false) ||
                    (length > 0 &&
                      length <= 10 &&
                      uppercase === true &&
                      lowercase === false &&
                      number === false &&
                      symbol === true) ||
                    (length > 0 &&
                      length <= 10 &&
                      uppercase === true &&
                      lowercase === false &&
                      number === true &&
                      symbol === false) ||
                    (length > 0 &&
                      length <= 10 &&
                      uppercase === false &&
                      lowercase === true &&
                      number === false &&
                      symbol === true)
                  ? 'weak'
                  : (length > 0 &&
                      uppercase === true &&
                      lowercase === true &&
                      number === true &&
                      symbol === false) ||
                    (length > 0 &&
                      uppercase === true &&
                      lowercase === true &&
                      number === false &&
                      symbol === true) ||
                    (length > 0 &&
                      uppercase === false &&
                      lowercase === true &&
                      number === true &&
                      symbol === true) ||
                    (length > 0 &&
                      uppercase === true &&
                      lowercase === false &&
                      number === true &&
                      symbol === true)
                  ? 'medium'
                  : length > 0 &&
                    uppercase === true &&
                    lowercase === true &&
                    number === true &&
                    symbol === true
                  ? 'strong'
                  : ''}
              </p>
              <p
                className='border'
                style={{
                  backgroundColor:
                    (length > 0 &&
                      length <= 5 &&
                      uppercase === true &&
                      lowercase === false &&
                      number === false &&
                      symbol === false) ||
                    (length > 0 &&
                      length <= 5 &&
                      uppercase === false &&
                      lowercase === true &&
                      number === false &&
                      symbol === false) ||
                    (length > 0 &&
                      length <= 5 &&
                      uppercase === false &&
                      lowercase === false &&
                      number === true &&
                      symbol === false) ||
                    (length > 0 &&
                      length <= 5 &&
                      uppercase === false &&
                      lowercase === false &&
                      number === false &&
                      symbol === true)
                      ? 'red'
                      : (length > 0 &&
                          length <= 10 &&
                          uppercase === true &&
                          lowercase === true &&
                          number === false &&
                          symbol === false) ||
                        (length > 0 &&
                          length <= 10 &&
                          uppercase === false &&
                          lowercase === false &&
                          number === true &&
                          symbol === true) ||
                        (length > 0 &&
                          length <= 10 &&
                          uppercase === false &&
                          lowercase === true &&
                          number === true &&
                          symbol === false) ||
                        (length > 0 &&
                          length <= 10 &&
                          uppercase === true &&
                          lowercase === false &&
                          number === false &&
                          symbol === true) ||
                        (length > 0 &&
                          length <= 10 &&
                          uppercase === true &&
                          lowercase === false &&
                          number === true &&
                          symbol === false) ||
                        (length > 0 &&
                          length <= 10 &&
                          uppercase === false &&
                          lowercase === true &&
                          number === false &&
                          symbol === true)
                      ? 'orange'
                      : (length > 0 &&
                          uppercase === true &&
                          lowercase === true &&
                          number === true &&
                          symbol === false) ||
                        (length > 0 &&
                          uppercase === true &&
                          lowercase === true &&
                          number === false &&
                          symbol === true) ||
                        (length > 0 &&
                          uppercase === false &&
                          lowercase === true &&
                          number === true &&
                          symbol === true) ||
                        (length > 0 &&
                          uppercase === true &&
                          lowercase === false &&
                          number === true &&
                          symbol === true)
                      ? 'yellow'
                      : length > 0 &&
                        uppercase === true &&
                        lowercase === true &&
                        number === true &&
                        symbol === true
                      ? 'green'
                      : '',
                }}
              >
                1
              </p>
              <p
                className='border ml-1'
                style={{
                  backgroundColor:
                    (length > 0 &&
                      length <= 10 &&
                      uppercase === true &&
                      lowercase === true &&
                      number === false &&
                      symbol === false) ||
                    (length > 0 &&
                      length <= 10 &&
                      uppercase === false &&
                      lowercase === false &&
                      number === true &&
                      symbol === true) ||
                    (length > 0 &&
                      length <= 10 &&
                      uppercase === false &&
                      lowercase === true &&
                      number === true &&
                      symbol === false) ||
                    (length > 0 &&
                      length <= 10 &&
                      uppercase === true &&
                      lowercase === false &&
                      number === false &&
                      symbol === true) ||
                    (length > 0 &&
                      length <= 10 &&
                      uppercase === true &&
                      lowercase === false &&
                      number === true &&
                      symbol === false) ||
                    (length > 0 &&
                      length <= 10 &&
                      uppercase === false &&
                      lowercase === true &&
                      number === false &&
                      symbol === true)
                      ? 'orange'
                      : (length > 0 &&
                          uppercase === true &&
                          lowercase === true &&
                          number === true &&
                          symbol === false) ||
                        (length > 0 &&
                          uppercase === true &&
                          lowercase === true &&
                          number === false &&
                          symbol === true) ||
                        (length > 0 &&
                          uppercase === false &&
                          lowercase === true &&
                          number === true &&
                          symbol === true) ||
                        (length > 0 &&
                          uppercase === true &&
                          lowercase === false &&
                          number === true &&
                          symbol === true)
                      ? 'yellow'
                      : length > 0 &&
                        uppercase === true &&
                        lowercase === true &&
                        number === true &&
                        symbol === true
                      ? 'green'
                      : '',
                }}
              >
                2
              </p>
              <p
                className='border ml-1'
                style={{
                  backgroundColor:
                    (length > 0 &&
                      uppercase === true &&
                      lowercase === true &&
                      number === true &&
                      symbol === false) ||
                    (length > 0 &&
                      uppercase === true &&
                      lowercase === true &&
                      number === false &&
                      symbol === true) ||
                    (length > 0 &&
                      uppercase === false &&
                      lowercase === true &&
                      number === true &&
                      symbol === true) ||
                    (length > 0 &&
                      uppercase === true &&
                      lowercase === false &&
                      number === true &&
                      symbol === true)
                      ? 'yellow'
                      : length > 0 &&
                        uppercase === true &&
                        lowercase === true &&
                        number === true &&
                        symbol === true
                      ? 'green'
                      : '',
                }}
              >
                3
              </p>
              <p
                className='border ml-1'
                style={{
                  backgroundColor:
                    length > 0 &&
                    uppercase === true &&
                    lowercase === true &&
                    number === true &&
                    symbol === true
                      ? 'green'
                      : '',
                }}
              >
                4
              </p>
            </div>
          </section>
          <section className='mt-3 font-mono uppercase p-3 d-flex text-center sec-three font-semibold text-lg justify-center'>
            <p>generate</p>
            <BsArrowRightShort className='arroe' />
          </section>
        </main>
      </section>
    </div>
  )
}

export default App
