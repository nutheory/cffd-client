// @flow
import React, { Component } from 'react'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'

const bgs = [
  require('../assets/blue@2x.jpg'),
  require('../assets/grey@2x.jpg'),
  require('../assets/gold@2x.jpg'),
]

const About = (props: Object) => {
  return(
    <div className="about" ref={props.aboutRef} style={{ backgroundImage: `url(${bgs[Math.floor(Math.random()*bgs.length)]})` }}>
      <div className="py-16 px-6 md:px-0 container mx-auto">
        <Zoom>
          <h2 className="title text-center mt-16 t-shadow">about</h2>
          <h4 className="text-center mt-2 text-lg md:text-2xl t-shadow">name :: derek rush</h4>
          <div className="header w-3/5 mx-auto flex flex-wrap">
            <div className="pr-12 pt-3">
              <img src={require('../assets/headshot.png')} className="rounded-full border-grey-darker border-4 bolder-solid float-left w-32 ml-12" />
            </div>
            <div className="flex-1">
              <p className="leading-normal t-shadow">
              Since the creation of my first app in 2003 I've always been drawn to
              the overlap between design and development. My skills are broad:
              from UX to design, front end to back end development. I enjoy each
              aspect, and love building sites from start to finish & exploring new
              technologies.</p>
            </div>
          </div>
        </Zoom>
        <Fade bottom cascade>
          <div className="body mt-20 -mx-6 flex flex-wrap">
            <div className="w-full md:w-1/3 p-8">
              <h3 className="t-shadow">creative</h3>
              <p className="t-shadow">At cffd.ink we always strive to find the apex where
                identity, visual, interaction and UX design converge to achieve a fluid
                flow of consistent messaging. The aesthetics of any brand or product should
                always be intentional without appearing coerced into its application. Our
                philosophy on creative work is to say a lot, with as little as possible to
                keep your messaging clear and precise. Properly done the aspects of
                creativity will we keep the end user engaged and instill a sense of
                confidence in your target audience.
              </p>
            </div>
            <div className="w-full md:w-1/3 p-6">
              <h3 className="t-shadow">functional</h3>
              <p className="t-shadow">When people talk about functional programming
                and/or development they are referring to a simple task based way of solving
                complex problems. Functional problem solving favors composition over
                inheritance (removing shared state) and reducing side effects in an
                effort to increase the predictability of your apps behavior. Separating
                side effects from the rest of your logic can make a program easier to
                maintain, test, debug, extend and refactor.
                </p>
            </div>
            <div className="w-full md:w-1/3 p-6">
              <h3 className="t-shadow">fullstack</h3>
              <p className="t-shadow">From Data stores to UI, running the entire stack
                and knowing every technology being used give a unique advantage to people with
                an immense desire to build. It creates a sense of ownership and personal pride that
                permeates though every tech decision from the language you choose to develop project
                with to every architectural building block you implement. Fullstack development
                is reserved for a certain type of personatity that has a deep sense of self reliance
                and healthy "get up and GO!" attitude.
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default About
