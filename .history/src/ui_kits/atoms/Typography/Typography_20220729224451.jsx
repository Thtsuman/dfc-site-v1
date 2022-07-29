import React from 'react'
import './Typography.styles.scss'

const Typography = ({
    type = 'body1',
    color = 'primary',
    children
}) => {
  return (
    <div className={`typography typography__${type}`}>
        <span>
        {children}
        </span>
    </div>
  )
}

export default Typography