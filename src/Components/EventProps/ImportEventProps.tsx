import React from 'react'
import Button from './Button'
import { log } from 'console'
import Input from './Input';

export default function ImportEventProps() {
  return (
    <div>
      <Button handelClick={(event , id) => {
        console.log(`Button Clicked` , event , id); 
      }} />

      {/* Input component */}
      <Input Value='' handelChange={ event => console.log(event)
       } />
    </div>
  )
}
