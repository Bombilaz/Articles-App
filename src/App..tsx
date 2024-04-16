import React, {Suspense} from "react";
import {Header} from "./components/Header";
import './index.scss';
import { Route, Routes } from "react-router-dom";
import {
    AllArticlesAsync,
    AddArticleAsync,
    MyArticlesAsync,
    ProfileAsync
} from "./pages";

export const App = () => {
    return (
        <>
            <Header />
            <Suspense fallback={<div>Загрузка.....</div>}>
                <Routes>
                    <Route path='/' element={<AllArticlesAsync />} />
                    <Route path='/my-articles' element={<MyArticlesAsync />} />
                    <Route path='/add-article' element={<AddArticleAsync />} />
                    <Route path='/profile' element={<ProfileAsync />} />
                </Routes>
            </Suspense>
        </>
    )
}