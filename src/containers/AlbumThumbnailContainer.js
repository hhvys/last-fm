import React, {useState, useEffect} from 'react';

import ThumbnailContainer from '../components/Thumbnail/ThumbnailContainer';
import {fetchAlbumsFromGenres} from '../api/lastFmServices';
import {imageSize} from "../api/constants";

const AlbumContainer = (props) => {
    const {
        genre,
        ...restProps
    } = props;
    const albumDetails = useFetchAlbumsOfGenre(genre);

    return (<ThumbnailContainer nThumbnailsInRow={7} thumbnailDetails={albumDetails} {...restProps}/>);
};

const getImageUrl = (album, size) => album.image[size]['#text'];

function useFetchAlbumsOfGenre(genre) {

    const [albumDetails, setAlbumDetails] = useState([]);

    useEffect(() => {
        fetchAlbumsFromGenres(genre)
            .then(res => {
                const details = res.albums.album.map((album, index) => {
                    return ({
                        key: index,
                        imgSrc: getImageUrl(album, imageSize.LARGE),
                        albumUrl: '#',
                        metaText: album.artist.name,
                        albumName: album.name,
                    });
                });
                setAlbumDetails(details);
            });
    }, [genre]);

    return albumDetails;
}

export default AlbumContainer;
