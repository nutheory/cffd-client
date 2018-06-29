// @flow
import React, { Component, Node } from 'react'
import Intro from './intro'
import About from './about'
import Work from './work'
import Contact from './contact'

type Props = {
  aboutRef: Node,
  workRef: Node
}

type State = {
  // bgPinned: boolean
}

class Index extends Component<Props, State>{

  about: Node
  work: Node

  constructor(){
    super()

    // this.jumpAbout = this.jumpAbout.bind(this)
  }

  // jumpAbout(){
  //   this.about.scrollIntoView({behavior: "smooth", block: "start"})
  // }

  render(){
    return(
      <div>
        <Intro introRef={ this.props.introRef } />
        <div className="quote"></div>
        <About aboutRef={ this.props.aboutRef } />
        <div className="gap"></div>
        <Work workRef={ this.props.workRef } />
        <Contact contactRef={ this.props.contactRef } />
      </div>
    )
  }
}

export default Index
