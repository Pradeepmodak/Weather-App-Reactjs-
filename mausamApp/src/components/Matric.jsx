import React from 'react'

function Matric({image,value,title}) {
  return (
    <section style={{ border: '0.2px solid black' , padding: '10px' , width: '8rem'}}>
    <img height={30} width={30} src={image} />
    <p> {value} </p>
    <h2>{title}</h2>
  </section>
  )
}

export default Matric