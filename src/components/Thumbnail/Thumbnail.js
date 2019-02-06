import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {Link} from 'react-router-dom';

import styles from './Thumbnail.module.scss';

const Thumbnail = (props) => {

    const {
        albumUrl,
        albumName,
        imgSrc,
        metaText,
        metaUrl,
        size,
        ...restProps
    } = props;

    return (
        <div className={cx(styles.thumbnail, 'txt-ellipsis d-flex flex-column mr-4 mb-4')}
             style={{width: size}} {...restProps}>
            <Link to={albumUrl} className={cx(styles.albumUrl, 'txt-ellipsis')}>
                <img src={imgSrc} alt=""/>
                <p className={'mb-0 txt-ellipsis'}>{albumName}</p>
            </Link>
            <a href={metaUrl} className={styles.meta}>{metaText}</a>
        </div>
    )
};

Thumbnail.propType = {
    albumUrl: PropTypes.string,
    albumName: PropTypes.string,
    metaText: PropTypes.string,
    metaUrl: PropTypes.string,
    imgSrc: PropTypes.string
};


export default Thumbnail;
