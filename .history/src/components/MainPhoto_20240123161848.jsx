import { useEffect, useState } from "react"

export default function MainPhoto () {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchUsers() {
            setLoading(true)
            const response = await
        }
    })

    return (
        <div>
            <h4>Main Photo</h4>
        </div>
    )
}

