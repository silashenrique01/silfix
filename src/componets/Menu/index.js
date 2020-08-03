import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import ButtonLink from './components/ButtonLink';
import Button from './Button';

function Menu(){

    return (
        <nav className="Menu">
            <a href="/">
            <img className="Logo" src={Logo} alt="Logo Silfix"></img>
            </a>

            <Button className="ButtonLink" href="/">
                Novo bagulho
            </Button>
        </nav>
    );
}

export default Menu;