import React from 'react'
import Greet from './PropsComponent/Greet'

export default function ComponentImports() {
    const user = "vishwajit vm"
  return (
    <div>
      <Greet name={user} />
    </div>
  )
}
