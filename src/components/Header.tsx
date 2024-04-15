import {FunctionComponent} from "react";
import classes from './Header.module.scss'

export const Header: FunctionComponent = () => {
    console.log(classes)
    return (
        <div className={classes.testModule}>
            <span>my arctiles</span>
            <span>all articles</span>
            <span>profile</span>
            <span>add article</span>
        </div>
    )
}