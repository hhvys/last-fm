import React from 'react';
import PropTypes from 'prop-types';

import Thumbnail from "./Thumbnail";

const ThumbnailContainer = (props) => {

    const {
        children,
        thumbnailDetails,
        nThumbnailsInRow,
        ...restProps
    } = props;

    const thumbnailSize = 90 / nThumbnailsInRow + '%'; //todo

    return (
        <div className={'d-flex flex-wrap align-content-start justify-content-between'} {...restProps}>
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
    )
};

ThumbnailContainer.propType = {
    thumbnailDetails: PropTypes.arrayOf(PropTypes.shape({
        imgSrc: PropTypes.string,
        albumUrl: PropTypes.string,
        metaText: PropTypes.string,
        albumName: PropTypes.string,
        metaUrl: PropTypes.string,
    }))
};

export default ThumbnailContainer;
