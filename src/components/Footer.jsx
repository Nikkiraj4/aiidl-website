
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <Link
          to="/"
          className="footer-brand"
          aria-label="AIIDL Technologies home"
        >
          <span className="footer-brand-symbol" aria-hidden="true">A</span>
          <span className="footer-brand-name">
            AIIDL
            <small>Technologies</small>
          </span>
        </Link>

        <nav className="footer-links" aria-label="Footer navigation">
          <Link to="/">Home</Link>
          <Link to="/services/custom-software">Custom Software</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="footer-meta">
          <p className="footer-disclaimer">
            Concept website created for an assignment; not an official AIIDL site.
          </p>
          <p className="copyright">© 2026 AIIDL Technologies</p>
        </div>
      </div>
    </footer>
  );
}
