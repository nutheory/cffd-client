// @flow
import React, { Component } from 'react'
import { isBrowser, isMobile } from "react-device-detect"
import Intro from './intro'
import About from './about'
import Work from './work'
import Contact from './contact'

type Props = {
  contactRef: string,
  introRef: Node,
  aboutRef: Node,
  workRef: Node,
  jumpAbout: Function,
  jumpWork: Function,
  jumpContact: Function
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
        <Intro introRef={ this.props.introRef } jumpAbout={ this.props.jumpAbout } />
        { isBrowser ? <div className="quote"></div> : null }
        <About aboutRef={ this.props.aboutRef } jumpWork={ this.props.jumpWork } />
        { isBrowser ? <div className="gap"></div> : null }
        <Work workRef={ this.props.workRef } jumpContact={ this.props.jumpContact } />
        <Contact contactRef={ this.props.contactRef } />
        <p className="text-sm px-6 py-1 text-grey-darker t-shadow">All Rights Reserved © 2018 cffd.ink</p>
      </div>
    )
  }
}

export default Index
