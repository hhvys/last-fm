import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import Icon from "../Icons/Icon";
import {SEARCH} from '../Icons/constants';
import styles from './SearchBar.module.scss';

const SearchBar = (props) => {
    const {
        placeholder,
        children,
        onChange,
        searchQuery,
        ...restProps
    } = props;

    return (
        <div className={cx(styles.searchBar , 'd-flex align-items-center w-100')} {...restProps}>
            <Icon
                className={cx('mr-0 ml-2')}
                iconType={SEARCH}
                viewBox={"0 0 129 129"}
                height={17}/>
            <input
                className={cx(styles.input, 'pl-2 mr-4')}
                type="text"
                placeholder={placeholder}
                onChange={onChange}
                value={searchQuery}
            />
        </div>

    );
};

SearchBar.prototype = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    searchQuery: PropTypes.string
};

export default SearchBar;
