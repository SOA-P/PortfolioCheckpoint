

import Navigation from '../components/Navigation';
import Buttons from '../components/buttons/Button';
import Mouse from '../components/mouseMoove/Mouse';
import Project from '../components/Projects/Project';


const Projet3 = () => {
    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigation />

                <Project projectNumber={2} />
                <Buttons left={"/projet-2"}  right={"/projet-4"}  />
            </div>
        </main>
    );
};

export default Projet3;