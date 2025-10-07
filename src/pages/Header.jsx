import React, { useState, useEffect } from 'react';
import './header.css';
import NavListItem from '../components/NavListItem';
import navListData from '../data/navListData';

// This is the function of the navigation system, hamburger menu and when you scroll or moving your finger. The navigational menu is following the user!
function Header({ scroll }) {
  const [navList, setNavList] = useState(navListData);
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavOnClick = id => {
    const newNavList = navList.map(nav => {
      nav.active = false;
      if (nav._id === id) nav.active = true;
      return nav;
    });
    setNavList(newNavList);
  };

  // Enhanced scroll prevention
  useEffect(() => {
    if (isMenuOpen) {
      // Store original scroll position
      const scrollY = window.scrollY;
      
      // Disable page scroll with multiple methods for better compatibility
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      
      // Prevent scroll on touch devices
      document.body.style.touchAction = 'none';
      
      // Store scroll position for restoration
      document.body.setAttribute('data-scroll-y', scrollY);
    } else {
      // Get stored scroll position
      const scrollY = document.body.getAttribute('data-scroll-y');
      
      // Re-enable page scroll and restore position
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.touchAction = '';
      
      // Restore scroll position
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY));
        document.body.removeAttribute('data-scroll-y');
      }
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.touchAction = '';
      
      const scrollY = document.body.getAttribute('data-scroll-y');
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY));
        document.body.removeAttribute('data-scroll-y');
      }
    };
  }, [isMenuOpen]);

  // Navigation Toggle
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
      setIsMenuOpen(true);
    } else {
      setActive("nav__menu");
      setIsMenuOpen(false);
    }

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else {
      setIcon("nav__toggler");
    }
  };

  const closeMenu = () => {
    setActive("nav__menu");
    setIcon("nav__toggler");
    setIsMenuOpen(false);
  };

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  // Handle backdrop click to close menu (for mobile)
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('nav__active') && isMenuOpen) {
      closeMenu();
    }
  };

  return (
    <header className={`${scroll > 100 ? 'scrolled' : undefined}`}>
      <a href="/" className="logo">
        Stella Belessi
      </a>
      <ul className={active} onClick={handleBackdropClick}>
        <li className="nav__item"></li>
        {navList.map(nav => (
          <NavListItem 
            key={nav._id} 
            nav={nav} 
            onClick={closeMenu} 
            navOnClick={handleNavOnClick} 
          />
        ))}
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </header>
  );
}

export default Header;