import React, { useRef, useState } from 'react'

const RefHook = () => {
  const inputField= useRef()
  const [input, setInput]= useState()
  const data = useRef(0)
  let string = ''
  const [dummy , setDummy] = useState([])
  console.log("data", data.current);
  const handleClick= ()=>{
    // data.current = data.current +1
    // setDummy([])
    setInput('')
    inputField.current.style.border = '2px solid'

  }
  const handleChange= (e) =>{
    setInput(e.target.value)
  data.current = data.current +1
  }
  return (
    <div>
    <input value= {input}type="text" placeholder='type here' ref={inputField} onChange={handleChange} />
      <button className="bg-black text-white px-6 py-3" onClick={handleClick}>press</button>
      <h1>This change will not cause a re render:  {data.current}</h1>
      <h2>This will cause a re render: {input}</h2>
    </div>
  )
}

export default RefHook
