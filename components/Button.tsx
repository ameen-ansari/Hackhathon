import React from 'react'
import style from '../styles/Btn.module.css'

function Button(prop:any) {
  return (
    <div className={style.parent} onClick={prop.Func}>
      {prop.value}
    </div>
  )
}

export default Button
