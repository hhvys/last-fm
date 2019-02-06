import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import cx from 'classnames';

import Thumbnail from "./Thumbnail";
import styles from './ThumbnailContainer.module.scss';
import loading from '../../rsc/loading.gif';

const ThumbnailContainer = (props) => {

    const {
        children,
        headerText,
        headerUrl,
        headerButtonText,
        thumbnailDetails,
        nThumbnailsInRow,
        isLoading,
        ...restProps
    } = props;

    const thumbnailSize = 100 / nThumbnailsInRow + '%';
    return (
        isLoading ?

            (<div {...restProps}>
                <img style={{width: '90%'}} src={loading} alt={""}/>
            </div>) :

            (<div {...restProps}>
                <div className={cx(styles.header, 'mb-3 d-flex align-items-baseline')}>
                    <Link to={headerUrl} className={cx('mr-3')}>{headerText}</Link>
                    <button className={cx(styles.button, 'px-3 py-1')}>
                        <Link to={headerUrl}>{headerButtonText}</Link>
                    </button>
                </div>

                <div className={'d-flex flex-wrap align-content-start justify-content-center'}>
                    {
                        thumbnailDetails.map(thumbnail => (
                            <Thumbnail
                                size={thumbnailSize}
                                key={thumbnail.key}
                                imgSrc={thumbnail.imgSrc}
                                albumUrl={thumbnail.albumUrl}
                                metaText={thumbnail.metaText}
                                albumName={thumbnail.albumName}
                                metaUrl={thumbnail.metaUrl}
                            />
                        ))
                    }
                    {children}
                </div>
            </div>)
    )
};

ThumbnailContainer.defaultProps = {
    nThumbnailsInRow: 3
};

ThumbnailContainer.propType = {
    thumbnailDetails: PropTypes.arrayOf(PropTypes.shape({
        imgSrc: PropTypes.string,
        albumUrl: PropTypes.string,
        metaText: PropTypes.string,
        albumName: PropTypes.string,
        metaUrl: PropTypes.string,
    })),
    headerText: PropTypes.string,
    headerUrl: PropTypes.string,
    headerButtonText: PropTypes.string,
    nThumbnailsInRow: PropTypes.number,
    isLoading: PropTypes.bool
};

export default ThumbnailContainer;
