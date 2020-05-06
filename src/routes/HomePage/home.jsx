import React from 'react';
import Jumbotron from './Jumbotron/jumbotron';
import Stack from './Stack/stack';
import Work from './Work/work';

const HomePage = () => {
    return (
        <React.Fragment>
            <Jumbotron />
            <Stack />
            <Work />
        </React.Fragment>
    );
};

export default HomePage;