import React from 'react';
import Navigation from '../components/Navigation';
import Mouse from "../components/mouseMoove/Mouse";
import ContactForm from '../components/Contact/ContactForm';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import SocialNetwork from '../components/Social/SocialNetwork'
import Buttons from '../components/buttons/Button'


const Contact = () => {
    return (
        <main>
        <Mouse />
        <div className="contact">
            <Navigation />
            <ContactForm />
            <div className="contact-infos">
                <div className="address">
                    <div className="content">
                    <h4>addresse</h4>
                    <p>Arras,</p>
                    <p> 18 rue Désiré delansorme 62000</p>
                    </div>
                </div>
            
            <div className="phone">
                <div className="content">
                    <h4>Téléphone</h4>
                    <CopyToClipboard text="0737289393" className="hover">
                        <p style={{ cursor: "pointer" }}
                            className="clipboard" onClick={() => alert('Téléphone copié!')}>
                            0737289393</p>
                    </CopyToClipboard>
                </div>
            </div>
            <div className="email">
                <div className="content">
                    <h4>E-mail</h4>
                    <CopyToClipboard text="AnStoreProject@gmail.com" className="hover">
                        <p style={{ cursor: "pointer" }}
                            className="clipboard" onClick={() => alert('E-mail copié!')}>
                            AmajoudNedev@gmail.com</p>
                    </CopyToClipboard>
                </div>
                    </div>
                    
            <SocialNetwork />
            <div className="credits">
                <p>Amajoud Nédim - 2022</p>
                    </div>
                    </div>
            <Buttons left={"/Projet-6"} right={"/"} />
        </div>
    </main>
    );
};

export default Contact;