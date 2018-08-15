import gql from 'graphql-tag'

const GetStock = gql`
  query fetch_stock($input: GetStock) {
    fetch_stock(input: $input){
      name
      adjustments{
        date
        adjClose
        adjVolume
        hlPct
        pctChange
        forecast
        label
      }
    }
  }
`
export default GetStock