import React, { useEffect, useState } from "react"

export const LocationsList = () => {
    const [locations, updateLocations] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
                .then(res => res.json())
                .then((data) => {
                    updateLocations(data)
                })
        },
        []
    )
    // useEffect(
    //     () => {

    //     },
    //     [locations]
    // )

    return (
        <>
            {
                locations.map(
                    (location) => {
                    return <div key={`location--${location.id}`}>{location.address}</div>
                    }
                )
            }
        </>
    )
}


