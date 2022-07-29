import React from 'react'

const Typography = ({
    type = 'body1',
    children
}) => {
  return (
    <div className={`typography__${type}`}>{children}</div>
  )
}

export default Typography