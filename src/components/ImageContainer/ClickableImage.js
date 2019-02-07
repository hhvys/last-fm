import React from 'react';
import cx from 'classnames';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './ClickableImage.module.scss';

const ClickableImage = (props) => {

    const {
        imageUrl,
        imageSrc,
        imageText,
        metaText,
        ...restProps
    } = props;

    return (
        <Link to={imageUrl} className={cx(styles.container, 'd-flex my-1 align-items-center')}>
            <img className={styles.img} src={imageSrc} alt={''} {...restProps}/>
            <div className={cx('ml-3 txt-ellipsis')}>
                <p className={'txt-ellipsis mb-1'}>{imageText}</p>
                <p className={'txt-ellipsis'}><span>{metaText}</span></p>
            </div>
        </Link>
    );
};

ClickableImage.defaultProps = {
    imageUrl: '#'
};

ClickableImage.propType = {
    imageUrl: PropTypes.string,
    imageSrc: PropTypes.string,
    imageText: PropTypes.string,
    metaText: PropTypes.string
};

export default ClickableImage;
