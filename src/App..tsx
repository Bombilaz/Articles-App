import React, {Suspense} from "react";
import {Header} from "./components/Header";
import './styles/index.scss';
import { Route, Routes } from "react-router-dom";
import {
    AllArticlesAsync,
    AddArticleAsync,
    MyArticlesAsync,
    ProfileAsync
} from "./pages";
import {useTheme} from "./theme/useTheme";

export const App = () => {
    const {theme} = useTheme()

    return (
        <div className={`app ${theme}`}>
            <Header />

            <Suspense fallback={<div>Загрузка.....</div>}>
                <Routes>
                    <Route path='/' element={<AllArticlesAsync />} />
                    <Route path='/my-articles' element={<MyArticlesAsync />} />
                    <Route path='/add-article' element={<AddArticleAsync />} />
                    <Route path='/profile' element={<ProfileAsync />} />
                </Routes>
            </Suspense>
        </div>
    )
}