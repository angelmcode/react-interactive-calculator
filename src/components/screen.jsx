import React from 'react'
import '../stylesheets/screen.css';

function Screen({ input }) {

  return (
      <div className={`screen_container ${input=="Enter a valid operation"?"enter_operation":""}`}>
        {input}
      </div>
  )
}

export default Screen