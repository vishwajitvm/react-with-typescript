import React, { useState } from 'react'
type AuthUSer = {
    name: string,
    email: string   
}

export default function User() {
    const [user, setUser] = useState<AuthUSer | null>(null) ; //< > => defines user can be either authuser or null

    const handelLogin = () => {
        setUser ({
            name: "Vishwajit vm",
            email: "Vishwajitvm@gmail.com"
        })
    }

    const handelLogout = () => {
        setUser(null) ;
    }

  return (
    <div>
      <button onClick={handelLogin}>Login</button>
      <button onClick={handelLogout}>Logout</button>

      <div>
        <h2>
        User Name is {user ? user.name: "Undefined"} <br />
        User Email is {user? user.email: "Undefined"} <br />
            
        </h2>
      </div>
    </div>
  )
}
