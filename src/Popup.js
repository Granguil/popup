import React from 'react'
import style from './popup.module.css'

export default function PopupComponent({ type, Text, boutons }) {
  return (
    <div className={style.popup + ' ' + style[type]}>
      <div className={style.text}>
        <Text />
      </div>
      <div className={style.buttonPopup}>
        {boutons.map((Bouton, index) => {
          return (
            <span key={index}>
              <Bouton />
            </span>
          )
        })}
      </div>
    </div>
  )
}
