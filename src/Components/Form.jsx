import React, { useState } from "react";
import { ActionType, useGlobalContext } from "./utils/global.context";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const {state, dispatch} = useGlobalContext();
  const [error, setError] = useState(false)
  const [nameSuccess, setNameSuccess] = useState(false)
  const [emailSuccess, setEmailSuccess] = useState(false)
  const [messageSuccess, setMessageSuccess] = useState(false)

  const onChangeName = (e) => {
    if (e.target.value.length > 5) {
      setNameSuccess(true)
      setError(false)
      dispatch({ type: ActionType.SetUserName, payload: e.target.value })
    } else {
      setError(true)
      setNameSuccess(false)
      setMessageSuccess(false)
    }
  }

  const onChangeEmail = (e) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const check = (emailRegex.test(e.target.value))
    if(check) {
      setEmailSuccess(true)
      setError(false)
      dispatch({ type: ActionType.SetUserEmail, payload: e.target.value })
    } else {
      setError(true)
      setEmailSuccess(false)
      setMessageSuccess(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameSuccess && emailSuccess) {
      setMessageSuccess(true)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          onBlur={onChangeName}
        />
        <input 
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onBlur={onChangeEmail}
        />
        <button>Submit</button>
      </form>
      {error && <div style={{color:'red', textAlign:'center'}}>Por favor verifique su información nuevamente</div>}
      {messageSuccess && <div style={{textAlign:'center'}}>Gracias {state.user.name}, te contactaremos cuanto antes vía mail</div>}
    </div>
  );
};

export default Form;
