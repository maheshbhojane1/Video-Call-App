import React, { useCallback, useState } from 'react'
import {useNavigate} from 'react-router-dom'

function Home() {

    const [value, setValue] = useState()

    const navigate = useNavigate()

    const handle = useCallback(()=>{
        navigate(`/room/${value}`)
    }, [navigate, value])

  return (
    <>
    <input type="text" value={value} placeholder='Enter Room Code' onChange={(e)=> setValue(e.target.value)} />

    <button onClick={handle}>Join</button>
    </>
  )
}

export default Home