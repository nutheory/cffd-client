// @flow
import React, { Component } from 'react'
import { graphql, Query, Mutation } from 'react-apollo'
import Zoom from 'react-reveal/Zoom'
import { Impress, Step } from 'react-impressjs'
import LineChart from './line_chart'
import LinkButton from './link_button'
import ReactResponsiveSelect from 'react-responsive-select'
import Scroll from './scroll'
import GetStock from '../queries/get_stock'

type Props = {
  playgroundRef : any,
  jumpContact: Function
}

type State = {
  stock: string,
  date: string
}

const googleItem = (text) => (
  <div className="flex">
    <div>
      <svg width="20px" height="20px" viewBox="0 0 252 262" version="1.1" preserveAspectRatio="xMidYMid">
        <g>
          <path d="M255.878,133.451 C255.878,122.717 255.007,114.884 253.122,106.761 L130.55,106.761 L130.55,155.209 L202.497,155.209 C201.047,167.249 193.214,185.381 175.807,197.565 L175.563,199.187 L214.318,229.21 L217.003,229.478 C241.662,206.704 255.878,173.196 255.878,133.451" fill="#4285F4"/>
          <path d="M130.55,261.1 C165.798,261.1 195.389,249.495 217.003,229.478 L175.807,197.565 C164.783,205.253 149.987,210.62 130.55,210.62 C96.027,210.62 66.726,187.847 56.281,156.37 L54.75,156.5 L14.452,187.687 L13.925,189.152 C35.393,231.798 79.49,261.1 130.55,261.1" fill="#34A853"/>
          <path d="M56.281,156.37 C53.525,148.247 51.93,139.543 51.93,130.55 C51.93,121.556 53.525,112.853 56.136,104.73 L56.063,103 L15.26,71.312 L13.925,71.947 C5.077,89.644 0,109.517 0,130.55 C0,151.583 5.077,171.455 13.925,189.152 L56.281,156.37" fill="#FBBC05"/>
          <path d="M130.55,50.479 C155.064,50.479 171.6,61.068 181.029,69.917 L217.873,33.943 C195.245,12.91 165.798,0 130.55,0 C79.49,0 35.393,29.301 13.925,71.947 L56.136,104.73 C66.726,73.253 96.027,50.479 130.55,50.479" fill="#EB4335"/>
        </g>
      </svg>
    </div>
    <div className="flex-1 ml-2">{text}</div>
  </div>
)

const fbItem = (text) => (
  <div className="flex">
    <div>
      <svg width="20px" height="20px" viewBox="0 0 256 266" version="1.1" preserveAspectRatio="xMidYMid">
        <g>
          <path d="M241.871,256.001 C249.673,256.001 256,249.675 256,241.872 L256,14.129 C256,6.325 249.673,0 241.871,0 L14.129,0 C6.324,0 0,6.325 0,14.129 L0,241.872 C0,249.675 6.324,256.001 14.129,256.001 L241.871,256.001" fill="#395185"/>
          <path d="M176.635,256.001 L176.635,156.864 L209.912,156.864 L214.894,118.229 L176.635,118.229 L176.635,93.561 C176.635,82.375 179.742,74.752 195.783,74.752 L216.242,74.743 L216.242,40.188 C212.702,39.717 200.558,38.665 186.43,38.665 C156.932,38.665 136.738,56.67 136.738,89.736 L136.738,118.229 L103.376,118.229 L103.376,156.864 L136.738,156.864 L136.738,256.001 L176.635,256.001" fill="#FFFFFF"/>
        </g>
      </svg>
    </div>
    <div className="flex-1 ml-2">{text}</div>
  </div>
)

const appleItem = (text) => (
  <div className="flex">
    <div>
      <svg width="20px" height="20px" viewBox="0 0 256 315" version="1.1" preserveAspectRatio="xMidYMid">
        <g>
          <path d="M213.803394,167.030943 C214.2452,214.609646 255.542482,230.442639 256,230.644727 C255.650812,231.761357 249.401383,253.208293 234.24263,275.361446 C221.138555,294.513969 207.538253,313.596333 186.113759,313.991545 C165.062051,314.379442 158.292752,301.507828 134.22469,301.507828 C110.163898,301.507828 102.642899,313.596301 82.7151126,314.379442 C62.0350407,315.16201 46.2873831,293.668525 33.0744079,274.586162 C6.07529317,235.552544 -14.5576169,164.286328 13.147166,116.18047 C26.9103111,92.2909053 51.5060917,77.1630356 78.2026125,76.7751096 C98.5099145,76.3877456 117.677594,90.4371851 130.091705,90.4371851 C142.497945,90.4371851 165.790755,73.5415029 190.277627,76.0228474 C200.528668,76.4495055 229.303509,80.1636878 247.780625,107.209389 C246.291825,108.132333 213.44635,127.253405 213.803394,167.030988 M174.239142,50.1987033 C185.218331,36.9088319 192.607958,18.4081019 190.591988,0 C174.766312,0.636050225 155.629514,10.5457909 144.278109,23.8283506 C134.10507,35.5906758 125.195775,54.4170275 127.599657,72.4607932 C145.239231,73.8255433 163.259413,63.4970262 174.239142,50.1987249" fill="#000000"/>
        </g>
      </svg>
    </div>
    <div className="flex-1 ml-2">{text}</div>
  </div>
)

