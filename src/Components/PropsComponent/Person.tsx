import React from 'react'
type PersonProps = {
    name: {
        first: String,
        last: String
    }
}
export default function Person(props: PersonProps) {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  )
}
