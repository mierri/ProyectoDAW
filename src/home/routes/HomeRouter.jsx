import { Outlet, ScrollRestoration } from "react-router-dom"
import { Footer, Navbar } from "../ui";


export const HomeRouter = () => {
  return (
    <>
        <ScrollRestoration 
          getKey={(location, matches) => {
            return location.pathname;
          }}
        />

        <Navbar />

        <Outlet />

        <Footer />
    </>
  )
}