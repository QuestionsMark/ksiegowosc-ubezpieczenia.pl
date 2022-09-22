import { NavLink } from 'react-router-dom';

export const Nav = () => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item">
                    <NavLink to="/" className="nav__link" end>Strona Główna</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to="/uslugi-ksiegowe" className="nav__link">Usługi Księgowe</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to="/ubezpieczenia" className="nav__link">Ubezpieczenia</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to="/szkolenia-bhp" className="nav__link">Szkolenia BHP</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to="/kontakt" className="nav__link">Kontakt</NavLink>
                </li>
            </ul>
        </nav>
    );
};