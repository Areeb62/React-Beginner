import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/areeb62')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data)
            })
    }, [])
    return (
        <div>Github followers: {data.followers}
            <img src={data.avatar_url} alt="" width={300} />
        </div>
    )
}

export default Github