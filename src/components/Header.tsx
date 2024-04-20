import React, {FunctionComponent} from "react";
import classes from './Header.module.scss'
import {NavLink} from "react-router-dom";
import {useTheme} from "../theme/useTheme";

export const Header: FunctionComponent = () => {
    const {toggleTheme} = useTheme();

    return (
        <header className={classes.wrapper}>
            <h1>Mambet Pages</h1>

            <nav className={classes.nav}>
                <NavLink to='/'>all articles</NavLink>
                <NavLink to='/my-articles'>my articles</NavLink>
                <NavLink to='/add-article'>add article</NavLink>
                <NavLink to='/profile'>profile</NavLink>
            </nav>
            <button onClick={toggleTheme}>click theme</button>
        </header>
    )
}