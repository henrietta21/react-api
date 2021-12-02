import axios from 'axios';
import React,{ useEffect, useState } from 'react'

function FetchData() {
    const [data, setData]= useState([])
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            // .then(res => res.json())
            .then(res => setData(res.data))
            .catch(err => setError(err));
        }
         , []);
      
    return (
        <div>
            <ul>
                {data.map((e,key) => (
                    <li key={e.id}>
                     {e.name}
                    </li>
                ))
                }
            </ul> 
        </div>
    )
}

export default FetchData
