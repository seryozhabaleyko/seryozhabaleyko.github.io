import React from 'react';
import classNames from 'classnames';
import { withNavigationContext } from 'react-awesome-slider/dist/navigation';

import './Navbar.scss';
import { Link } from 'react-router-dom';

function Navbar({ fullpage, className, onClick }) {

    const { slug } = fullpage.navigation;

    return (
        <nav className={classNames(className)}>
            <Link
                className={slug === '' ? 'selected' : null}
                to="/"
                onClick={onClick}
            >
                About
            </Link>
            <Link
                className={slug === 'portfolio' ? 'selected' : null}
                to="/portfolio"
                onClick={onClick}
            >
                Portfolio
            </Link>
            <Link
                className={slug === 'contact' ? 'selected' : null}
                to="/contact"
                onClick={onClick}
            >
                Contact
            </Link>
        </nav>
    );
}

export default withNavigationContext(Navbar);