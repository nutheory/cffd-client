// @flow
import React, { Component } from 'react'
import Modal from 'react-responsive-modal'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
const works = [
  {
    title: "Gravit.ist",
    name: "gravitist",
    filename: "gravitist@2x.png",
    objective: `<p>Check out our latest work in UI/UX design, website design/development, and app development.
      Check out our latest work in UI/UX design, website design/development, and app development.
      Check out our latest work in UI/UX design, website design/development, and app development.
      Check out our latest work in UI/UX design, website design/development, and app development.</p>`,
    solution: `<p>Check out our latest work in UI/UX design, website design/development, and app development.
      Check out our latest work in UI/UX design, website design/development, and app development.
      Check out our latest work in UI/UX design, website design/development, and app development.
      Check out our latest work in UI/UX design, website design/development, and app development.</p>`,
    link: "https://staging.gravit.ist"
  },
  {
    title: "Cloud MLX",
    name: "mlx",
    filename: "mlx@2x.png",
    objective: `<p>Check out our latest work in UI/UX design, website design/development, and app development.
      Check out our latest work in UI/UX design, website design/development, and app development.
      Check out our latest work in UI/UX design, website design/development, and app development.
      Check out our latest work in UI/UX design, website design/development, and app development.</p>`,
    solution: `<p>Check out our latest work in UI/UX design, website design/development, and app development.
      Check out our latest work in UI/UX design, website design/development, and app development.
      Check out our latest work in UI/UX design, website design/development, and app development.
      Check out our latest work in UI/UX design, website design/development, and app development.</p>`,
    link: "https://cloudmlx.com/"
  },
  {
    title: "The Brain Factory",
    name: "brain",
    filename: "brain@2x.png",
    objective: `<p>Check out our latest work in UI/UX design, website design/development, and app development.
      Check out our latest work in UI/UX design, website design/development, and app development.
      Check out our latest work in UI/UX design, website design/development, and app development.
      Check out our latest work in UI/UX design, website design/development, and app development.</p>`,
    solution: `<p>Check out our latest work in UI/UX design, website design/development, and app development.
      Check out our latest work in UI/UX design, website design/development, and app development.
      Check out our latest work in UI/UX design, website design/development, and app development.
      Check out our latest work in UI/UX design, website design/development, and app development.</p>`,
    link: "https://www.thebrainfactory.com/"
  },
  {
    title: "Cloud Streams",
    name: "streams",
    filename: "streams@2x.png",
    objective: `<p>Check out our latest work in UI/UX design, website design/development, and app development.
      Check out our latest work in UI/UX design, website design/development, and app development.
      Check out our latest work in UI/UX design, website design/development, and app development.
      Check out our latest work in UI/UX design, website design/development, and app development.</p>`,
    solution: `<p>Check out our latest work in UI/UX design, website design/development, and app development.
      Check out our latest work in UI/UX design, website design/development, and app development.
      Check out our latest work in UI/UX design, website design/development, and app development.
      Check out our latest work in UI/UX design, website design/development, and app development.</p>`,
    link: "https://cloudstreams.net/"
  },
  {
    title: "Haunters",
    name: "haunters",
    filename: "haunters@2x.png",
    objective: `<p>Check out our latest work in UI/UX design, website design/development, and app development.
      Check out our latest work in UI/UX design, website design/development, and app development.
      Check out our latest work in UI/UX design, website design/development, and app development.
      Check out our latest work in UI/UX design, website design/development, and app development.</p>`,
    solution: `<p>Check out our latest work in UI/UX design, website design/development, and app development.
      Check out our latest work in UI/UX design, website design/development, and app development.
      Check out our latest work in UI/UX design, website design/development, and app development.
      Check out our latest work in UI/UX design, website design/development, and app development.</p>`,
    link: "http://www.hauntersmovie.com/"
  },
  {
    title: "Cloud CMA",
    name: "cma",
    filename: "cma@2x.png",
    objective: `<p>Check out our latest work in UI/UX design, website design/development, and app development.
      Check out our latest work in UI/UX design, website design/development, and app development.
      Check out our latest work in UI/UX design, website design/development, and app development.
      Check out our latest work in UI/UX design, website design/development, and app development.</p>`,
    solution: `<p>Check out our latest work in UI/UX design, website design/development, and app development.
      Check out our latest work in UI/UX design, website design/development, and app development.
      Check out our latest work in UI/UX design, website design/development, and app development.
      Check out our latest work in UI/UX design, website design/development, and app development.</p>`,
    link: "https://cloudcma.com/"
  },

]


