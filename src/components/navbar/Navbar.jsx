/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarLink from './NavbarLink';
import NavbarToggler from './NavbarToggler';
import NavbarTogglerClose from './NavbarTogglerClose';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggle = () => setIsOpen(!isOpen);
    const handleClick = (event) => {
        switch (event.type) {
        case 'click':
            navigate('/');
            break;

        case 'keydown':
            if (event.key === 'Enter') {
                navigate('/');
            }
            break;

        default:
            break;
        }
    };

    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-brand">
                    <h3
                        onClick={(event) => handleClick(event)}
                        onKeyDown={(event) => handleClick(event)}
                        style={{
                            background: 'linear-gradient(45deg, #8a24f0, #448df2)',
                            '-webkit-background-clip': 'text',
                            '-webkit-text-fill-color': 'transparent',
                        }}
                    >
                        SulyCinema
                    </h3>
                </div>

                <div className={`navbar-menu ${isOpen ? 'is-open' : ''}`}>
                    <ul>
                        <NavbarTogglerClose
                            onClick={() => toggle()}
                            aria-labelledby="Close Menu"
                        />

                        <li id="first">
                            <NavbarLink to="/movies">Movies</NavbarLink>
                        </li>
                        <li>
                            <NavbarLink to="/tvshows">TV Shows</NavbarLink>
                        </li>
                    </ul>
                </div>

                <NavbarToggler
                    onClick={() => toggle()}
                    aria-labelledby="Open Menu"
                />
            </div>
        </nav>
    );
}
