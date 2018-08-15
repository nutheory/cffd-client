// @flow
import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import LinkButton from './link_button'
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
            <div className="w-full md:w-1/3 flex flex-wrap">
              <LinkButton href="https://github.com/nutheory" classes="button github" label="Github" />
              <LinkButton href="https://stackoverflow.com/story/nutheory" classes="button stack" label="Stack Overflow" />
            </div>
            <Fade bottom cascade>
              <div className="w-full md:w-1/3 flex flex-wrap">
                <div className="w-full button-boundary">
                  <div className="p-6">
                    <a href="mailto:derek@cffd.ink" className="contact-button">
                      Contact
                      <span>derek@cffd.ink</span>
                    </a>
                  </div>
                </div>
                <LinkButton href={PDF} classes="button resume my-4" label="Resume" />
              </div>
            </Fade>
            <div className="w-full md:w-1/3 flex flex-wrap">
              <LinkButton href="https://angel.co/derek-rush" classes="button angel" label="AngelList" />
              <LinkButton href="https://www.linkedin.com/in/nutheory/" classes="button linked-in" label="LinkedIn" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
