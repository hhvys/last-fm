import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

import styles from './NavigationRow.module.scss';


//todo activeLink
const NavigationRow = (props) => {

    const {
        navigationTabs,
    } = props;

    return (
        <nav>
            <ul className={cx(styles.row, 'd-flex flex-wrap justify-content-center mb-4')}>
                {
                    navigationTabs &&
                    navigationTabs.map((item, index) => (
                        <li key={index} className="mr-3 ml-3 pt-2 pb-2 text-center">
                            <NavLink to={`/${item.name}`} activeClassName={styles.activeLink}>
                                {item.name}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
};

NavigationRow.propType = {
    navigationTabs: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string
    }))
};

export default NavigationRow;
