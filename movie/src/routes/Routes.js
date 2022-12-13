import {BrowserRouter, Routes, Route} from "react-router-dom"
import Details from "../details/Details"
import Main from "../mainSection/Main"


const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route index element={<Main />} />
            <Route path="/details/:id" element={<Details />} />
        </Routes>
        </BrowserRouter>
    )
}

export default Router