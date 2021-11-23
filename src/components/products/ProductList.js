import React, { useEffect, useState } from "react"

export const ProductsList = () => {
    const [products, updateProducts] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/products?_expand=productType")
                .then(res => res.json())
                .then((data) => {
                    updateProducts(data)
                })
        },
        []
    )

    // useEffect(() => {
    //     const justSpecialities = serviceTickets.map(employee => employee.specialty)
    //     setSpecial(justSpecialities.join(", "))
    // }, [employees])

    return (
        <>
            {/* <div>
                Specialties: { specialties }
            </div> */}
            {
                products.map(
                    (product) => {
                        return <div key={`product--${product.id}`}>
                            <p>Item {product.id} is {product.name}, a type of {product.productType.type} and costs ${product.price}</p>
                             
                            </div>
                    }
                )
            }
        </>
    )
}