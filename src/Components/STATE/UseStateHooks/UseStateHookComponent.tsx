import React, { useState } from 'react'

export default function UseStateHookComponent() {
    const [isLoggedIn , setIsLoggedIn] = useState(false) ;

    const handelLogin = () => {
        setIsLoggedIn(true) ;
    }

    const handelLogout = () => {
        setIsLoggedIn(false) ;
    }
  return (
    <div>
      <button onClick={handelLogin}>Login</button>
      <button onClick={handelLogout}>Logout</button>

      <div>
        <h2>
            User is {isLoggedIn ? "Logged in" : "Loged Out"}
        </h2>
      </div>
    </div>
  )
}
