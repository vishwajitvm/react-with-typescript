import React from 'react'
type ButtonProps = {
    // handelClick: () => void
    handelClick: (event: React.MouseEvent<HTMLButtonElement> , id: number) => void

}

export default function Button(props:ButtonProps) {
  return (
    <div>
      <button onClick={event => props.handelClick(event , 1)} >Click</button>
    </div>
  )
}
