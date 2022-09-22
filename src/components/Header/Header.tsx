import { Image } from "../common/Image";

import headerImg from '../../assets/header.jpg';

export const Header = () => {
    return (
        <header className="header">
            <Image alt="Biuro" src={headerImg} className="header__img" />
            {/* jakieś hasła reklamowe */}
        </header>
    );
};