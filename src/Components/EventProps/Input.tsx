import React from 'react'
type InputProps = {
    Value: string,
    handelChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input(props:InputProps) {
    const handelInputFunction = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
        
    }
  return (
    <div>
      {/* <input type="text" value={props.Value} onChange={props.handelChange}  /> */}
      <input type="text" value={props.Value} onChange={handelInputFunction}  />
    </div>
  )
}
