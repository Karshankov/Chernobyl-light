import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Dropdown.module.css';

const Dropdown = ({ options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setIsOpen(false);
        navigate(option.path);
    };

    const handleTitleClick = () => {
        navigate('/');
    };

    return (
        <div className={styles.dropdown}>
            <button
                className={`${styles.dropdown_toggle} ${styles.burger_menu}`}
                onClick={toggleDropdown}
            >
                <div className={styles.burger_bar}></div>
                <div className={styles.burger_bar}></div>
                <div className={styles.burger_bar}></div>
            </button>
            <button
                className={styles.dropdown_toggle}
                onClick={handleTitleClick}
                onMouseEnter={() => !isMobile() && toggleDropdown()}
                onMouseLeave={() => !isMobile() && setIsOpen(false)}
            >
                Чернобыль
            </button>
            {isOpen && (
                <ul
                    className={styles.dropdown_menu}
                    onMouseEnter={() => !isMobile() && setIsOpen(true)}
                    onMouseLeave={() => !isMobile() && setIsOpen(false)}
                >
                    {isMobile() && (
                        <li onClick={handleTitleClick}>
                            Главная страница
                        </li>
                    )}
                    {options.map((option) => (
                        <li key={option.path} onClick={() => handleOptionClick(option)}>
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

const isMobile = () => window.innerWidth <= 768;

export default Dropdown;
