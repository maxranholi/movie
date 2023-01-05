import {BrowserRouter, Routes, Route} from "react-router-dom"
import Details from "../pages/details/Details"
import Main from "../homePage/HomePage"


const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route index element={<Main />} />
            <Route path="/home" element={<Main />} />
            <Route path="/details/:id" element={<Details />} />
        </Routes>
        </BrowserRouter>
    )
}

export default Router