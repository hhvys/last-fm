import React from 'react';
import PropTypes from 'prop-types';

import ClickableImage from "./ClickableImage";
import cx from "classnames";
import styles from "./ImageContainer.module.scss";
import Button from '../Button/Button';

const ImageContainer = (props) => {

    const {
        headerText,
        headerButtonUrl,
        headerButtonText,
        imageDetails,
        ...restProps
    } = props;

    return (
        <div className={cx(styles.container, 'd-flex flex-column m-2')} {...restProps}>
            <div className={cx(styles.header, 'd-flex justify-content-between align-items-center mb-2')}>
                <div>{headerText}</div>
                <div className={cx(styles.line, 'mx-2')}/>
                <Button toUrl={headerButtonUrl} text={headerButtonText}/>
            </div>
            <ul className={cx(styles.imgContainer, 'd-flex flex-column justify-content-between')}>
                {
                    imageDetails.map((image, index) => (
                        <li key={index}>
                            <ClickableImage
                                imageUrl={image.imageUrl}
                                imageSrc={image.imageSrc}
                                imageText={image.imageText}
                                metaText={image.imageMeta}/>
                        </li>
                    ))
                }
            </ul>

        </div>
    )
};

ImageContainer.prototype = {
    headerText: PropTypes.string,
    imageDetails: PropTypes.arrayOf(PropTypes.shape({
        imageUrl: PropTypes.string,
        imageSrc: PropTypes.string,
        imageText: PropTypes.string,
        imageMeta: PropTypes.string
    }))
};

export default ImageContainer;
