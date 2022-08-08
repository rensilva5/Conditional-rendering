import React, { useState } from "react";

function Coffee() {
    const [coffeeList, setCoffeeList] = useState()
    // const getCoffee = (temperature) => {
        // fetch coffee api
        // fetch(`https://api.sampleapis.com/coffee/${temperature}`)
        //.then(results => results.json())
        // .then(data => setCoffeeList(data))
        // .catch(err => alert(err));
    //}
    const getCoffeeSync = async (temperature) => {
        try {
        const results = await fetch(`https://api.sampleapis.com/coffee/${temperature}`);
        const data = await results.json();
        setCoffeeList(data);
    }
    catch(err){
        alert(err);
    }
}
    return (
        <>
            <button onClick={() => getCoffeeSync ('hot')}>HOT</button>
            <button onClick={() => getCoffeeSync ('iced')}>ICE</button>
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