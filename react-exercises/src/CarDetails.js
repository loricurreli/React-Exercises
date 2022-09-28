
import React, { useEffect, useRef, useState } from "react";

export const CarDetails = ({initialValues = {model: 'fiat panda', year:'2019', color: 'blue'}}) => {
    const carRef = useRef(null)
    const [rightValues,setRightValues] = useState(true)

    useEffect(() => {
        carRef.current.elements.model.value = initialValues.model
        carRef.current.elements.year.value = initialValues.year
        carRef.current.elements.color.value = initialValues.color
    }, [])
    useEffect(() => {
        if(rightValues === false){
            carRef.current.elements.model.value = ''
            carRef.current.elements.year.value = ''
            carRef.current.elements.color.value = ''
        }
        else return
    }, [rightValues])

    const handleChange = () => {
        setRightValues(false)
    }

    return(
        <div>
            <h1>Details</h1>
            <form ref={carRef} onChange={handleChange}>
                <input type="text" name="model" />
                <input type="text" name="year" />
                <input type="text" name="color" />
            </form>
        </div>
    )

}