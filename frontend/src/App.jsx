import { Routes, Route } from 'react-router-dom'
//import AdminDashboard from './pages/AdminDashboard'
import AdminLogin from './pages/AdminLogin'
//import Cart from './pages/Cart'
//import Delivery from './pages/Delivery'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import PasswordReset from './pages/PasswordReset'
import ProductDetails from './pages/ProductDetails'
import Register from './pages/Register'
//import Summary from './pages/Summary'
//import UserDashboard from './pages/UserDashboard'

import './App.css'

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/product_details" element={<ProductDetails />} />
                <Route path="/login" element={<Login />} />
                <Route path='/admin' element={<AdminLogin />} />
                <Route path="/register" element={<Register />} />
                <Route path='/password_reset' element={<PasswordReset />} />
            </Routes>
        </>
    )
}

export default App
