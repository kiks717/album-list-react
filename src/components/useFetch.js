import { useEffect,useState } from 'react'
import axios from 'axios'

function useFetch(url) {
    const [data,setData] = useState([])//not all data will be the same 
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)
    useEffect(() => {
        setLoading(true)

        axios
        .get(url)
        .then((response) => {
            setData(response.data)
        })
        .catch((err) => {
            setError(err)
        })
        .finally(() => {
            setLoading(false)
        } )
    },[url])


    const refetch = () => {
        setLoading(true)

        axios
        .get(url)
        .then((response) => {
            setData(response.data)
        })
        .catch((err) => {
            setError(err)
        })
        .finally(() => {
            setLoading(false)
        } )
    }
    return {data, loading, error, refetch};
}

export default useFetch
