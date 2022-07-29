import React from 'react'

const Typography = ({
    type = 'body1'
}) => {
  return (
    <div className={`typography_${type}`}>Typography</div>
  )
}

export default Typography