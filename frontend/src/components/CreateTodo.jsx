import { useState } from "react"

export function CreateTodo(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div>
            <input style={{
                padding: 10,
                margin :10,
            }} type="text" placeholder = "Title"
            onChange={function(e) {
                const value = e.target.value;
                setTitle(value);
            }}
            />
            <br />
            <input style={{
                padding: 10,
                margin :10,
            }}  type="text" placeholder = "Description"
            onChange={function(e) {
                const value = e.target.value;
                setDescription(value);
            }}
            />
            <br />
            <button style={{
                padding: 10,
                margin :10,
            }}  onClick={() => {
                fetch("http://localhost:4000/todo", {
                    method: "POST",
                    body: JSON.stringify({
                        title,
                        description
                    }),
                    headers: {
                        "Content-type": "application/json"
                    }
                }).then(
                    async function(res) {
                        const json = await res.json();
                        alert("Todo added");
                    }
                )
            }} >Add a todo</button>
        </div>
    )
}