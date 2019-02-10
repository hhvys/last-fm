import React, {useState, useEffect} from 'react';

import ThumbnailContainer from '../../components/Thumbnail/ThumbnailContainer';
import {fetchFromGenre} from '../../api/lastFmServices';
import {imageSize} from "../../api/constants";
import {getImageUrl} from "../../helpers/getSubComponentInstance";

const AlbumContainer = (props) => {
    const {
        genre,
        ...restProps
    } = props;
    const [albumDetails,
        artistDetails,
        albumsLoading,
        artistsLoading] = useFetchAlbumArtist(genre);

    return (
        <div className={'d-flex w-100'}>
            <ThumbnailContainer
                headerText={'Top Albums'}
                headerUrl={`top-albums/${genre}`}
                nThumbnailsInRow={5}
                thumbnailDetails={albumDetails}
                style={{width: '70%'}}
                headerButtonText={'More'}
                isLoading={albumsLoading}
                {...restProps}/>
            <ThumbnailContainer
                headerText={'Top Artists'}
                headerUrl={`top-artists/${genre}`}
                nThumbnailsInRow={3}
                thumbnailDetails={artistDetails}
                style={{width: '30%'}}
                headerButtonText={'More'}
                isLoading={artistsLoading}
                {...restProps}/>
        </div>);
};

function useFetchAlbumArtist(genre) {

    const [albumDetails, setAlbumDetails] = useState([]);
    const [artistDetails, setArtistDetails] = useState([]);
    const [albumsLoading, setIsAlbumsLoading] = useState(true);
    const [artistsLoading, setIsArtistsLoading] = useState(true);

    useEffect(() => {
        setIsAlbumsLoading(true);
        setIsArtistsLoading(true);

        //todo refactor
        fetchFromGenre('album', genre)
            .then(albums => {
                setAlbumDetails(albums.albums.album.map((album, index) => {
                    return ({
                        key: index,
                        imgSrc: getImageUrl(album, imageSize.LARGE),
                        albumUrl: '#',
                        metaText: album.artist.name,
                        albumName: album.name,
                    });
                }));
                setIsAlbumsLoading(false);
            });

        fetchFromGenre('artist', genre, 20)
            .then(artists => {
                setArtistDetails(artists.topartists.artist.map((artist, index) => {
                    return ({
                        key: index,
                        imgSrc: getImageUrl(artist, imageSize.LARGE),
                        albumUrl: '#',
                        albumName: artist.name,
                    })
                }));
                setIsArtistsLoading(false);
            });

    }, [genre]);

    return [albumDetails,
        artistDetails,
        albumsLoading,
        artistsLoading];
}

export default AlbumContainer;
