import React from 'react';
import {FiLinkedin,FiInstagram,FiGithub} from 'react-icons/fi'


const SocialNetwork = () => {

    const anim = () => {
        const icons = document.querySelectorAll(".social-network a ");

        icons.forEach((link) => {
            link.addEventListener("mouseover", (e) => {
                link.style.transform = `translate(${e.offsetX - 20}px, ${e.offsetY - 13}PX)`
            });
            link.addEventListener("mouseleave", () => {
                link.style.transform = '';
            })
        });
    }


    
    return (
        <div className="social-network">
            <ul className="content">
                <a href="https://www.linkedin.com/in/amajoud-nedim/" target="_blank" rel="noopener noreferrer" className='hover' onMouseOver={anim}>
                    <li>
                         <FiLinkedin/>
                    </li>
                </a>
                <a href="https://www.instagram.com/nedim.a_/" target="_blank" rel="noopener noreferrer" className='hover' onMouseOver={anim}>
                    <li>
                         <FiInstagram/>
                  </li>
                 </a>
                <a href="https://github.com/SOA-P" target="_blank" rel="noopener noreferrer" className='hover' onMouseOver={anim}>
                    <li>
                         <FiGithub/>
                    </li>
                 </a>
            </ul>
      </div>
    );
};

export default SocialNetwork;