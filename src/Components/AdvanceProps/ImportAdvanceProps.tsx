import React from 'react'
import Status from './Status'
import Heading from './Heading'
import Oscar from './Oscar'

export default function ImportAdvanceProps() {
  return (
    <div>
      <Status status='success' />
      <Heading>PlaceHoader Text as Heading</Heading>
      <Oscar>
        <Heading>Oscar Goes to leaonardo decaprio!</Heading>
      </Oscar>
    </div>
  )
}
