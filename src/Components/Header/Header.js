import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Header.module.scss';
import cx from 'classnames';

import getSubComponentInstance from '../../helpers/getSubComponentInstance';

const HeaderLeft = () => null;
const HeaderRight = () => null;
HeaderLeft.displayName = 'Left';
HeaderRight.displayName = 'Right';

const renderSubComponent = (props, subComponent) => {
    const instanceOfSubComponent = getSubComponentInstance(props.children, subComponent);
    if (!instanceOfSubComponent)
        return null;
    const {
        children,
        ...restProps
    } = instanceOfSubComponent.props;
    return (
        <div className={'d-flex'} {...restProps}>
            {children}
        </div>
    );
};


const Header = (props) => {
    const {
        children,
        ...restProps
    } = props;

    return (
        <header
            className={cx(styles.header, 'd-flex justify-content-between align-items-center w-100')}
            {...restProps}
        >
            {renderSubComponent(props, HeaderLeft)}
            {renderSubComponent(props, HeaderRight)}
        </header>
    );
};


Header.Left = HeaderLeft;
Header.Right = HeaderRight;

export default Header;
