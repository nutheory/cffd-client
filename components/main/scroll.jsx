// @flow
import React from 'react'
import { NavLink } from 'react-router-dom'

const scrollDown = (props: Object) => {
  return (
    <div className="scroll-next flex justify-center brighten hover:cursor-pointer" onClick={props.jump}>
      <img src={`/${require('../assets/chevron-down.svg')}`}  alt="scroll" /><br />
    </div>
  )
}

export default scrollDown