import React from 'react'
import "./card.css"
const Card = (props) => {
  return (
    <div className='container'>
        <p id='name' >{props.name}</p>
        <img id='pic' src="https://www.bing.com/th/id/OIP.vt8xfGnfp82Wjl95fPk6xQHaNK?w=160&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="dhoni" />
        <p id='disc' >Desription of dhoni</p>
    </div>
  )
}

export default Card