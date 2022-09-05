import { useState } from "react";
const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "My Website", body: "Welcome here wereu", author: "john", id: 1},
        {title: "My Blog", body: "Welcome here wereu", author: "john", id: 1},
        {title: "My Websites", body: "Welcome here wereu", author: "john", id: 1}
    ])
    return (
        <div className="home">
            <h2>Homepage</h2>
            {blogs.map((blog)=>(
                <div className="blog-preview" onKeyUpCapture={(blog.id)}>
                    <h2>{blog.author}</h2>
                    <p> Written by {blog.title}</p>
                </div>
            ))}
        </div>
      );
}
 
export default Home;