import { useState } from "react"
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'my blog', body: 'ohn gloria inm', author: 'charly', id: 1 },
        { title: 'welcome everyone', body: 'always himno', author: 'Colombia', id: 2 },
        { title: 'my itythom', body: 'Inmarcecible', author: 'Nation', id: 3 }, 
    ])

    return (
        <div className="Home">
            <BlogList blogs={blogs} title='All blogs'/>
        </div>
    );
}
 
export default Home