import React from 'react';

import Footer from '../../components/Footer/Footer';
import {useFetchTopCharts} from "../HomePage/HomePage";

const FooterContainer = (props) => {

    const artists = useFetchTopCharts('artist');
    const genres = useFetchTopCharts('tag');
    const tracks = useFetchTopCharts('track');

    return (
        <Footer {...props}>
            <Footer.Column
                header={'Top Songs'}
                itemList={genres}
            />
            <Footer.Column
                header={'Top Artists'}
                itemList={artists}
            />
            <Footer.Column
                header={'Top Tracks'}
                itemList={tracks}
            />
        </Footer>
    );
};

export default FooterContainer;
