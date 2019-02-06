import React from 'react';
import styles from './Header.module.scss';
import cx from 'classnames';

import getSubComponentInstance from '../../helpers/getSubComponentInstance';

const HeaderLeft = () => null;
const HeaderRight = () => null;
HeaderLeft.displayName = 'Left';
HeaderRight.displayName = 'Right';

const renderSubComponents = (props, subComponent) => {
    const instancesOfSubComponent = getSubComponentInstance(props.children, subComponent);
    if (!instancesOfSubComponent.length)
        return null;

    return (
        instancesOfSubComponent.map((instance, index) => {
            const {
                children,
                ...restProps
            } = instance.props;

            return (
                <div className={'d-flex'} key={index} {...restProps}>
                    {children}
                </div>
            )
        })
    );
};


const Header = (props) => {
    const {
        children,
        ...restProps
    } = props;

    return (
        <header
            className={cx(styles.header, 'position-fixed d-flex justify-content-between align-items-center w-100')}
            {...restProps}
        >
            {renderSubComponents(props, HeaderLeft)}
            {renderSubComponents(props, HeaderRight)}
        </header>
    );
};


Header.Left = HeaderLeft;
Header.Right = HeaderRight;

export default Header;
