import React from "react"
import { Route } from "react-router-dom"
import { LocationsList } from "./locations/LocationsList";
import { ProductsList } from "./products/ProductList";
import { EmployeesList } from "./employees/EmployeeList";
import { HireForm } from "./employees/HireEmployee";
import { CustomerList } from "./customers/CustomerList";


export const ApplicationViews = () => {
    return (
        <>        

            <Route path="/locations">
                <h2>Current Locations</h2>
                <LocationsList />
            </Route>
            <Route path="/employee/create">
                 <HireForm />
            </Route>
            <Route path="/employees">
                <h2>Current Employees</h2>
                <EmployeesList />
            </Route>
            <Route path="/products">
                <h2>Current Candies in Stock</h2>
                <ProductsList />
            </Route>
            <Route path="/customers">
                <h2>Current Customers</h2>
                <CustomerList />
            </Route>

        </>
    )
}