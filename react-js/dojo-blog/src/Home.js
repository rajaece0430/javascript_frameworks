import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

  /*
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ]);
  */

  const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

  const [name,setName] = useState("Raj");

  /*
  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  /*
  useEffect(() => {
    console.log("Use effect ran");
    console.log(name);
  },[name]); //adding empty array, it won't be called on every state change
*/
 
//fetch data from json-server
/*
useEffect(() => {
  console.log("use effect ran");
  fetch('http://localhost:8000/blogs')
  .then(res => {
    //console.log(res)
    if(!res.ok){
      throw Error('Unable to fetch the data from that resouce');
    }
    return res.json();
  })
  .then(data => {
    //console.log(data);
    setBlogs(data);
    setIsPending(false);
    setError(null);
  })
  .catch( err => {
    setIsPending(false);
    setError(err.message);

  })
},[])

*/
      return ( 
       <div className="home"> 
       
       {/* <BlogList blogs={blogs} title="All the Blogs" handleDelete={handleDelete}/>
       <button onClick={() => setName("Shekhar")}>Change Name</button>
       <p>{ name }</p> */}
       
       {error && <div>{error}</div>}
       {isPending && <div>Loading...</div>}
       {blogs && <BlogList blogs={blogs} title="All the Blogs"/>}
       </div>
     );
}
 
export default Home;
