import { useCallback } from "react"
import { useEffect, useState } from "react"

export default function MainPhoto () {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState()

    const fetchPhoto = useCallback( async () => {
        setLoading(true)
        // const response = await fetch('7msaJQrVXTXtNYxQJxqyA5wVkdmcbhT3-RXzltpxC8M')
        const response = await fetch ('https://jsonplaceholder.typicode.com/todos/1')
        const data = await response.json()
        setData(data)
        setLoading(false)
    }, [])

    useEffect(async () => {
        
        const response = await fetch ('https://jsonplaceholder.typicode.com/todos/1')
        const data = await response.json()
        setData(data)
    }, [])

    console.log('data', data);
    return (
        <div>
            <h4>Main Photo</h4>

        </div>
    )
}

