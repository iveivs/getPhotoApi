import { useCallback } from "react"
import { useEffect, useState } from "react"

export default function MainPhoto () {
    const ACCESS_KEY = 'ZfkCzoiCL-WeQxe4kCEp_iO2qAvzuq62JYpghzyUKAg'
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState()

    // const fetchPhoto = useCallback( async () => {
    //     setLoading(true)
    //     // const response = await fetch('7msaJQrVXTXtNYxQJxqyA5wVkdmcbhT3-RXzltpxC8M')
    //     const response = await fetch ('https://jsonplaceholder.typicode.com/todos/1')
    //     const data = await response.json()
    //     setData(data)
    //     setLoading(false)
    // }, [])

    
    // useEffect(() => {
    //     async function fetchPhoto() {
    //         setLoading(true)
    //         const response = await fetch(
    //             `https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}`
    //         );
    //         const data = await response.json();
    //         setData(data);
    //         setLoading(false)
    //         console.log('data', data);
            
    //     }
    //     fetchPhoto()
    // }, []);

    
    return (
        <div>
            <h4>Main Photo</h4>
            {/* <img src={data.urls.regular} alt="" /> */}
            {loading && <p>Loading...</p>}
            {/* {!loading && <img src={data.urls.regular} alt="" />} */}
            <button onClick={() => {console.log('clickk');}}>NEXT</button>
        </div>
    )
}

