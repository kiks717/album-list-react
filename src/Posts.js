import React from 'react'

const Posts = ({posts,loading}) => {
    if(loading) return <h2>Loading posts, please wait...</h2>
  return (
    <ul>
        {posts.map((post) => (
            <div 
            key={post.id}>
              <p>{post.title}</p>
              <img 
              src={post.thumbnailUrl} 
              alt={post.title}/>
            </div>
        ))}
    </ul>
  )
}

export default Posts