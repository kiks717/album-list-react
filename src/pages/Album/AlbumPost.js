import { useParams } from 'react-router-dom'
import useFetch from '../../components/useFetch'

const AlbumPost = () => {
    const params = useParams()
    const {data,loading} = 
    useFetch(`https://jsonplaceholder.typicode.com/photos/${params.id}`)
    if(loading) return <h2>Loading photos, please wait...</h2>

    return (
    <div key={data.id}>

      <p>{data.title}</p>
      <img src={data.thumbnailUrl} alt="thumbnail"/>
    </div>
  )
}
export default AlbumPost
