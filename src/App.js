import React from "react";
import Header from "./Components/Header"
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Home from "./Components/Home";
import { DataContext } from "./Components/Blog_Context";
import Display from "./Components/Display";
import Article from "./Components/Article";
import "./Components/style.css"
import Footer from "./Components/Footer";

const App = () => {
    return(
        <>
        <DataContext>
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Navigate to="/home"/>}/>
                    <Route path="/home" element={<Home />}/>
                    <Route path="/category/:selected" element={<Display />}>
                        
                    </Route>
                    <Route path="/category/:selected/:selectedID" element={<Article />}/>
                </Routes>
                <Footer />
            </Router>
        </div>
        </DataContext>
        </>
    );
};

export default App;