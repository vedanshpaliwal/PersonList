import React, { useState, useEffect } from 'react'
import HeroCard from './HeroCard/HeroCard'
import Cards from './HeroCard/PersonCards/Cards'

export default function Home() {
    const [datapreview, setdatapreview] = useState({});
    const [result, setResult] = useState(null)
    useEffect(() => {

        handledata()

    }, [])

    const handledata = async () => {
        let url = `https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20`
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(result == null)
        setResult(parsedData.results);
        setdatapreview(parsedData.results[0])
        console.log(parsedData.results[0])
    }
    return (
        result ? (<div style={{ width: "80%", margin: '0 auto', paddingBottom: 150 }}>
            <div style={{ maxWidth: 1519, margin: '0 auto' }}>
                <HeroCard data={datapreview} />
            </div>
            <div style={{ marginTop: 120, cursor: 'pointer' }}>
                <Cards datapreview={datapreview} setdatapreview={setdatapreview} result={result} />
            </div>
        </div>) :
            (<div className='loading'>
                Loading...
            </div>)
    )
}
