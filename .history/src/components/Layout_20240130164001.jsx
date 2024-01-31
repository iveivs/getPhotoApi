import { Header } from "./Header"
import { Outlet } from "react-router-dom"
const Layout = () => {
    return (
        <>
            <Header />
            <main className="container content">
                <Outlet />
            </main>
            

            <Footer/>
        </>
    )
}
export {Layout}