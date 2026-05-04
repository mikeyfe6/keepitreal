import * as React from "react";

import * as hamburgerStyles from "../../styles/modules/layout/hamburger.module.scss";

interface HamburgerProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ isOpen, toggleMenu }) => {
    return (
        <button className={hamburgerStyles.hamburger} onClick={toggleMenu}>
            <div className={`${hamburgerStyles.icon} ${isOpen ? hamburgerStyles.open : ""}`}>
                <div className={hamburgerStyles.line} />
                <div className={hamburgerStyles.line} />
                <div className={hamburgerStyles.line} />
            </div>
        </button>
    );
};

export default Hamburger;
