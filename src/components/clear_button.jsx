import React from 'react'
import '../stylesheets/clear_button.css';

function ClearButton({ children, manageClear }) {

  return (
      <div className="button_clear" onClick={manageClear}>
        {children}
      </div>
  )
}

export default ClearButton