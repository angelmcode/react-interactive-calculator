import React from 'react'
import '../stylesheets/button.css';

function Button({ children, manageClick }) {
  
  const isOperator = value => {
    return isNaN(value) && (value!=".") && (value!="=");
  };

  return (
      <div className={`button_container ${isOperator(children)?"operator":""}`.trimEnd()} onClick={ () => manageClick(children)}>
        {children}
      </div>
  )
}

export default Button