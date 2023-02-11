import axios from 'axios'
import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { Respons } from './Map'

export default function Card({el} : {el : Respons}) {
    const DelReq = (id: object) => {
        axios.delete(`http://localhost:5500/${id}`)
      }
  return (
    <div className="cards">
    <div className="card card-1">
      <div className="card__icon">
        {el.username}
      </div>
      <button className="card__exit" onClick={() => DelReq(el._id)}>
        <FaTrash color='red' />
      </button>
      <h2 className="card__title">{el.email}</h2>
     
      <p className="card__apply">
        <a className="card__link" href="/">{el.password}</a>
      </p>
    </div>
    </div>
  )
}
