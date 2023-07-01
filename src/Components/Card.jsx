import React from "react";
import { Link } from "react-router-dom";
import { ActionType, useGlobalContext } from "./utils/global.context";


const Card = ({ name, username, id }) => {
  
  const { state, dispatch } = useGlobalContext()

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    const cardData = {name, username, id}
    const existingData = state.favs.find((dentist) => dentist.id === cardData.id)
    if(!existingData) {
      dispatch({ type: ActionType.SetFav, payload: cardData })
      alert('Dentist added to favs')
    } else alert('Dentist already exists')
  }

  return (
    <div  className={`card ${state.theme}`} >
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      
      <Link to={`/detail/${id}`}>
        <img className="card-img" src="../../images/doctor.jpg" alt={name} />
        <h4>{name}</h4>
        <p>{username}</p>
      </Link>
      
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">Add fav</button>
      {/* 
        
      */}
    </div>
  );
};

export default Card;
