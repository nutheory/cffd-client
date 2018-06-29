// @flow
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  jumpIntro: Function,
  jumpAbout: Function,
  jumpWork: Function,
  jumpContact: Function
}

type State = {
  bgPinned: boolean
}

class PublicHeader extends Component<Props, State>{

  handleScroll: Function
  // jumpAbout: Function
  // about: Node
  // toggleDrawerState: Function

  constructor(){
    super()
    this.state = {
      bgPinned: false
      // navDrawerActive: false
    }

    // this.toggleDrawerState = this.toggleDrawerState.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
    // this.jumpAbout = this.jumpAbout.bind(this)
  }

  handleScroll(ev: SyntheticEvent<*>) {
    if (window.pageYOffset > 100 && this.state.bgPinned === false ) {
      this.setState({ bgPinned: true })
    }
    if (window.pageYOffset < 100 && this.state.bgPinned === true ) {
      this.setState({ bgPinned: false })
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll)
  }

  render(){
    return(
      <div className="fixed z-40 w-full px-8 lg:px-20 py-3 public-header">
        <div className={`header-bg h-16 sm:h-12 ${ this.state.bgPinned ? 'header-bg-pin' : '' }`}></div>
        <header id="AppHeader" className={`flex flex-wrap ${ this.state.bgPinned ? 'header-fg-pin' : '' }`}>
          <div className="w-full sm:w-3/5 sm:flex-1 pr-8">
            <div className={`${ this.state.bgPinned ? 'block' : 'hidden' }`}>
              <div className="main-title hover:cursor-pointer" onClick={this.props.jumpIntro}>cffd.ink</div>
              <div className="main-subtitle">creative / functional / fullstack / development</div>
            </div>
          </div>
          <div className="">
            <div className="flex-1 flex font-light text-sm mt-1">
              <div className="hover:cursor-pointer hover:underline" onClick={this.props.jumpAbout}>About</div>
              <div className="mx-2">/</div>
              <div className="hover:cursor-pointer hover:underline" onClick={this.props.jumpWork}>Work</div>
              <div className="mx-2">/</div>
              <div className="hover:cursor-pointer hover:underline" onClick={this.props.jumpContact}>Contact</div>
            </div>
          </div>
        </header>
      </div>
    )
  }
}

export default PublicHeader