type Props = {

}

type State = {
  open: boolean,
  title?: string,
  objective?: string,
  solution?: string,
  link?: string
}

class Work extends Component<Props, State>{

  onOpenModal: Function
  onCloseModal: Function
  onHoverStart: Function
  onHoverEnd: Function

  constructor(){
    super()

    this.state ={
      open: false
    }

    this.onOpenModal = this.onOpenModal.bind(this)
    this.onCloseModal = this.onCloseModal.bind(this)
    this.onHoverStart = this.onHoverStart.bind(this)
    this.onHoverEnd = this.onHoverEnd.bind(this)
  }

  onHoverStart(e: SyntheticEvent<*>){
    const el = e.currentTarget.getElementsByClassName('zoom-overlay')[0]
    el.classList.remove('hidden')
    el.classList.add('flex')
  }

  onHoverEnd(e: SyntheticEvent<*>){
    const el = e.currentTarget.getElementsByClassName('zoom-overlay')[0]
    el.classList.remove('flex')
    el.classList.add('hidden')
  }

  onOpenModal(e: SyntheticEvent<*>){
    const el = e.currentTarget
    const title = el.getAttribute('wtitle')
    const objective = el.getAttribute('wobjective')
    const solution = el.getAttribute('wsolution')
    const link = el.getAttribute('wlink')
    this.setState({ open: true, title, solution, objective, link })
  };

  onCloseModal(){
    this.setState({ open: false })
  }

  render(){
    const { open, title, objective, solution, link } = this.state
    return(
      <div className="work" ref={this.props.workRef}>
        <Modal
          open={open}
          onClose={this.onCloseModal} center
          classNames={{ modal: 'modal' }}
          animationDuration={200}
          closeIconSvgPath={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#3D4852"><path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h404c3.3 0 6 2.7 6 6v340zM356.5 194.6L295.1 256l61.4 61.4c4.6 4.6 4.6 12.1 0 16.8l-22.3 22.3c-4.6 4.6-12.1 4.6-16.8 0L256 295.1l-61.4 61.4c-4.6 4.6-12.1 4.6-16.8 0l-22.3-22.3c-4.6-4.6-4.6-12.1 0-16.8l61.4-61.4-61.4-61.4c-4.6-4.6-4.6-12.1 0-16.8l22.3-22.3c4.6-4.6 12.1-4.6 16.8 0l61.4 61.4 61.4-61.4c4.6-4.6 12.1-4.6 16.8 0l22.3 22.3c4.7 4.6 4.7 12.1 0 16.8z"/></svg>}>
          <div className="study">
            <h2>{ title ? title : '' } <span>Case Study</span></h2>
            <p>url :: <a href={link} target="_blank">{ link ? link : '' }</a></p>
            <h4 className="mt-8">Objective</h4>
            <div dangerouslySetInnerHTML={{__html: objective }}></div>
            <h4 className="mt-8">Solution</h4>
            <div dangerouslySetInnerHTML={{__html: solution }}></div>
          </div>
        </Modal>
        <div className="py-16 px-6 md:px-0 container mx-auto">
          <Zoom>
            <h2 className="title text-center mt-16 t-shadow">work</h2>
            <h4 className="text-center mt-2 text-lg md:text-2xl t-shadow">Check out our latest work in UI/UX design, website design/development, and app development.</h4>
          </Zoom>
          <Fade bottom cascade>
            <div className="body mt-20 -mx-6 flex flex-wrap">
              { works.map((wk, i) => (
                <div
                  className="w-full md:w-1/3 p-6 hover:cursor-pointer"
                  key={`${wk.name}_${i}`} id={`work_${wk.name}`}
                  onMouseEnter={this.onHoverStart}
                  onMouseLeave={this.onHoverEnd}>
                  <h3 className="t-shadow">{wk.title}</h3>
                  <div className="mt-2 zoom">
                    <div
                      className="hidden zoom-overlay"
                      wtitle={wk.title}
                      wlink={wk.link}
                      wobjective={wk.objective}
                      wsolution={wk.solution}
                      onClick={this.onOpenModal}>
                      <div className="zoom-button hover:text-white hover:bg-purple-darker">View Case Study</div>
                    </div>
                    <img src={require(`../assets/${wk.filename}`)} className="shadow-lg border-4 border-white" />
                  </div>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </div>
    )
  }
}

export default Work
