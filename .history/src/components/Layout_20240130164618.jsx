import Header from "./Header"
import { Outlet } from "react-router-dom"
const Layout = () => {
    return (
        <>
            
            <main className="container content">
                <Outlet />
            </main>
            
        </>
    )
}
export {Layout}