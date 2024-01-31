import Header from "./Header"
import { Outlet } from "react-router-dom"
const Layout = () => {
    return (
        <>
            <Header  />
            <Outlet />
            <main className="container content">
                
            </main>
            
        </>
    )
}
export {Layout}