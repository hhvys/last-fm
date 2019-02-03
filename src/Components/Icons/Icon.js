import React from 'react';
import * as svgPaths from './svgPaths';


const getIcon = (iconType) => {
    return svgPaths[iconType];
};

const Icon = (props) => {
    const {
        iconType,
        ...restProps
    } = props;

    return (
        <svg className={'d-flex justify-content-center'}
             {...restProps}>
            {getIcon(iconType)}
        </svg>
    );
};

Icon.defaultProps = {
    height: 20,
    width: 20,
};

export default Icon;
