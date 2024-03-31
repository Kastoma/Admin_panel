import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from "react-transition-group";

export function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);
    const scroll = useRef(null)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        const scrollStep = -window.scrollY / (500 / 15);
        const scrollInterval = setInterval(() => {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    };

    return (
        <CSSTransition
            in={isVisible}
            nodeRef={scroll}
            timeout={500}
            classNames={'scroll-trn'}
            unmountOnExit
            onEnter={() => scroll.current.style.display = 'block'}
            onExited={() => scroll.current.style.display = 'none'}
        >
        <div ref={scroll} className={'scroll-to-top-button'} onClick={scrollToTop}>
            <svg style={{color: 'rgb(25, 166, 97)'}} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16"> <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" fill="#19a661"></path> </svg>
            </div>
        </CSSTransition>
    );
}