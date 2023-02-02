import React from 'react';
import Navigation from '../components/Navigation';
import Mouse from '../components/mouseMoove/Mouse';
import DynamicText from '../components/texteDynamic/DynamicText';
import SocialNetwork from '../components/Social/SocialNetwork';
import Buttons from '../components/buttons/Button';

const Home = () => {
    return (
        <div>
            <Mouse />
            <div className="home">
                <Navigation />
                <SocialNetwork />
                <div className="home-main">
                    <div className="main-content">
                        <h1>A-N Store Project</h1>
                        <h2><DynamicText /></h2>
                    </div>
                </div>
                <Buttons right={"/projet-1"} />
            </div>
        </div >
    );
};

export default Home;