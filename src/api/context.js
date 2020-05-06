import React, { useState, createContext, useEffect } from 'react';
import { faChevronRight, faChevronLeft, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export const MyContext = createContext();

export const Provider = ({ children }) => {
    const [arrow, setArrow] = useState(faChevronLeft);
    const [menuArrow, setMenuArrow] = useState(faChevronUp);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [navColor, setNavColor] = useState("rgba(0, 0, 0, 0.200)");

    useEffect(() => {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY;
            if (isTop >= 690) { setNavColor("rgb(34, 34, 34)") }
            else { setNavColor("rgba(0, 0, 0, 0.200)") }
            console.log(isTop);
        });
    });


    const toggleSocial = () => {
        arrow === faChevronLeft ? setArrow(faChevronRight) : setArrow(faChevronLeft);
        x === 0 ? setX(-50) : setX(0);
    };

    const toggleMenu = () => {
        menuArrow === faChevronUp ? setMenuArrow(faChevronDown) : setMenuArrow(faChevronUp);
        y === 0 ? setY(-60) : setY(0);
    }

    return (
        <MyContext.Provider value={{
            arrow, x,
            menuArrow, y,
            navColor, setNavColor,
            actions: {
                toggleSocial,
                toggleMenu
            }
        }}>
            {children}
        </MyContext.Provider>
    );
};