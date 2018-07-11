// @flow
import React, { Component } from 'react'
import { isBrowser, isMobile } from "react-device-detect"
import Intro from './intro'
import About from './about'
import Work from './work'
import Contact from './contact'

type Props = {
  contactRef: Node,
  introRef: Node,
  aboutRef: Node,
  workRef: Node
}

type State = {
}

class Index extends Component<Props, State>{

  about: Node
  work: Node

  constructor(){
    super()
  }

  render(){
    return(
      <div>
        <Intro introRef={ this.props.introRef } />
        { isBrowser ? <div className="quote"></div> : null }
        <About aboutRef={ this.props.aboutRef } />
        { isBrowser ? <div className="gap"></div> : null }
        <Work workRef={ this.props.workRef } />
        <Contact contactRef={ this.props.contactRef } />
      </div>
    )
  }
}

export default Index
