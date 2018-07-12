// @flow
import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import PublicHeader from './public_header'

type Props = {
  component: any
}

type State = {}

class DefaultLayout extends Component<Props, State>{

  jumpIntro: Function
  jumpAbout: Function
  jumpWork: Function
  jumpContact: Function
  about: any
  work: any
  contact: any
  intro: any

  constructor(){
    super()

    this.jumpIntro = this.jumpIntro.bind(this)
    this.jumpAbout = this.jumpAbout.bind(this)
    this.jumpWork = this.jumpWork.bind(this)
    this.jumpContact = this.jumpContact.bind(this)
  }

  jumpIntro(){
    this.intro.scrollIntoView({behavior: "smooth", block: "start"})
  }

  jumpAbout(){
    this.about.scrollIntoView({behavior: "smooth", block: "start"})
  }

  jumpWork(){
    this.work.scrollIntoView({behavior: "smooth", block: "start"})
  }

  jumpContact(){
    this.contact.scrollIntoView({behavior: "smooth", block: "start"})
  }

  render(){

    const Component = this.props.component
    return (
      <Route render={ props => (
        <div>
          <div className="">
            <PublicHeader {...props}
              jumpIntro={this.jumpIntro}
              jumpAbout={this.jumpAbout}
              jumpWork={this.jumpWork}
              jumpContact={this.jumpContact} />
            <Component {...props}
              jumpAbout={this.jumpAbout}
              jumpWork={this.jumpWork}
              jumpContact={this.jumpContact}
              introRef={ node => this.intro = node }
              aboutRef={ node => this.about = node }
              workRef={ node => this.work = node }
              contactRef={ node => this.contact = node } />
          </div>
        </div>
      )} />
    )
  }
}

export default DefaultLayout
