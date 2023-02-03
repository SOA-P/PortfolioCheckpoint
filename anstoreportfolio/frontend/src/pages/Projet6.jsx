import React from 'react';
import Navigation from '../components/Navigation';
import Buttons from '../components/buttons/Button';
import Mouse from '../components/mouseMoove/Mouse';
import Project from '../components/Projects/Project';


const Projet6 = () => {
    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigation />
                <Project projectNumber={5} />
                <Buttons left={"/projet-6"}  right={"/contact"}  />
            </div>
        </main>
    );
};
export default Projet6;