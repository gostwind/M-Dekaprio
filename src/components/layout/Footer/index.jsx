import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './styles.css';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const Footer = () => {
    const navigate = useNavigate();

    const handleLetterClick = (letter) => {
        navigate(`/az-list?letter=${letter}`);
    };

    return (
        <footer className="site-footer">
            <div className="site-footer__inner">

                {/* ── Top row: logo + socials ── */}
                <div className="footer-top">
                    <button className="footer-logo" onClick={() => navigate('/')} aria-label="Vibeo Home">
                        <img src="/vibeo.png" alt="Vibeo" className="footer-logo__img" />
                        <span className="footer-logo__text">
                            <span className="footer-logo__vibe">VIBE</span>
                            <span className="footer-logo__o">O</span>
                        </span>
                    </button>

                    <span className="footer-divider" />

                    <div className="footer-socials">
                        {/* GitHub */}
                        <a href="mailto:example@example.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="GitHub">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
                        </a>
                        {/* Globe / Website */}
                        <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="TMDB">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="2" y1="12" x2="22" y2="12" />
                                <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* ── A-Z Browse ── */}
                <div className="footer-az">
                    <div className="footer-az__header">
                        <h3 className="footer-az__title">A-Z LIST</h3>
                        <span className="footer-az__desc">Searching movie order by alphabet name A to Z.</span>
                    </div>
                    <div className="footer-az__grid">
                        <button className="footer-az__btn" onClick={() => handleLetterClick('all')}>All</button>
                        <button className="footer-az__btn" onClick={() => handleLetterClick('#')}>#</button>
                        <button className="footer-az__btn" onClick={() => handleLetterClick('0-9')}>0-9</button>
                        {ALPHABET.map(letter => (
                            <button key={letter} className="footer-az__btn" onClick={() => handleLetterClick(letter)}>
                                {letter}
                            </button>
                        ))}
                    </div>
                </div>

                {/* ── Links row ── */}
                <div className="footer-links">
                    <Link to="/terms">Terms of Service</Link>
                    <Link to="/privacy">Privacy Policy</Link>
                    <Link to="/cookies">Cookie Preferences</Link>
                    <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">TMDB</a>
                </div>

                {/* ── Disclaimer + Copyright ── */}
                <div className="footer-bottom">
                    <p className="footer-disclaimer">
                        Vibeo does not store any files on our server, we only linked to the media which is hosted on 3rd party services.
                    </p>
                    <p className="footer-copyright">© {new Date().getFullYear()} vibeo. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
