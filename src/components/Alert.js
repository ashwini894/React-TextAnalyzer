import React from 'react'

export default function Alert(props) {
  return (
    <div>
     {props.alert !== null && (
      <div className={`alert alert-${props.alert.type}`} role="alert">
       <strong>{props.alert.type}: </strong>{props.alert.message}!
       </div>
      )}
    </div>
  )
}
