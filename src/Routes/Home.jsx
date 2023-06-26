import React, { useEffect, useState } from 'react'
import Card from '../Components/Card' 
import axios from 'axios'
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [dentists, setDentists] = useState([{}])

  const url = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    axios(url)
    .then((res) => setDentists(res.data))
  }, [])

  console.log(dentists);

  return (
    <main className="home" >
      <h1>Home</h1>
      <div className='card-grid'>
        {dentists.map((dentist) => 
          <Link key={dentist.id} to={`/detail/${dentist.id}`}>
            <div className='card'>
              <img className='card' src="../../images/doctor.jpg" alt={dentist.name} />
              <h3>{dentist.name}</h3>
              <p>{dentist.username}</p>
              <img className='favButton' src="../../favicon.ico" />
            </div>
          </Link>
        )}
      </div>
    </main>
  )
}

export default Home