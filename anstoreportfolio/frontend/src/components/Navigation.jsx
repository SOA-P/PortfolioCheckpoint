import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" className={(nav) => (nav.active ? "nav-active hover" : "hover")}>
                    <li>
                        Acceuil
                    </li>
                </NavLink>
                <NavLink to="/" className={(nav) => (nav.active ? "nav-active hover" : "hover")}>

                    <li className='nav-portfolio'>
                        Portfolio
                        <ul className='nav-projects'>
                            <NavLink to="/Projet-1" className={(nav) => (nav.active ? "nav-active hover" : "hover")}>
                                <li>App World</li>
                            </NavLink>
                            <NavLink to="Projet-2" className={(nav) => (nav.active ? "nav-active hover" : "hover")}>
                                <li>Externactic</li>
                        </NavLink>
                        <NavLink to="/Projet-3" className={(nav) => (nav.active ? "nav-active hover" : "hover")}>
                                <li>Gaming App</li>
                        </NavLink>
                        <NavLink to="/Projet-4" className={(nav) => (nav.active ? "nav-active hover" : "hover")}>
                                <li>Randomovie</li>
                        </NavLink>
                        <NavLink to="/Projet-5" className={(nav) => (nav.active ? "nav-active hover" : "hover")}>
                                <li>Dayli</li>
                        </NavLink>
                        <NavLink to="/Projet-6" className={(nav) => (nav.active ? "nav-active hover" : "hover")}>
                                <li>Projet 6</li>
                        </NavLink>

                        </ul>
                    </li>
                    
                </NavLink>
                <NavLink to="/" className={(nav) => (nav.active ? "nav-active hover" : "hover")}>
                    <li>
                        Contact
                    </li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;