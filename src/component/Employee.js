import React from 'react'

 function Employee({firstName, lastName}) {
  return (
    <div>
      <h4> {`First Name: ${firstName}, Last Name: ${lastName}`} </h4>

    </div>
  )
}

export default Employee; 
