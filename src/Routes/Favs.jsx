import React, { useEffect } from "react";
import Card from "../Components/Card";
import { useGlobalContext } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {state} = useGlobalContext()

  // useEffect(() => {}, [])

  return (
    <div>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {state.favs.map((fav) => <Card key={fav.id} name={fav.name} username={fav.username} id={fav.id}/>)}
      </div>
    </div>
  );
};

export default Favs;
