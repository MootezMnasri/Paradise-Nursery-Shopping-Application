import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <div className="landing-page">
            <div className="landing-content">
                <h1>Welcome to <span>Paradise Nursery</span></h1>
                <p className="landing-description">
                    Transform your living space into a lush green paradise. We offer a curated selection of
                    aromatic, medicinal, and air-purifying houseplants — delivered right to your doorstep.
                </p>
                <Link to="/products" className="btn-get-started">
                    Get Started
                </Link>
                <div className="landing-features">
                    <div className="landing-feature">
                        <span className="landing-feature-icon">🌱</span>
                        <span>Fresh Plants</span>
                    </div>
                    <div className="landing-feature">
                        <span className="landing-feature-icon">🚚</span>
                        <span>Fast Delivery</span>
                    </div>
                    <div className="landing-feature">
                        <span className="landing-feature-icon">📖</span>
                        <span>Care Guides</span>
                    </div>
                    <div className="landing-feature">
                        <span className="landing-feature-icon">✅</span>
                        <span>Quality Guaranteed</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
