import React from 'react';
import AlbumThumbnail from "./AlbumThumbnail";

const ThumbnailContainer = (props) => {
    const {
        children,
        ...restProps
    } = props;
    return (
        <div className={'d-flex flex-wrap align-content-start'} {...restProps}>
            <AlbumThumbnail
                imgSrc={'https://c.saavncdn.com/987/BIBA-English-2019-20190201201359-150x150.jpg'}
                albumUrl={'google.com'}
                metaText={'metaText'}
                albumName={'albumName'}
                metaUrl={'hh'}
            />
            <AlbumThumbnail
                imgSrc={'https://c.saavncdn.com/987/BIBA-English-2019-20190201201359-150x150.jpg'}
                albumUrl={'google.com'}
                metaText={'metaText'}
                albumName={'albumName'}
                metaUrl={'hh'}
            />
            <AlbumThumbnail
                imgSrc={'https://c.saavncdn.com/987/BIBA-English-2019-20190201201359-150x150.jpg'}
                albumUrl={'google.com'}
                metaText={'metaText'}
                albumName={'albumName'}
                metaUrl={'hh'}
            />
            <AlbumThumbnail
                imgSrc={'https://c.saavncdn.com/987/BIBA-English-2019-20190201201359-150x150.jpg'}
                albumUrl={'google.com'}
                metaText={'metaText'}
                albumName={'albumName'}
                metaUrl={'hh'}
            />
            <AlbumThumbnail
                imgSrc={'https://c.saavncdn.com/987/BIBA-English-2019-20190201201359-150x150.jpg'}
                albumUrl={'google.com'}
                metaText={'metaText'}
                albumName={'albumName'}
                metaUrl={'hh'}
            />
            <AlbumThumbnail
                imgSrc={'https://c.saavncdn.com/987/BIBA-English-2019-20190201201359-150x150.jpg'}
                albumUrl={'google.com'}
                metaText={'metaText'}
                albumName={'albumName'}
                metaUrl={'hh'}
            />
            <AlbumThumbnail
                imgSrc={'https://c.saavncdn.com/987/BIBA-English-2019-20190201201359-150x150.jpg'}
                albumUrl={'google.com'}
                metaText={'metaText'}
                albumName={'albumName'}
                metaUrl={'hh'}
            />
            <AlbumThumbnail
                imgSrc={'https://c.saavncdn.com/987/BIBA-English-2019-20190201201359-150x150.jpg'}
                albumUrl={'google.com'}
                metaText={'metaText'}
                albumName={'albumName'}
                metaUrl={'hh'}
            />
            <AlbumThumbnail
                imgSrc={'https://c.saavncdn.com/987/BIBA-English-2019-20190201201359-150x150.jpg'}
                albumUrl={'google.com'}
                metaText={'metaText'}
                albumName={'albumName'}
                metaUrl={'hh'}
            />
            <AlbumThumbnail
                imgSrc={'https://c.saavncdn.com/987/BIBA-English-2019-20190201201359-150x150.jpg'}
                albumUrl={'google.com'}
                metaText={'metaText'}
                albumName={'albumName'}
                metaUrl={'hh'}
            />
            <AlbumThumbnail
                imgSrc={'https://c.saavncdn.com/987/BIBA-English-2019-20190201201359-150x150.jpg'}
                albumUrl={'google.com'}
                metaText={'metaText'}
                albumName={'albumName'}
                metaUrl={'hh'}
            />
            <AlbumThumbnail
                imgSrc={'https://c.saavncdn.com/987/BIBA-English-2019-20190201201359-150x150.jpg'}
                albumUrl={'google.com'}
                metaText={'metaText'}
                albumName={'albumName'}
                metaUrl={'hh'}
            />
            {children}
        </div>
    )
};

export default ThumbnailContainer;
