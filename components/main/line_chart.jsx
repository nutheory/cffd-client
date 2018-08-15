// @flow
import React, { Component } from 'react'
import {select, scaleTime, scaleLinear, line, 
  timeParse, bisector, timeFormat, axisBottom, axisLeft, min, max, extent} from 'd3'

type Props = {
  width: integer,
  height: integer,
  data: object
}

type State = {

}

class LineChart extends Component<Props, State>{
  constructor(props){
    super()
    this.state = {

    }
  }

  componentDidMount(){
    this.buildChart(this.props)
  }

  buildChart(props){
    const svgNode = select(this.node)
    const data = props.data.fetch_stock.adjustments
    const margin = {top: 20, right: 20, bottom: 30, left: 40}
    const width = +svgNode.attr("width") - margin.left - margin.right
    const height = +svgNode.attr("height") - margin.top - margin.bottom

    const parseTime = timeFormat("%Y")
    const bisectDate = bisector(d =>  d.date).left

    const closeData = [] 
    const forecastData = [] 
    data.forEach(d => {
      var date = new Date(d.date)
      var n = {}
      n.year = date
      if(d.adjClose){
        n.value = d.adjClose
        closeData.push(n)
      } else {
        n.value = d.forecast
        forecastData.push(n)
      }
    })
    const lastClose = closeData[closeData.length - 1]
    const allData = closeData.concat(forecastData)
    forecastData.unshift(lastClose)
    
    const x = scaleTime().rangeRound([2.2, width])
    const y = scaleLinear().rangeRound([height, 0])

    x.domain(extent(allData, (d) => d.year))
    y.domain([min(allData, (d) => d.value) / 1.06, max(allData, (d) => d.value) * 1.06])

    var dataLine = line()
      .x(d => x(d.year))
      .y(d => y(d.value))

    const svgBaseG = svgNode.append("g")
      .attr("class", "base-chart")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

    svgBaseG.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(axisBottom(x))
      .style('stroke', '#911380')
    
    svgBaseG.append("g")
      .attr("class", "axis axis--y")
      .call(axisLeft(y)).style('stroke', '#911380')
      .append("text")
        .attr('class', 'axis-title')
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .style('stroke', '#911380')
        .text(props.data.fetch_stock.name)

    svgBaseG.append("path")
      .datum(closeData)
      .attr("class", "line")
      .attr("d", dataLine)

    svgBaseG.append("path")
      .datum(forecastData)
      .attr("class", "line")
      .attr("d", dataLine)
      .style('stroke', '#cc2766')
  }

  static getDerivedStateFromProps(nextProps, prevState){
    if (nextProps.data.length){
      this.buildChart(nextProps)
    }
    return prevState
  }

  shouldComponentUpdate(){
    return false
  }

  render(){
    const { x, y, height, width } = this.props
    const { widthScale, heightScale } = this.state
    
    return(
      <svg
        width={width} 
        height={height}
        ref={node => this.node = node} ></svg>
    )
  }
}

export default LineChart