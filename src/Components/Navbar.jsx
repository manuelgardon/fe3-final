import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext, ActionType } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { state, dispatch } = useGlobalContext()

  const handleClick = () => {
    (state.theme === "light") 
    ? dispatch({ type: ActionType.SetTheme, payload: "dark" }) 
    : dispatch({ type: ActionType.SetTheme, payload: "light" }) 
  }

  return (
    <nav className={state.theme}>
      <Link to='/'>Home</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/favs'>Favs</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={handleClick} style={{borderRadius: 10}}>
        Change theme
      </button>
    </nav>
  )
}

export default Navbar