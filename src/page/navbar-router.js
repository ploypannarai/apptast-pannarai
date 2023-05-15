import React from 'react'
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom'
import Product from './product';
import Home from './home';
import Member from './member';
import Footer from './footer';

export default function NavBatRouter() {
    return (
        <div>
            <BrowserRouter>
            <nav class="navbar navbar-expand-sm bg-light">
                    <div class="container-fluid">
                        <ul class="navbar-nav">
                        <img src="./images/99.jpg" alt="width=40" height="40"/> &nbsp;
                            <li class="nav-item">
                                <NavLink to="/" className="nav-link active" href="#">
                                    Home
                                </NavLink>
                            </li>

                            <li class="nav-item">
                                <NavLink to="/product" className="nav-link active" href="#">
                                    Product
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to="/member" className="nav-link active" href="#">
                                    Member
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/member" element={<Member />} />
                    <Route path="/footer" element={<Footer />} />

                </Routes>
            </BrowserRouter>
        </div>
    );
}