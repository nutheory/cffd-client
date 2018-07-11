// @flow
import React, { Component } from 'react'
import PDF from "../assets/resume.pdf"

type Props = {
  contactRef?: Node
}

type State = {

}

class Contact extends Component<Props, State>{

  constructor(){
    super()

  }

  mouseMove(e: SyntheticEvent<*>){
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

  mouseLeave(e: SyntheticEvent<*>){
    const aElem = e
    const docStyle = aElem.currentTarget.parentNode.style
    docStyle.setProperty('--ty', '0')
    docStyle.setProperty('--rx', '0')
    docStyle.setProperty('--ry', '0')
  }

  mouseDown(e: SyntheticEvent<*>){
    const aElem = e
    const docStyle = aElem.currentTarget.parentNode.style
    docStyle.setProperty('--tz', '-25px')
  }

  mouseUp(e: SyntheticEvent<*>){
    const aElem = e
    const docStyle = aElem.currentTarget.parentNode.style
    docStyle.setProperty('--tz', '-12px')
  }

  render(){
    return(
      <div className="contact" id="contact" ref={this.props.contactRef}>
        <div className="py-8 md:py-16 px-6 md:px-0 container mx-auto">
          <h2 className="text-4xl md:text-5xl title text-center mt-8 md:mt-16 t-shadow">contact</h2>
          <h4 className="text-center t-shadow"></h4>
          <div className="body my-20 mx-auto flex flex-wrap">
            <div className="w-full md:w-1/3 flex flex-wrap">
              <div className="w-full button-boundary flex-wrap p-6">
                <a href="https://github.com/nutheory"
                  target="_blank"
                  className="button github" 
                  onMouseMove={this.mouseMove} 
                  onMouseLeave={this.mouseLeave}
                  onMouseDown={this.mouseDown}
                  onMouseUp={this.mouseUp}
                  data-title="Github"></a>
              </div>
              <div className="w-full button-boundary flex-wrap p-6">
                <a href="https://stackoverflow.com/story/nutheory"
                  target="_blank"
                  className="button stack" 
                  onMouseMove={this.mouseMove} 
                  onMouseLeave={this.mouseLeave}
                  onMouseDown={this.mouseDown}
                  onMouseUp={this.mouseUp}
                  data-title="Stack Overflow"></a>
              </div>
            </div>
            <div className="w-full md:w-1/3 flex flex-wrap">
              <div className="w-full button-boundary flex-wrap p-6">
                <a href="https://www.linkedin.com/in/nutheory/"
                  target="_blank"  
                  className="button linked-in my-4" 
                  onMouseMove={this.mouseMove} 
                  onMouseLeave={this.mouseLeave}
                  onMouseDown={this.mouseDown}
                  onMouseUp={this.mouseUp}
                  data-title="Linked In"></a>
              </div>
              <div className="w-full button-boundary flex-wrap p-6">
                <a href={`${PDF}`}
                  target="_blank" 
                  className="button resume my-4" 
                  onMouseMove={this.mouseMove} 
                  onMouseLeave={this.mouseLeave}
                  onMouseDown={this.mouseDown}
                  onMouseUp={this.mouseUp}
                  data-title="Resume"></a>
              </div>
            </div>
            <div className="w-full md:w-1/3 button-boundary h-48 flex flex-wrap">
              <div className="p-6">
                <a href="mailto:derek@cffd.ink" className="contact-button">
                  Contact
                  <span>derek@cffd.ink</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
