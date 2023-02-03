
import Navigation from '../components/Navigation';
import Buttons from '../components/buttons/Button';
import Mouse from '../components/mouseMoove/Mouse';
import Project from '../components/Projects/Project';


const Projet2 = () => {
    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigation />

                <Project projectNumber={1} />
                <Buttons left={"/projet-1"}  right={"/projet-3"}  />
            </div>
        </main>
    );
};

export default Projet2;