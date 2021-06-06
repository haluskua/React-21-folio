import React from 'react';
import Header from './Header';
import Particles from './Particles';

import NikeCard from '../components/3D/index';

const Home = () => {
    return (
        <React.Fragment>
            {/* <Header /> */}
            <Particles />
            <NikeCard />
        </React.Fragment>
    );
};

export default Home;