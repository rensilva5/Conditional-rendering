

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1>My Own Blog</h1>
            <div className="Links">
                <a href="/">Home</a>
                {/* <br/> */}
                <a href="/create"
                //     style={{
                //     color: "white",
                //     backgroundColor: "#f1356d",
                //     borderRadius: "8px"
                // }}
                >New Blog</a>
            </div>
        </nav>

    )
}

export default Navbar