const caretIcon = (
  <svg className="caret-icon" x="0px" y="0px" width="11.848px" height="6.338px" viewBox="351.584 2118.292 11.848 6.338">
    <g><path d="M363.311,2118.414c-0.164-0.163-0.429-0.163-0.592,0l-5.205,5.216l-5.215-5.216c-0.163-0.163-0.429-0.163-0.592,0s-0.163,0.429,0,0.592l5.501,5.501c0.082,0.082,0.184,0.123,0.296,0.123c0.103,0,0.215-0.041,0.296-0.123l5.501-5.501C363.474,2118.843,363.474,2118.577,363.311,2118.414L363.311,2118.414z"/></g>
  </svg>
)

class Playground extends Component<Props, State>{
  jumpStep: Function
  constructor(props: Object){
    super()
    this.state = {
      stock: "GOOGL",
      date: "2017-1-1"
    }

    this.jumpStep = this.jumpStep.bind(this)
  }

  changeStock(stock: Object){
    if(stock.altered){
      this.setState({stock: stock.value}, () => {})
    }
  }

  changeDate(date: Object){
    if(date.altered){
      this.setState({date: date.value}, () => {})
    }
  }

  jumpStep(e: SyntheticEvent<*>, step: string){
    e.preventDefault()
    if(window.location.hash === step) {
      window.location.hash = '_'
      window.location = `${step}`
    } else {
      window.location = `${step}`
    }
  }

