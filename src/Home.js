import { useState, useEffect } from "react";
import BlogList from "./BlogList";


const Home = () => {

  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'Lorem ipsum...', author: 'David', id: 1},
    { title: 'Welcome party', body: 'Lorem ipsum...', author: 'Peter', id: 2},
    { title: 'Web dev top tips', body: 'Lorem ipsum...', author: 'Fidelis', id: 3}
  ]);

  const [name, setName] = useState('David');

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() => {
    console.log('UseEffect ran');
    console.log(name);
  }, [name]);

  return ( 
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
      {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'David')} title="David's Blogs" /> */}
      <button onClick={() => setName("Peter")}>Change name</button>
      <p>{ name }</p>
    </div>
  );
}
 
export default Home;