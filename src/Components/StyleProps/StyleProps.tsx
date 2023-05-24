import React from 'react'
type StylePropsData = {
    styles: React.CSSProperties
}

export default function StyleProps(props: StylePropsData) {
  return (
    <div style={props.styles}>
      Hello world
    </div>
  )
}