  render(){
    return (
      <div className="playground relative" ref={this.props.playgroundRef} style={{ height: `${window.innerHeight < 800 ? 'auto' : '100vh'}` }}>
        <div className=" py-8 md:py-16 px-6 md:px-0 container mx-auto">
          <Zoom>
            <h2 className="text-4xl md:text-5xl title text-center mt-8 md:mt-16 t-shadow">playground</h2>
            <h4 className="text-center mt-2 text-lg md:text-2xl t-shadow">Adventures and experiments in coding.</h4>
            <h4 className="ins text-center mt-2 text-lg md:text-2xl t-shadow">Use  &#8592; arrow &#8594;  keys to navigate.</h4>
          </Zoom>
          <div className="relative w-full" style={{height:'500px'}}>
            <Impress 
              hint={false}
              fallbackMessage={<p>Sorry, your <b>device or browser</b> couldn't support well.</p>}
            >
              <Step 
                id="x-intro" 
                data={{ x:200, y:-100, scale:2 }}>
                <div className="flex flex-wrap">
                  <div className="mx-4">
                    <img className="w-32 h-32 mx-4" src={require(`../assets/elixir.png`)} alt="Elixir" />
                    <LinkButton href="https://github.com/nutheory/cffd-elixir" classes="button-short text-sm source" label="View source" />
                  </div>
                  <div className=" flex-1">
                    <div className="mx-4 mt-1">
                      <h4 className="x-title text-2xl md:text-4xl t-shadow">Machine Learning in Elixir</h4>
                      <h4 className="subtitle text-xl md:text-1xl t-shadow">and Python</h4>
                    </div>
                    <div className="mt-3 mb-6">
                      <img className="w-12 h-12 mx-4" src={require(`../assets/absinthe.png`)} alt="Absinthe" />
                      <img className="w-12 h-12 mx-4" src={require(`../assets/phoenix.png`)} alt="Phoenix" />
                      <img className="w-12 h-12 mx-4" src={require(`../assets/python.svg`)} alt="Python" />
                      <img className="w-12 h-12 mx-4" src={require(`../assets/d3.svg`)} alt="D3" />
                    </div>
                    <div className="mt-2 mx-4">
                      <p className="text-sm md:text-lg font-light my-4">I guess the obvious question might be... Why? 
                      The honest answer is that I wanted to learn Elixir, Python, D3, and get my feet wet with machine
                      learning. Elixir and Pheonix were appealing to me coming from a Ruby on Rails/Javascript background. Together they seemed 
                      like a good mix of functional programming with the simplicity of Ruby. I naturally reached for Absinthe 
                      to integrate GraphQL and hacked together a working version of <a href="https://github.com/nutheory/erlport-simplified" target="_blank">ErlPort</a> and got to work.</p>
                      <p className="text-sm md:text-lg font-light my-4">On the Python side of this experiment I used <a href="https://github.com/mendrugory/piton" target="_blank">Piton</a> to 
                      spin up Python processes within Elixir. From there its all on Python, Pandas, Numpy, and SciKit Learn 
                      for data processing. The data is then returned through the stack to be plotted client side using D3.</p>
                      <p className="text-right font-semibold hover:cursor-pointer hover:underline" onClick={(e) => {this.jumpStep(e, "#/x-example")}}>Continue reading &#8594;</p>
                    </div>
                  </div>
                </div>
              </Step>
              <Step 
                id="x-example" 
                data={{ x:705, y:425, z:-700, rotateX:60, rotateZ:120, scale:1 }}>
                <Query
                  query={GetStock}
                  variables={{ input: { name: 'GOOGL', date: '2016-1-1' }}} >
                    {({ loading, error, data, refetch }) => {
                      if(loading){return (<div></div>)}
                      if(error) return `Error!: ${error}`
                      return (
                        <div>
                          <div>
                            <form onSubmit={e => { refetch({ input: { name: this.state.stock, date: this.state.date }}) }}>
                              <div className="flex flex-wrap -mx-6">
                                <div className="flex-1 mx-6">
                                  <ReactResponsiveSelect
                                    name="ticker"
                                    options={[
                                      { value: 'GOOGL', text: 'GOOGL', markup: googleItem('GOOGL') },
                                      { value: 'FB', text: 'FB', markup: fbItem('FB') },
                                      { value: 'AAPL', text: 'AAPL', markup: appleItem('AAPL') }
                                    ]}
                                    caretIcon={caretIcon}
                                    prefix="Viewing: "
                                    selectedValue={this.state.stock}
                                    onChange={(newValue) => { this.changeStock(newValue) }}
                                  />
                                </div>
                                <div className="flex-1 mx-6">
                                  <ReactResponsiveSelect
                                    name="date"
                                    options={[
                                      { value: '2016-1-1', text: 'Q1 2016' },
                                      { value: '2016-4-1', text: 'Q2 2016' },
                                      { value: '2016-7-1', text: 'Q3 2016' },
                                      { value: '2016-10-1', text: 'Q4 2016' },
                                      { value: '2017-1-1', text: 'Q1 2017' },
                                      { value: '2017-4-1', text: 'Q2 2017' },
                                      { value: '2017-7-1', text: 'Q3 2017' },
                                      { value: '2017-10-1', text: 'Q4 2017' },
                                      { value: '2018-1-1', text: 'Q1 2018' }
                                    ]}
                                    caretIcon={caretIcon}
                                    prefix="Data from: "
                                    selectedValue={this.state.date}
                                    onChange={(newValue) => { this.changeDate(newValue) }}
                                  />
                                </div>
                                <div className="mx-6">
                                  <button className="px-6 py-3 bg-blue-dark text-blue-lightest t-shadow" type="submit">Lookup</button>
                                </div>
                              </div>
                            </form>
                          </div>
                          <div>
                            <LineChart data={data} width={820} height={400} x={0} y={0} />
                          </div>
                          <div className="flex">
                            <div className="flex-1 hover:cursor-pointer hover:underline" onClick={(e) => {this.jumpStep(e, "#/x-intro")}}>&#8592; Intro</div>
                            <div className="flex-1 text-right hover:cursor-pointer hover:underline" onClick={(e) => {this.jumpStep(e, "#/x-details")}}>Thoughts on Elixir &#8594;</div>
                          </div>
                        </div>
                      )
                    }}
                </Query>
              </Step>
              <Step 
                id="x-details" 
                data={{ x:-350, y:225, z:-1100, rotateX:20, rotateZ:160, scale:1 }}>
                <p className="text-sm md:text-4xl t-shadow">Coming Soon.</p>
                <p className="text-sm md:text-4xl t-shadow"></p>
              </Step>
            </Impress>
          </div>
        </div>
        <Scroll jump={ this.props.jumpContact } />
      </div>
    )
  }
}

export default Playground