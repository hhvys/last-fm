import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './AlbumThumbnail.module.scss';

const AlbumThumbnail = (props) => {

    const {
        albumUrl,
        albumName,
        imgSrc,
        metaText,
        metaUrl,
        ...restProps
    } = props;

    return (
        <div className={cx(styles.thumbnail, 'd-flex flex-column mr-4 mb-4')} {...restProps}>
            <a href={albumUrl}>
                <img src={imgSrc} alt=""/>
                <p className={'mb-0'}>{albumName}</p>
            </a>
            <a href={metaUrl} className={styles.meta}>{metaText}</a>
        </div>
    )
};

AlbumThumbnail.propType = {
    albumUrl: PropTypes.string,
    albumName: PropTypes.string,
    metaText: PropTypes.string,
    metaUrl: PropTypes.string,
    imgSrc: PropTypes.string
};


export default AlbumThumbnail;
