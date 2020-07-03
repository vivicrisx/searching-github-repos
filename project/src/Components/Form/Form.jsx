import React from 'react';


const Form = ({user, loading, error, buttonAction,changeUser}) => (
    <div className="form-area">
        <input 
            type="text"
            className="input-container"
            value={user}
            placeholder="Username"
            onChange={ e => changeUser(e.target.value)}  
        />
        <button className="search-button" onClick={buttonAction}>Buscar</button>

        <p className="error-warning">{error}</p>
  
    </div>
)

export default Form