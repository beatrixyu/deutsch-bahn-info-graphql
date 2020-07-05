
import gql from 'graphql-tag';

export const GET_TRAINS = gql`
    query routing($from: Int!, $to: Int!){
          routing(from: $from, to: $to) {
    parts {
      from {
        name
      }
      to {
        name
      }
      delay
    }
    from {
      stationNumber
      name
    }
    to {
      stationNumber
      name
    }
  }
    }
    `
  ;

