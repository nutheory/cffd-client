// @flow
import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import PDF from '../assets/resume.pdf'

type Props = {
  contactRef: string
}

type State = {

}

class Contact extends Component<Props, State>{

  constructor(){
    super()

  }

  mouseMove(e: Object){
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
      <div className="contact" id="contact" ref={ this.props.contactRef }>
        <div className="py-8 md:py-16 px-6 md:px-0 container mx-auto">
          <Zoom>
            <h2 className="text-4xl md:text-5xl title text-center mt-8 md:mt-16 t-shadow">contact</h2>
            <h4 className="text-center mt-2 text-md md:text-xl t-shadow">Crafting code outta Orange County, Ca.</h4>
            <h4 className="text-center mt-2 text-md md:text-xl t-shadow">Serving Los Angeles, Orange County, San Diego and beyond.</h4>
          </Zoom>
          <div className="body my-20 mx-auto flex flex-wrap">
            <Fade left cascade>
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
            </Fade>
            <Fade left cascade>
              <div className="w-full md:w-1/3 flex flex-wrap">
                <div className="w-full button-boundary">
                  <div className="p-6">
                    <a href="mailto:derek@cffd.ink" className="contact-button">
                      Contact
                      <span>derek@cffd.ink</span>
                    </a>
                  </div>
                </div>
                <div className="w-full button-boundary flex-wrap p-6">
                  <a href={PDF}
                    target="_blank" 
                    className="button resume my-4" 
                    onMouseMove={this.mouseMove} 
                    onMouseLeave={this.mouseLeave}
                    onMouseDown={this.mouseDown}
                    onMouseUp={this.mouseUp}
                    data-title="Resume"></a>
                </div>
              </div>
            </Fade>
            <Fade right cascade>
              <div className="w-full md:w-1/3 button-boundary h-48 flex flex-wrap">
                <div className="w-full button-boundary flex-wrap p-6">
                  <a href="https://angel.co/derek-rush"
                    target="_blank"  
                    className="button angel my-4" 
                    onMouseMove={this.mouseMove} 
                    onMouseLeave={this.mouseLeave}
                    onMouseDown={this.mouseDown}
                    onMouseUp={this.mouseUp}
                    data-title="AngelList"></a>
                </div>
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
              </div>
            </Fade>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
