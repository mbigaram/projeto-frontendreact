import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "../pages/Homepage"
import ProductPage from "../pages/ProductPage"
import SignupPage from "../pages/SignupPage"
import LoginPage from "../pages/LoginPage"
import data from '../data'



function Router() {
    const { products } = data;

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router 