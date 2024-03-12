import React, { useCallback, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import "./Home.css"

function Home() {

    const [value, setValue] = useState()

    const navigate = useNavigate()

    const handle = useCallback(()=>{
        navigate(`/room/${value}`)
    }, [navigate, value])

  return (
    <>
    <div className="container">
    <input type="text" value={value} placeholder='Enter Room Code' onChange={(e)=> setValue(e.target.value)} />
<br />
    <button onClick={handle}>Join</button>
    </div>
    </>
  )
}

export default Home