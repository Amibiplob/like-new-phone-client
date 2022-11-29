import React from 'react';
import AdvertisedItem from './AdvertisedItem';
import Bannar from './Bannar';
import Category from './Category';
import Contract from './Contract';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Category></Category>
            <AdvertisedItem></AdvertisedItem>
            <Contract></Contract>
        </div>
    );
};

export default Home;