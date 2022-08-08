import React from "react";

export default function Main (props) {
    const {name, total, isAmazing, fruit} = props;
    return (
        <main>
            <h1>Hello {name}</h1>
            <h2>Total {total}</h2>
            {isAmazing && <h2>Fruit: {fruit} </h2>}
        </main>
        // <nav>
        //     <h1>Main</h1>
        // </nav>
    )
}