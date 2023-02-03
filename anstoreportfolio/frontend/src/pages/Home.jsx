import React from 'react';
import Navigation from '../components/Navigation';
import Mouse from '../components/mouseMoove/Mouse';
import DynamicText from '../components/texteDynamic/DynamicText';
import SocialNetwork from '../components/Social/SocialNetwork';
import Buttons from '../components/buttons/Button';
import {motion} from "framer-motion"

const Home = () => {

   

    return (
        <div>
            <Mouse />
            <div className="home">
                <Navigation />
                <SocialNetwork />
                <div className="home-main">
                    <div className="main-content">
                        <motion.h1 drag onDragEnd dragConstraints={{
                            left: -250,
                            right: 950,
                            top: -200,
                            bottom:250
                        }}> A-N Store Project
                        </motion.h1>
                        <motion.h2
                            drag onDragEnd dragConstraints={{
                                left: -250,
                                right: 950,
                                top: -200,
                                bottom: 250
                            }}>
                            <DynamicText />
                        </motion.h2>
                    </div>
                </div>
                <Buttons right={"/projet-1"} />
            </div>
        </div >
    );
};

export default Home;