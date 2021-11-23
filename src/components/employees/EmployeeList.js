import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

export const EmployeesList = () => {
    const [employees, changeEmployees] = useState([])
    const [locations, setLocation] = useState("")
    const history = useHistory()

    useEffect(
        () => {
            console.log("fetching employees")

            fetch("http://localhost:8088/employees?_expand=location")
                .then(res => res.json())
                .then((employeesFromAPI) => {
                    console.log("updating employees state")

                    changeEmployees(employeesFromAPI)
                })
        },
        [] //function runs when EmployeesList is invoked
    )

    useEffect(() => {    console.log("updating locations state")

        const justLocations = employees.map(employee => employee.location)
        setLocation(justLocations.join(", "))
    }, [employees])  //function runs everytime the value of employees change
    console.log("employees list rendered")
    return (
        <>
         <div>
                <button onClick={() => history.push("/employee/create")}>Hire Employee</button>
            </div> 
            {/* <div>
                Locations: { locations }
            </div> */}
            {
                employees.map(
                    (employee) => {
                        return <div key={`employee--${employee.id}`}>
                            <p>{employee.name} works at {employee.location.address}, and has a payrate of {employee.payrate}</p>
                                               
                            </div>
                                        }
                                    )
                // employees.map(
                //     (employee) => {
                //         return <p key={`employee--${employee.id}`}>{employee.name}</p>
                //     }
                // )
            }
        </>
    )
}


// import React, { useEffect, useState } from "react"
// import { useHistory } from "react-router-dom"

// export const EmployeesList = () => {
//     const [employees, updateEmployees] = useState([])
            

//     useEffect(
//         () => {
//             fetch("http://localhost:8088/employees?_expand=location")
//                 .then(res => res.json())
//                 .then((data) => {
//                     updateEmployees(data)
//                 })
//         },
//         []
//     )

//     return (
//         <>
//             {
//                 employees.map(
//                     (employee) => {
//                         return <div key={`employee--${employee.id}`}>
//                             <p>{employee.name} works at {employee.location.address}, and has a payrate of {employee.payrate}</p>
                             
//                             </div>
//                     }
//                 )
//             }
//         </>
//     )
// }