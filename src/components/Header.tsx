import React, {FunctionComponent} from "react";
import classes from './Header.module.scss'
import {NavLink} from "react-router-dom";
import {useTheme} from "../theme/useTheme";

export const Header: FunctionComponent = () => {
    const {toggleTheme} = useTheme();

    return (
       <div>hui<div/>
    )
}