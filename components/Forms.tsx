'use client'

import React, { ChangeEvent, FormEvent, useState } from "react"

interface Error {
    msg: string[]
}

export default function Forms() {
    const [messageData, setMessageData] = useState({
        fullName: "",
        email: "",
        message: ""
    })
    const [errorMessage, setErrorMessage] = useState([])
    const [successStatus, setSuccessStatus] = useState(false)

    function handlerChange(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>, name: string) {
        setMessageData(previousValue => {
            return {
                ...previousValue,
                [name]: e.target.value
            }
        })
    }

    async function submitHandler(e: FormEvent) {
        e.preventDefault()

        console.log("submited")

        const res = await fetch("api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(messageData)
        })

        const {msg, success} = await res.json()
        setErrorMessage(msg)
        setSuccessStatus(success)

        if (success) {
            setMessageData({
                fullName: "",
                email: "",
                message: ""
            })
        }
    }

    return(<>
        <form onSubmit={submitHandler} className="py-4 mt-4 border-t flex flex-col gap-5">
            <div>
                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" name="fullName" 
                  placeholder="Your Full Name" 
                  onChange={e => handlerChange(e, "fullName")}
                  value={messageData.fullName}
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type='text' id="email" name="name" 
                  placeholder="youremail@here.com" 
                  onChange={e => handlerChange(e, "email")}
                  value={messageData.email}
                />
            </div>
            <div>
                <label htmlFor="message">Your Message</label>
                <textarea className="h-32" id="message" name="message" 
                  placeholder="Your Message Here" 
                  onChange={e => handlerChange(e, "message")}
                  value={messageData.message}  
                />
            </div>

            <button className="bg-green-700 p-3 text-white font-bold text-lg" type="submit">
                Send
            </button>

            <div className="bg-slate-300 flex flex-col">
                {errorMessage && errorMessage.map((message, i) => (
                    <p key={i} className={`${successStatus ? 'text-green-700': 'text-red-600'} px-5 py-2`}>{message}</p>
                ))}
            </div>
        </form>
    </>)
}