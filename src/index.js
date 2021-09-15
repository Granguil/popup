import React from 'react'
import PopupComponent from './Popup'

export const Popup = ({ text, type, buttons }) => {
  return <PopupComponent type={type} Text={text} boutons={buttons} />
}
