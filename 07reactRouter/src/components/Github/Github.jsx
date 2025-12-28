import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/areeb62')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data)
    //         })
    // }, [])
    return (
        <div>Github username: {data.login}
            <img src={data.avatar_url} alt="" width={300} />
        </div>
    )
}

export default Github

export const githubInfo = async () => {
    const response = await fetch('https://api.github.com/users/areeb62')
    return response.json()
}
