import React from 'react';
import cx from 'classnames';

import FooterColumn from './FooterColumn';
import styles from './Footer.module.scss';
import getSubComponentInstance from "../../helpers/getSubComponentInstance";

const renderSubComponents = (props, subComponent) => {
    const instancesOfSubComponent = getSubComponentInstance(props.children, subComponent);
    if (!instancesOfSubComponent.length)
        return null;
    return (
        instancesOfSubComponent.map((instance, index) =>
            <FooterColumn key={index} {...instance.props}/>
        )
    );
};

const Footer = (props) => {
    const {
        children,
        ...restProps
    } = props;

    return (
        <footer className={cx(styles.footer, 'd-flex w-100')} {...restProps}>
            <div className={cx(styles.innerFooter, 'w-100 pt-4 d-flex')}>
                {renderSubComponents(props, FooterColumn)}
            </div>
        </footer>
    );
};

Footer.Column = FooterColumn;

export default Footer;
