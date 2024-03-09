import { Link } from "react-router-dom";
import "./Post.css";

export default function Post({post}) {
  return (
    <div className="postContainer">
      <div className="PostInfo">
        
        <img
          className="postImg"
          src="https://images.squarespace-cdn.com/content/v1/5bfc8dbab40b9d7dd9054f41/1553659402931-Z5F85J8VCBUOFXJTA6K3/strata.jpg"
          alt=""
        />
        <div className="postCate">
          {post.categories.map((cat)=>(
            <span>{cat.name}</span>
            
          ))}
        
        </div>
        <Link to={`/post/${post._id}`} className="link">
        <div className="postTitle">
          <h1>{post.title}</h1>
        </div> 
        </Link>
      
      <div className="postDate">
        <p>{new Date(post.createdAt).toDateString()}</p>
      </div>
      <div className="postDesc">
        <p>
         {post.description}
        </p>
        </div>
      </div>
    </div>
  );
}
