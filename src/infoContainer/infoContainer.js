import React from "react"
import { useQuery } from "@apollo/react-hooks"

import { Train } from '../components/train'
import { GET_TRAINS } from "../graphql/get-trains"

export function InfoContainer() {

    // const { data: { nearby = {} } = {} } = useQuery(GET_TRAINS, {
    //     variables: { latitude: 50.11, longitude: 8.66, radius: 2000 }
    // })
    const { data: { routing = [] } = {} } = useQuery(GET_TRAINS, {
        variables: { from: 8000085, to: 8000098 } //dus => koln
    })

    return (
        <div className="container" >
            <h1>Here is the container</h1>
            {routing && routing.map(routePart =>
                <Train key={routePart.id} routePart={routePart} />)
            }
            {/* {
                nearby.stations && nearby.stations.map(station => <Train station={station} key={station.id} />)
            } */}
            {/* {console.log(nearby.stations)} */}

        </div>
    )

}
