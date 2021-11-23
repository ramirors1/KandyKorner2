import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

export const HireForm = () => {
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


    const [employee, updateEmployee] = useState(  //initial value of new employee object
        {
            name: "",
            locationId: 1,
            manager: false,
            fullTime: false,
            payrate: 1
        }
    );
    const history = useHistory()
    const saveEmployee = (event) => {
        event.preventDefault()      //updated employee object data once form field below has been filled out by user.
        const newEmployee = {
            name: employee.name,
            locationId: parseInt(employee.locationId),
            manager: employee.manager,
            fullTime: employee.fullTime,
            payrate: employee.payrate
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }
    return fetch("http://localhost:8088/employees?_expand=location", fetchOption)
        .then(res => res.json())
        .then(() => {
          history.push("/employees")  
        })    
    }    

    return (
        <>
        <form className="hireForm">
            <h2 className="hireForm__title">New Employee</h2>
            <fieldset>
            <div className="hireForm-group">
                    <label htmlFor="name">Name:</label>
                    <input
                    onChange={
                        (evt) => {
                            const copy = {...employee}
                            copy.name = evt.target.value
                            updateEmployee(copy)
                        }
                    }

                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        />
                </div>
                <div className="hireForm-group">
                    <label htmlFor="location">Location:</label>
                    <select
                    onChange={
                        (evt) => {
                            const copy = {...employee}
                            copy.locationId = evt.target.value
                            updateEmployee(copy)
                        }
                    } 
                      name="location" id="location">
                          <option value="default">Choose a location</option>
                          {
                                            locations.map(
                                                (location) => {
                                                  
                                                return <option value={location.id} key={`location--${location.id}`}>{location.address}</option>
                                                }
                                            )
                                        
                          }
                           </select> 
                </div>
                <div className="hireForm-group">
                    <label htmlFor="manager">Manager:</label>
                    <input type="checkbox"
                                        onChange={
                                            (evt) => {
                                                const copy = {...employee}
                                                copy.manager = evt.target.value
                                                updateEmployee(copy)
                                            }
                                        }
                    
                        />
                </div>
                <div className="hireForm-group">
                    <label htmlFor="fullTime">Full Time:</label>
                    <input type="checkbox"
                                        onChange={
                                            (evt) => {
                                                const copy = {...employee}
                                                copy.fullTime = evt.target.value
                                                updateEmployee(copy)
                                            }
                                        }
                    
                        />
                </div>
                <div className="hireForm-group">
                    <label htmlFor="description">Pay Rate:</label>
                    <input
                    onChange={
                        (evt) => {
                            const copy = {...employee}
                            copy.payrate = evt.target.value
                            updateEmployee(copy)
                        }
                    }

                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Pay Rate"
                        />
                </div>
            </fieldset>
            <button onClick={saveEmployee} className="btn btn-primary">
                Apply for job
            </button>
        </form>
        </>
    )

}    
