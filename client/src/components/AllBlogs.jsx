import React from "react"
import {Link} from "react-router-dom"


export default function AllBlogs(props) {
  const { posts, handleDelete, currentUser } = props



  return (
    <div>
      <h1>Posts</h1>
      {posts.map(post => (
        <React.Fragment key={post.id}>
          <p>{post.title}</p>
          {/* {console.log(post.user_id)} */}
          {console.log(currentUser)}

          {
            currentUser?.id === post.user_id &&
            <>
            <Link to={`posts/${post.id}/edit`}>
            <button>Edit</button>
            </Link>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
            
            </>
            
          }
        </React.Fragment>
      ))}

          
    </div>
  )
}