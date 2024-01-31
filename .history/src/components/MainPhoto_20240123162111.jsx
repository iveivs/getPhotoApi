import { useEffect, useState } from "react"

export default function MainPhoto () {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchUsers() {
            setLoading(true)
            const response = await fetch('7msaJQrVXTXtNYxQJxqyA5wVkdmcbhT3-RXzltpxC8M')
            const data = await response.json()
            
        }
    })

    return (
        <div>
            <h4>Main Photo</h4>
        </div>
    )
}

