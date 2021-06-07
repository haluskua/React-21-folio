import React from 'react';
import Header from './Header';
import Particles from './Particles';

import FrontCard from '../components/3D/index';

const Home = () => {
    return (
        <React.Fragment>
            {/* <Header /> */}
            <Particles />
            <FrontCard />
        </React.Fragment>
    );
};

export default Home;