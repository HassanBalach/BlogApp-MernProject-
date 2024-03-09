import Post from "../Post/Post";

import "./Posts.css";

function Posts({posts}) {
   if(!Array.isArray(posts)){
     return null || <div>No posts Available</div>
   }


  return (
    
      <div className="posts">
       {posts.map((p)=>(
        <Post  key={p._id} post={p}/>
       ))}
      </div>

  );
}

export default Posts;
