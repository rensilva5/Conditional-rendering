import { useState } from 'react'
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "my pet web", body: "hie there", author: "ramiro", id: 1},
        { title: "Karma", body: "Once upon at timr", author: "Carlos", id: 2},
        { title: "My lider", body: "My new president", author: "Petrosky", id: 3}
    ])

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)

    }

    return ( 
        <div className="home">
            <BlogList blogs={ blogs } title='All Blogs!' handleDelete={ handleDelete }/>
            {/* <BlogList blogs={ blogs.filter ((blog) => blog.author === 'ramiro') } title={ "Ramiro's blogs" }/> */}

        </div>
     );
}
 
export default Home;