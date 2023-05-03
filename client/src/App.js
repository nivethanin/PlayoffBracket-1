import React, { useEffect, useState } from 'react'
import { config } from './constants'

function App() {
  var url = config.url.API_URL
  const [backendData, setBackendData] = useState([])

  useEffect(() => {
    fetch(url).then(response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div>

      {(typeof backendData.users === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )}
      <p> {process.env.NODE_ENV}</p>
    </div>
  )
}

export default App