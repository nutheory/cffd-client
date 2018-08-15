// @flow
import React from 'react'

const LinkButton = (props: Object) => {

  const mouseMove = (e: Object) => {
    const aElem = e
    const boundingClientRect = aElem.currentTarget.getBoundingClientRect()
    const docStyle = aElem.currentTarget.parentNode.style
    const x = aElem.clientX - boundingClientRect.left
    const y = aElem.clientY - boundingClientRect.top
    const xc = boundingClientRect.width/2
    const yc = boundingClientRect.height/2
    const dx = x - xc
    const dy = y - yc
    docStyle.setProperty('--rx', `${ dy/-1 }deg`)
    docStyle.setProperty('--ry', `${ dx/10 }deg`)
  }

  const mouseLeave = (e: SyntheticEvent<*>) =>{
    const aElem = e
    const docStyle = aElem.currentTarget.parentNode.style
    docStyle.setProperty('--ty', '0')
    docStyle.setProperty('--rx', '0')
    docStyle.setProperty('--ry', '0')
  }

  const mouseDown = (e: SyntheticEvent<*>) => {
    const aElem = e
    const docStyle = aElem.currentTarget.parentNode.style
    docStyle.setProperty('--tz', '-25px')
  }

  const mouseUp = (e: SyntheticEvent<*>) => {
    const aElem = e
    const docStyle = aElem.currentTarget.parentNode.style
    docStyle.setProperty('--tz', '-12px')
  }

  return (
    <div className="w-full button-boundary flex-wrap p-6">
      <a href={props.href}
        target="_blank"
        className={props.classes} 
        onMouseMove={mouseMove} 
        onMouseLeave={mouseLeave}
        onMouseDown={mouseDown}
        onMouseUp={mouseUp}
        data-title={props.label}></a>
    </div>
  )
}

export default LinkButton