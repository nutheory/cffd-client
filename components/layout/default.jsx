import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import PublicHeader from './public_header'
// import PublicFooter from './footers/public_footer'
// import jwtDecode from 'jwt-decode'

class DefaultLayout extends Component<Props, State>{

  jumpIntro: Function
  jumpAbout: Function
  jumpWork: Function
  jumpContact: Function
  about: Node
  work: Node
  contact: Node
  intro: Node

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
    // let user
    // try{
    //   user = jwtDecode(localStorage.getItem('hf_auth_header_token'))
    // } catch(e){
    // }
    const Component = this.props.component
    return (
      <Route render={ props => (
        <div>
          {/* { !user ? */}
            <div className="">
              <PublicHeader {...props}
                jumpIntro={this.jumpIntro}
                jumpAbout={this.jumpAbout}
                jumpWork={this.jumpWork}
                jumpContact={this.jumpContact} />
              <Component {...props}
                introRef={ node => this.intro = node }
                aboutRef={ node => this.about = node }
                workRef={ node => this.work = node }
                contactRef={ node => this.contact = node } />
              {/* <PublicFooter {...props} /> */}
            </div>
          {/* } */}
        </div>
      )} />
    )
  }
}

export default DefaultLayout
