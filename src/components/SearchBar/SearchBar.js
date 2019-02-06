import React from 'react';
import Icon from "../Icons/Icon";
import {SEARCH} from '../Icons/constants';
import cx from 'classnames';
import styles from './SearchBar.module.scss';

const SearchBar = (props) => {
    const {
        placeholder,
        children,
        ...restProps
    } = props;

    return (
        <div className={cx(styles.searchBar , 'd-flex align-items-center w-100')} {...restProps}>
            <Icon className={cx('mr-0 ml-2')} iconType={SEARCH} viewBox={"0 0 129 129"} height={17}/>
            <input className={cx(styles.input, 'pl-2 mr-4')} type="text" placeholder={placeholder}/>
        </div>

    );
};

export default SearchBar;
