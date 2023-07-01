import React, { useEffect, useState } from 'react'
import { useGlobalContext, url } from '../Components/utils/global.context'
import { useParams } from 'react-router-dom';
import axios from 'axios';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  const params = useParams()
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const [dentist, setDentist] = useState({})
  const dentistUrl = `${url}/${params.id}`

  useEffect(() => {
    axios(dentistUrl)
    .then((res) => setDentist(res.data))
  }, [])

  return (
    <div >
      <h1>Detail Dentist ID #{dentist.id}</h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <table>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Website</th>
          </tr>
        </thead>
        <thead> 
          <tr>
            <td>{dentist.name}</td>
            <td><a href={dentist.email}>{dentist.email}</a></td>
            <td>{dentist.phone}</td>
            <td><a href={dentist.website}>{dentist.website}</a></td>
          </tr>
        </thead>
      </table>
    </div>
  )
}

export default Detail