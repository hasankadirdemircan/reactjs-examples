import React from "react";
import { useState, useEffect } from "react"

export const Text = () => {
    const [text, setText] = useState("");

    useEffect(() => {
        console.log ("COMPONENT MOUNTED") // forexample, when someone open the page you can call api to show some data.
        //it start run firstly
        // every state changes, it runs

        return () => {
            console.log("COMPONENT UNMOUNTED") // for example, stop making requeest because it means, component closed from user's side
        }
    }, []) //if we don't want to run, every state change, add [], if we want runs every time. add [text]

    return(
        <div>
            <input onChange={(event) => {
                setText(event.target.value);
            }}></input>
            <h1>{text}</h1>
        </div>
    )
}