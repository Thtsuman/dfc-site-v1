import Logo from 'ui_kits/atoms/Logo/Logo'
import React from 'react'
import 'styles/global.styles.scss'
import Typography from 'ui_kits/atoms/Typography/Typography'

const app = () => {
  return (
    <div>
        <Logo />
        <Typography type='big_heading'>ALL IT TAKES IS ALL YOU’VE GOT</Typography>
    </div>
  )
}

export default app