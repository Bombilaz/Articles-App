import React from "react";
import {Header} from "./components/Header";
import './index.scss';
import { Route, Routes } from "react-router-dom";

export const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<div>all articles</div>} />
                <Route path='/my-articles' element={<div>my articles</div>} />
                <Route path='/add-article' element={<div>add article</div>} />
                <Route path='/profile' element={<div>profile</div>} />
            </Routes>
        </>
    )
}