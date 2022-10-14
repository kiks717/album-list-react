import useFetch from "../../components/useFetch";
import React from 'react'

const Photos = () => {
    const { data, loading, error} =
    useFetch('https://jsonplaceholder.typicode.com/photos ')
        //destructuring iako ne moram da koristim sve od
        //podataka vec samo ono sto mi je potrebno 
    
    if(loading) return <h2>Please wait, data is loading...</h2>
    if(error) console.log((error))
    console.log(data)
  return (
    <div>
            {data.map((photo) => (
                <div>
                    <img src={photo.thumbnailUrl}
                    alt={photo.title}/>
                </div>
            ) )}
    </div>
  )
}

export default Photos
