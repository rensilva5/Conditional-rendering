import React, { useState } from "react";

function Coffee() {
    const [coffeeList, setCoffeeList] = useState()
    const getCoffee = (temperature) => {
        // fetch coffee api
        fetch(`https://api.sampleapis.com/coffee/${temperature}`)
        .then(results => results.json())
        .then(data => setCoffeeList(data))
        .catch(err => alert(err))
        // results -> setCoffeeList
    }
    return (
        <>
            <button onClick={()=> getCoffee ('hot')}>HOT</button>
            <button onClick={() => getCoffee ('ice')}>ICE</button>
            <section>
                <h2>Coffee List</h2>
                {!coffeeList
                    ? <p>Loading...</p>
                    : coffeeList.map(coffee => (
                    <p key={coffee.id}>{coffee.title}</p>
                    ))
                }
            </section>
        </>
    )


}

export default Coffee