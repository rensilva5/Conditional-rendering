import React from "react";
import StudentCard from "./StudentCard";

const student = {
    name: 'Khali Gopaul',
    age: 37,
    id: "re462354",
    term: 'sec07',
}
function Main ({name}) {
    return (
        <main>
            <h1>Hello {name}</h1>
            {name && <StudentCard student = {student}/>}
        </main>
        // <nav>
        //     <h1>Main</h1>
        // </nav>
    )
}
export default Main

