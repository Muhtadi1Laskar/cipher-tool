import { Link } from "react-router-dom";

export default function LandingPageComponent() {
    return (
        <div>
            <div className="landing-page container">
                <div className="hero">
                    <img src="https://img.icons8.com/?size=100&id=6omgTeXlR794&format=png&color=000000" alt="Cipher Tool Logo" />
                        <h1 id="landingPage-heading">Welcome to Cipher Tool</h1>
                        <p>Your trusted solution for secure encryption, hashing, and data verification.</p>
                        <Link to="/tools" className="btn btn-primary">Get Started</Link>
                </div>

                <div className="features row mt-5">
                    <div className="col-md-6 col-lg-3 mb-4">
                        <div className="feature-box">
                            <h4>🔒 Secure Encryption</h4>
                            <p>Use industry-standard ciphers to keep your data safe.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-4">
                        <div className="feature-box">
                            <h4>🔑 Hashing & Verification</h4>
                            <p>Quickly generate and verify hashes for data integrity.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-4">
                        <div className="feature-box">
                            <h4>💡 User-Friendly Interface</h4>
                            <p>Designed to simplify encryption for everyone.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-4">
                        <div className="feature-box">
                            <h4>📊 Multi-Tool Integration</h4>
                            <p>Switch effortlessly between tools with ease.</p>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                © 2024 Cipher Tool. All Rights Reserved.
            </footer>
        </div>
    );
}