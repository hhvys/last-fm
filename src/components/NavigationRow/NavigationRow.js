import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import styles from './NavigationRow.module.scss';

const NavigationRow = (props) => {

    const {
        navigationTabs,
    } = props;

    return (
        <ul className={cx(styles.row, 'd-flex flex-wrap justify-content-center mb-4')}>
            {
                navigationTabs &&
                navigationTabs.map((item, index) => (
                    <li key={index} className="mr-3 ml-3 pt-2 pb-2 text-center">{item.name}</li>
                ))
            }
        </ul>
    )
};

NavigationRow.propType = {
    navigationTabs: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string
    }))
};

export default NavigationRow;
