import {FunctionComponent} from "react";
import classes from './Header.module.scss'
import {NavLink} from "react-router-dom";

export const Header: FunctionComponent = () => {
    console.log(classes)
    return (
        <header className={classes.wrapper}>
            <h1>Mambet Pages</h1>

            <nav className={classes.nav}>
                <NavLink to='/'>all articles</NavLink>
                <NavLink to='/my-articles'>my articles</NavLink>
                <NavLink to='/add-article'>add article</NavLink>
                <NavLink to='/profile'>profile</NavLink>
            </nav>
        </header>
    )
}