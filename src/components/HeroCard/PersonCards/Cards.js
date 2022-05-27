import React, { useEffect, useState } from 'react'
import Card from './Card'

export default function Cards({ datapreview, setdatapreview, result }) {
    const [selected, setSelected] = useState(0)
    const handleclick = (data, index) => {
        setdatapreview(data)
        setSelected(index)
    }
    return (
        <>

            <div className='handlecards'>
                {


                    result.map((data, index) => (
                        <div key={index}>
                            <span onClick={() => handleclick(data, index)}>  < Card selected={selected == index} gender={data.gender} title={data.name.title} fname={data.name.first} lname={data.name.last} email={data.email} />
                            </span>
                        </div>
                    ))


                }
            </div>



        </>
    )
}
