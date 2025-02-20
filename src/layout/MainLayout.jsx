import { Outlet } from "react-router-dom"
import { Header } from "../pages/shared/Header/Header"
import { Footer } from "../pages/shared/Footer/Footer"

export const MainLayout = () => {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}
