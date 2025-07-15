import React from 'react'

const Card = ({ children, bg = 'bg-gray-100' }) => {
  return (
    /* Dynamic classes, we set a bg color grey as default*/
    <div className={`${bg} p-6 rounded-lg shadow-md`}>
        {children}
    </div>
  )
}

export default Card