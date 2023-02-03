import React from 'react';

import Navigation from '../components/Navigation';

import Buttons from '../components/buttons/Button';
import Mouse from '../components/mouseMoove/Mouse';
import Project from '../components/Projects/Project';


const Projet5 = () => {
    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigation />
                <Project projectNumber={4} />
                <Buttons left={"/projet-4"}  right={"/projet-6"}  />
            </div>
        </main>
    );
};
export default Projet5;