import React from 'react';
import cx from "classnames";

import {Link} from "react-router-dom";
import styles from './Button.module.scss';

const Button = (props) => {
    const {
        toUrl,
        text,
        ...restProps
    } = props;
    return(
        <button className={cx(styles.button, 'px-3 py-1')} {...restProps}>
            <Link to={toUrl}>{text}</Link>
        </button>
    )
};


export default Button;
