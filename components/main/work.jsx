// @flow
import React, { Component } from 'react'
import Modal from 'react-responsive-modal'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import Scroll from './scroll'
const works = [
  {
    title: "Gravit.ist",
    name: "gravitist",
    filename: "gravitist@2x.png",
    objective: `<p>To create online service to facilitate real estate agents being 
      able to order aerial photographs and videos of properties for marketing of 
      residential homes. Requirements included billing the agent who orders the 
      filming, followed by alerting local pilots of the filming opportunity. Once 
      the filming was completed/uploaded it gets reviewed and the acceptance of 
      the video triggers an automatic payout to the pilot.</p>`,
    solution: `<p>Leveraging Postgres's Earthdistance Extention for looking up 
      local pilots based off Lat/Lng as well as several API's including Google 
      Maps, Amazon S3, Transloadit for efficient media processing, and Stripe 
      for payments and payouts. Also, there is an admin dashboard to keep 
      track of pilots that don't follow through on missions and to track all 
      orders and their statuses.</p>`,
    link: "https://staging.gravit.ist",
    stack: [
      { logo: "node.svg", name: "Node", link: "https://nodejs.org/en/" },
      { logo: "graphql.svg", name: "GraphQL", link: "https://graphql.org/" },
      { logo: "react.svg", name: "React", link: "https://reactjs.org/" },
      { logo: "postgresql.svg", name: "Pg SQL", link: "https://www.postgresql.org/" },
      { logo: "apollo.svg", name: "Apollo", link: "https://www.apollographql.com/" },
      { logo: "webpack.svg", name: "Webpack", link: "https://webpack.js.org/" },
      { logo: "jest.svg", name: "Jest", link: "https://jestjs.io/" },
      { logo: "aws-s3.svg", name: "AWS S3", link: "https://aws.amazon.com/s3/" },
      { logo: "tailwind.svg", name: "Tailwind", link: "https://tailwindcss.com/" },
      { logo: "flow.svg", name: "Flow", link: "https://flow.org/en/" }
    ]
  },
  {
    title: "Cloud MLX",
    name: "mlx",
    filename: "mlx@2x.png",
    objective: `<p>To Create an MLS search/social network with features that include
      natural language search (ie. "4 Beds 3 baths $2mil") and drawing polygon areas 
      on a map to search locations. Other requirements included...must be able to search 
      listings by agent, be integrated with existing WR products, a UI experience as 
      familiar as Trulia/Zillow, and be much more performant than current MLS systems 
      on the market. </p>`,
    solution: `<p>In order to achieve all these ambitious goals, we decided on building 
      a single page application with a custom javascript front-end and a service-oriented 
      Rails API. All MLS data was normalized and indexed through Elasticsearch for speedy 
      lookups and most proofs of concepts were created in isolation using Node/Express 
      with MongoDB.</p><br /><p class="t-shadow italic">Cloud MLX was awarded the 
      2016 Inman Innovator Award for Most Innovative Technology.</p>`,
    link: "https://cloudmlx.com/",
    stack: [
      { logo: "ruby.svg", name: "Ruby", link: "https://www.ruby-lang.org/en/" },
      { logo: "elasticsearch.svg", name: "Elasticsearch", link: "https://www.elastic.co/" },
      { logo: "coffeescript.svg", name: "Coffeescript", link: "https://coffeescript.org/" },
      { logo: "postgresql.svg", name: "Pg SQL", link: "https://www.postgresql.org/" },
      { logo: "pug.svg", name: "Pug", link: "https://pugjs.org/api/getting-started.html" },
      { logo: "bootstrap.svg", name: "Bootstrap", link: "https://getbootstrap.com/" },
      { logo: "node.svg", name: "Node", link: "https://nodejs.org/en/" },
      { logo: "mongodb.svg", name: "MongoDB", link: "https://aws.amazon.com/s3/" }
    ]
  },
  {
    title: "The Brain Factory",
    name: "brain",
    filename: "brain@2x.png",
    objective: `<p>Revamp a 15-year-old web presence to accurately reflect the type of work 
      this immersive entertainment company currently produces. Over the years The Brain 
      Factory shifted focus from 3D media to Virtual Reality and had new projects and events 
      to highlight before the release of their documentary HAUNTERS (currently on Netflix 
      and Blu-Ray).</p>`,
    solution: `<p>Make use of all the interesting imagery they collect at the crazy functions 
      they attend and host. Squarespace's platform was chosen in order to get the project done 
      in a very timely manner and allow for simple updates or added features without involving 
      a code monkey.</p>`,
    link: "https://www.thebrainfactory.com/",
    stack: [
      { logo: "squarespace.svg", name: "Squarespace", link: "https://www.squarespace.com/" },
      { logo: "sketch.svg", name: "Sketch", link: "https://www.sketchapp.com/" },
      { logo: "javascript.svg", name: "JS", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { logo: "html-5.svg", name: "HTML 5", link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" },
      { logo: "css-3.svg", name: "CSS 3", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" }
    ]
  },
  {
    title: "Cloud Streams",
    name: "streams",
    filename: "streams@2x.png",
    objective: `<p>To create an email and text alert system to notify agents and buyers of new 
      properties as they hit the market based on criteria the agent sets up. This includes social 
      features like property discussions and an analytics dashboard to track market details 
      and client engagement. </p>`,
    solution: `<p>This was accomplished by leveraging the same Rails API built for Cloud MLX, 
      Sendgrid, and Twilio. Just as with MLX all data got normalized and indexed through 
      Elasticsearch. Highcharts was used to provide visual representations of dashboard 
      analytics.</p>`,
    link: "https://cloudstreams.net/",
    stack: [
      { logo: "ruby.svg", name: "Ruby", link: "https://www.ruby-lang.org/en/" },
      { logo: "elasticsearch.svg", name: "Elasticsearch", link: "https://www.elastic.co/" },
      { logo: "javascript.svg", name: "JS", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { logo: "highcharts.svg", name: "Highcharts", link: "https://www.highcharts.com/" },
      { logo: "mysql.svg", name: "MySQL", link: "https://www.mysql.com/" },
      { logo: "haml.svg", name: "HAML", link: "http://haml.info/" },
      { logo: "bootstrap.svg", name: "Bootstrap", link: "https://getbootstrap.com/" }
    ]
  },
  {
    title: "Haunters",
    name: "haunters",
    filename: "haunters@2x.png",
    objective: `<p>To create a blog to engage and excite horror fans about the upcoming release of 
      the HAUNTERS documentary. Ancillary benefits to this blog included thanking all the 
      Kickstarter supporters for their help and to facilitate pre-orders.</p>`,
    solution: `<p>Time as a factor we opted for Squarespace with all of its blogging 
      glory and get this up and running extremely fast to appease the fans and display give 
      them a small taste in form of trailers to gin up excitement.</p>`,
    link: "http://www.hauntersmovie.com/",
    stack: [
      { logo: "squarespace.svg", name: "Squarespace", link: "https://www.squarespace.com/" },
      { logo: "javascript.svg", name: "JS", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { logo: "html-5.svg", name: "HTML 5", link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" },
      { logo: "css-3.svg", name: "CSS 3", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" }
    ]
  },
  {
    title: "Cloud CMA",
    name: "cma",
    filename: "cma@2x.png",
    objective: `<p>To Expand user base of Cloud CMA by adding several new features including 
      a lead generation tool (recently made into its own product called Cloud Attract), iPad 
      presentational version of CMA's, and a bookmarklet tool that allowed CMA creation using 
      agents current MLS software.</p>`,
    solution: `<p>Used a variety of tools to build these features, early iterations of the 
      iPad CMA's used Elasticsearch and Backbone, while the Bookmarklet was built using a 
      small Sinatra server to create a custom script on the fly to inject JS into an MLS 
      system to interact with our Rails API.</p>`,
    link: "https://cloudcma.com/",
    stack: [
      { logo: "ruby.svg", name: "Ruby", link: "https://www.ruby-lang.org/en/" },
      { logo: "elasticsearch.svg", name: "Elasticsearch", link: "https://www.elastic.co/" },
      { logo: "javascript.svg", name: "JS", link: "https://coffeescript.org/" },
      { logo: "mysql.svg", name: "MySQL", link: "https://www.mysql.com/" },
      { logo: "haml.svg", name: "HAML", link: "http://haml.info/" },
      { logo: "bootstrap.svg", name: "Bootstrap", link: "https://getbootstrap.com/" },
      { logo: "sinatra.svg", name: "Sinatra", link: "https://nodejs.org/en/" },
      { logo: "backbone.svg", name: "Backbone", link: "http://backbonejs.org/" }
    ]
  },

]


type Props = {
  workRef : any,
  jumpContact: Function
}

type State = {
  open: boolean,
  title?: string,
  objective?: string,
  solution?: string,
  link?: string,
  stack?: Object
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
    const stack = JSON.parse(el.getAttribute('wstack'))
    this.setState({ open: true, title, solution, objective, link, stack })
  };

  onCloseModal(){
    this.setState({ open: false })
  }

  render(){
    const { open, title, objective, solution, link, stack } = this.state
    return(
      <div className="work relative" ref={this.props.workRef} style={{ height: `${window.innerHeight < 800 ? 'auto' : '100vh'}` }}>
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
            <h4 className="mt-8">Tech</h4>
            <div className="flex flex-wrap">
              { stack ? stack.map((st, i) => (
                <div key={`st_item_${st.name}_${i}`} className="w-1/5 py-4">
                  <img className="block w-3/5 md:w-1/2 mx-auto h-16" src={require(`../assets/${st.logo}`)} alt={st.name} />
                  <p className="text-xs text-center t-shadow">{st.name}</p>
                </div>
              )) : null }
            </div>
          </div>
        </Modal>
        <div className=" py-8 md:py-16 px-6 md:px-0 container mx-auto">
          <Zoom>
            <h2 className="text-4xl md:text-5xl title text-center mt-8 md:mt-16 t-shadow">work</h2>
            <h4 className="text-center mt-2 text-lg md:text-2xl t-shadow">Check out our latest work in UI/UX design, website design/development, and app development.</h4>
          </Zoom>
          <Fade bottom cascade>
            <div className="body mt-0 md:mt-16 -mx-6 flex flex-wrap">
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
                      wstack={ wk.stack ? JSON.stringify(wk.stack) : "" }
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
        <Scroll jump={ this.props.jumpContact } />
      </div>
    )
  }
}

export default Work
