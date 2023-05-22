import React from 'react'
type personListPRops = {
    names: {
        id: number
        first: String,
        last: String
    }[]
}

export default function PersonLists(props:personListPRops) {
  return (
    <div>
      {props.names.map(name => {
        return (
            <h2 key={name.id}>
                 {name.first} |{name.last}
             </h2>
        )
      })}

    </div>
  )
}
