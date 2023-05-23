import React from 'react'
import Button from './Button'
import { log } from 'console'

export default function ImportEventProps() {
  return (
    <div>
      <Button handelClick={(event , id) => {
        console.log(`Button Clicked` , event , id); 
      }} />
    </div>
  )
}
