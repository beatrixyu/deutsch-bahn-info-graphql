import React from "react"


export function Train({ routeInfo }) {

    return (
        <div>
            <h1>Here is the Train Info Component</h1>
            {/* <h1>{train.station.stations}</h1> */}
            {/* <h1>{train.name}</h1> */}
            <div>
                <span>From: {routeInfo.from}</span>
                <span>To: {routeInfo.to}</span>
                <span>Delays:
                  {routeInfo.parts
                        .map(part =>
                            <div>
                                {part.from.name}
                                {part.to.name}
                                {part.delay}
                                {part.departingTrack}
                                {part.arrivingTrack}
                            </div>
                        )
                    }
                </span>

                {/* {nearby.stations
                    .map(stationInfo =>
                        <span>
                            {stationInfo.stationNumber}
                        </span>)
                } */}
            </div>
        </div>
    )


}

// query nearby($latitude: Float!, $longitude: Float!, $radius: Int!){
//     nearby(latitude: $latitude, longitude: $longitude, radius: $radius) {
//         stations(count: 5) {
//             name
//             primaryEvaId
//             location {
//                 latitude
//                 longitude
//             }
//             facilities {
//                 type
//                 state
//                 description
//                 equipmentNumber
//             }
//         }
//     }
// }