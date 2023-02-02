import React from 'react';
import Navigation from '../components/Navigation';
import Buttons from '../components/buttons/Button';
import Mouse from '../components/mouseMoove/Mouse';
import Project from '../components/Projects/Project';


const Projet1 = () => {
    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigation />
                <Project projectNumber={0} />
                <Buttons left={"/"}  right={"/projet-2"}  />
            </div>
        </main>
    );
};

export default Projet1;