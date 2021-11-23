import React, { useEffect, useState } from "react"
// import { useHistory } from "react-router-dom"

export const CustomerList = () => {
    const [customers, updateCustomers] = useState([])
            

    useEffect(
        () => {
            fetch("http://localhost:8088/customers")
                .then(res => res.json())
                .then((data) => {
                    updateCustomers(data)
                })
        },
        []
    )

    return (
        <>
            {
                customers.map(
                    (customer) => {
                        return <div key={`customer--${customer.id}`}>
                            <p>{customer.name}'s email address is {customer.email}</p>
                             
                            </div>
                    }
                )
            }
        </>
    )
}