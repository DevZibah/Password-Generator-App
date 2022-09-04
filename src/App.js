import { useState, useEffect, Fragment } from 'react'
import { FaRegCopy } from 'react-icons/fa'
import { BsArrowRightShort } from 'react-icons/bs'
import './input.css'
const App = () => {
  const [password, setPassword] = useState('P4$5WOrD!')
  const [copied, setCopied] = useState(false)
  const [length, setLength] = useState(0)
  const [uppercase, setUppercase] = useState(false)
  const [lowercase, setLowercase] = useState(false)
  const [number, setNumber] = useState(false)
  const [symbol, setSymbol] = useState(false)
  //This is an array containing numbers
  const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  //This is an array containing symbols
  const symbolArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']

  //this contains an array of alphabets codes
  const characterCodes = Array.from(Array(26)).map((_e, i) => i + 97)

  //this converts the charactercodes to lowercase
  const lowerCaseLetters = characterCodes.map((l) => String.fromCharCode(l))

  //this converts the lowercase characters to uppercase
  const upperCaseLetters = lowerCaseLetters.map((u) => u.toUpperCase())

  const generatePassword = () => {
    //if lowercase, uppercase... is true, the variable lowercase authomatically becomes an array of lowercase numbers
    const availableCharacters = [
      ...(lowercase ? lowerCaseLetters : []),
      ...(uppercase ? upperCaseLetters : []),
      ...(number ? numberArray : []),
      ...(symbol ? symbolArray : []),
    ]
    //This method generates randomly
    const shuffleArray = (array) => array.sort(() => Math.random() - 0.5)
    //thus function makes sure that the generated password length would be equal to the length we selected, then it the setPassword changes the value of the password variable.
    const characters = shuffleArray(availableCharacters).slice(0, length)
    setPassword(characters.join(''))
    //return character returns the generated password to the function generatePassword
    return characters
  }
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
                      ? 'hsl(150, 100%, 66%)'
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
                      ? 'hsl(150, 100%, 66%)'
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
                      ? 'hsl(150, 100%, 66%)'
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
                      ? 'hsl(150, 100%, 66%)'
                      : '',
                }}
              >
                4
              </p>
            </div>
          </section>
          <section
            className='mt-3 font-mono uppercase p-3 d-flex text-center sec-three font-semibold text-lg justify-center'
            onClick={generatePassword}
          >
            <p>generate</p>
            <BsArrowRightShort className='arroe' />
          </section>
        </main>
      </section>
    </div>
  )
}

export default App
