import React, { useEffect, useState } from 'react'

import { Popup } from 'popup'
import { ButtonCustom, ButtonTypeList } from 'button'
import 'button/dist/index.css'
import 'popup/dist/index.css'

const App = () => {
  const buttons = []
  const [popups, setPopups] = useState([])
  buttons.push(() => (
    <ButtonCustom
      text='Fermer'
      type={ButtonTypeList.back}
      callback={() => {
        let p = [...popups]
        p.pop()
        setPopups([...p])
        console.log(popups)
      }}
    />
  ))
  useEffect(() => {
    let p = [...popups]
    p.push({
      text: 'ceci est un test',
      type: 'Creer',
      buttons: buttons
    })
    setPopups([...p])
  }, [])
  return (
    <div>
      {popups.map((popup, index) => (
        <Popup
          key={index}
          text={popup.text}
          type={popup.type}
          buttons={popup.buttons}
        />
      ))}
    </div>
  )
}

export default App
