import React, { useState, useEffect } from 'react'; 
import { useLocation, Link } from 'react-router-dom'; 
import '../css/Header.css'; 
import TCALogo from '../assets/TCALogo.png';

const Header = () => {
  const location = useLocation();
  const [isMembersDropdownOpen, setIsMembersDropdownOpen] = useState(false);
  const [isForClientsDropdownOpen, setIsForClientsDropdownOpen] = useState(false);
  const [isForStudentsDropdownOpen, setIsForStudentsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);     
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastY;
      const pastTop = y > 50;            // start behavior after 50px
      setHidden(goingDown && pastTop);   // add/remove "hidden" class
      setCompact(pastTop);               // optional: add "compact" class if you style it
      lastY = y <= 0 ? 0 : y;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // 2) Recompute top padding whenever header visibility/size can change
  useEffect(() => {
    const h = document.querySelector('.header-container')?.offsetHeight || 0;
    document.documentElement.style.setProperty('--header-h', hidden ? '0px' : `${h}px`);
  }, [hidden, compact, isMobileMenuOpen, location.pathname]);

  const getNavLinkClass = (path) =>
    location.pathname === path ? "active-nav" : "nav-link";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header-container ${compact ? 'compact' : ''} ${hidden ? 'hidden' : ''}`}>
      <div className="nav-wrapper">
        <Link to="/" className="logo">
          <img src={TCALogo} alt="TCA Logo" className="logo-img" />
        </Link>
        
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </span>
        </button>
        
        <nav className={`nav ${isMobileMenuOpen ? 'mobile-nav-open' : ''}`}>
          <Link to="/" className={getNavLinkClass("/")} onClick={closeMobileMenu}>Home</Link>
          <Link to="/about" className={getNavLinkClass("/about")} onClick={closeMobileMenu}>About</Link>
          
          <div
            className="dropdown"
            onMouseEnter={() => setIsMembersDropdownOpen(true)}
            onMouseLeave={() => setIsMembersDropdownOpen(false)}
          >
            <Link
              to="/members"
              className={`${getNavLinkClass("/members")} dropdown-toggle`}
              onClick={closeMobileMenu}
            >
              Members
              <span className="dropdown-caret">▼</span>
            </Link>
            {(isMembersDropdownOpen || isMobileMenuOpen) && (
              <div className="dropdown-menu">
                <Link
                  to="/members/executive-team"
                  className={getNavLinkClass("/members/executive-team")}
                  onClick={closeMobileMenu}
                >
                  Executive Team
                </Link>
                <Link
                  to="/members/exec-subteams"
                  className={getNavLinkClass("/members/ExecSubMembers")}
                  onClick={closeMobileMenu}
                >
                  Executive Subteams
                </Link>
                <Link
                  to="/members/consultants"
                  className={getNavLinkClass("/members/consultants")}
                  onClick={closeMobileMenu}
                >
                  Consultants
                </Link>
              </div>
            )}
          </div>

          <div
            className="dropdown"
            onMouseEnter={() => setIsForClientsDropdownOpen(true)}
            onMouseLeave={() => setIsForClientsDropdownOpen(false)}
          >
            <Link
              to="/for-clients"
              className={`${getNavLinkClass("/for-clients")} dropdown-toggle`}
              onClick={closeMobileMenu}
            >
              For Clients
              <span className="dropdown-caret">▼</span>
            </Link>
            {(isForClientsDropdownOpen || isMobileMenuOpen) && (
              <div className="dropdown-menu">
                <Link
                  to="/for-clients#services"
                  className={location.pathname === "/for-clients" && location.hash === "#services" ? "active-nav" : "nav-link"}
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
                <Link
                  to="/for-clients#timeline"
                  className={location.pathname === "/for-clients" && location.hash === "#timeline" ? "active-nav" : "nav-link"}
                  onClick={closeMobileMenu}
                >
                  Timeline
                </Link>
                <Link
                  to="/for-clients#clients"
                  className={location.pathname === "/for-clients" && location.hash === "#clients" ? "active-nav" : "nav-link"}
                  onClick={closeMobileMenu}
                >
                  Past Clients
                </Link>
              </div>
            )}
          </div>

          <div
            className="dropdown"
            onMouseEnter={() => setIsForStudentsDropdownOpen(true)}
            onMouseLeave={() => setIsForStudentsDropdownOpen(false)}
          >
            <Link
              to="/for-students"
              className={`${getNavLinkClass("/for-students")} dropdown-toggle`}
              onClick={closeMobileMenu}
            >
              For Students
              <span className="dropdown-caret">▼</span>
            </Link>
            {(isForStudentsDropdownOpen || isMobileMenuOpen) && (
              <div className="dropdown-menu">
                <Link
                  to="/for-students#programs"
                  className={location.pathname === "/for-students" && location.hash === "#programs" ? "active-nav" : "nav-link"}
                  onClick={closeMobileMenu}
                >
                  Programs
                </Link>
                <Link
                  to="/for-students#subteams"
                  className={location.pathname === "/for-students" && location.hash === "#subteams" ? "active-nav" : "nav-link"}
                  onClick={closeMobileMenu}
                >
                  Subteams
                </Link>
              </div>
            )}
          </div>
          
          <Link to="/join" className={getNavLinkClass("/join")} onClick={closeMobileMenu}>Join</Link>
          <Link to="/faq" className={getNavLinkClass("/faq")} onClick={closeMobileMenu}>FAQ</Link>
          <Link to="/contact" className={getNavLinkClass("/contact")} onClick={closeMobileMenu}>Contact</Link>
        </nav>
      </div>
    </header>

    
    
  );
};

export default Header;