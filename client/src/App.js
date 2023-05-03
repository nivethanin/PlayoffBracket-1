import React, { useEffect, useState } from 'react'
// import { config } from './constants.js'


function App() {
  // var url = config.url.API_URL
  var url = "./api"
  const [backendData, setBackendData] = useState([{}])


  useEffect(() => {
    fetch(url).then(
      response => response.json()
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
      {/* <p> {url}</p> */}
      {/* <button onClick={apicall()}>apicall</button> */}
      <p>
        {backendData.users}
      </p>
      
    </div>
  )
}

export default App