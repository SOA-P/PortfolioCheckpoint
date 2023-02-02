

import Navigation from '../components/Navigation';
import Buttons from '../components/buttons/Button';
import Mouse from '../components/mouseMoove/Mouse';
import Project from '../components/Projects/Project';


const Projet4 = () => {
    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigation />
                <Project projectNumber={3} />
                <Buttons left={"/projet-3"}  right={"/projet-5"}  />
            </div>
        </main>
    );
};
export default Projet4;