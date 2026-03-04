import React from 'react';

function AboutUs() {
    return (
        <div className="about-us-container" style={styles.container}>
            <div className="about-hero" style={styles.hero}>
                <h1 style={styles.heading}>About Paradise Nursery</h1>
                <p style={styles.tagline}>
                    Where Green Meets Serenity — Your one-stop destination for beautiful houseplants.
                </p>
            </div>

            <div className="about-content" style={styles.content}>
                <div className="about-section" style={styles.section}>
                    <h2 style={styles.subHeading}>Our Story</h2>
                    <p style={styles.text}>
                        Founded with a passion for bringing nature indoors, <strong>Paradise Nursery</strong> has been
                        helping plant lovers transform their living spaces into lush green sanctuaries. We believe
                        that every home deserves a touch of nature, and every person deserves the joy that comes
                        from nurturing a living plant.
                    </p>
                </div>

                <div className="about-section" style={styles.section}>
                    <h2 style={styles.subHeading}>Our Mission</h2>
                    <p style={styles.text}>
                        Our mission is to make plant parenthood accessible, enjoyable, and rewarding for everyone.
                        We carefully curate our collection to include aromatic plants that fill your space with
                        natural fragrance, medicinal plants that support your wellness journey, and air-purifying
                        plants that help you breathe cleaner air.
                    </p>
                </div>

                <div className="about-section" style={styles.section}>
                    <h2 style={styles.subHeading}>What We Offer</h2>
                    <ul style={styles.list}>
                        <li style={styles.listItem}>
                            <span style={styles.icon}>🌿</span>
                            <strong>Aromatic Plants</strong> — Lavender, Rosemary, Mint, Basil, Thyme, and Lemongrass
                            to fill your home with delightful natural scents.
                        </li>
                        <li style={styles.listItem}>
                            <span style={styles.icon}>💊</span>
                            <strong>Medicinal Plants</strong> — Aloe Vera, Echinacea, Chamomile, Turmeric, Ginger,
                            and Ashwagandha for natural health and wellness.
                        </li>
                        <li style={styles.listItem}>
                            <span style={styles.icon}>🍃</span>
                            <strong>Air Purifying Plants</strong> — Snake Plant, Spider Plant, Peace Lily, Pothos,
                            Rubber Plant, and Boston Fern for cleaner, fresher indoor air.
                        </li>
                    </ul>
                </div>

                <div className="about-section" style={styles.section}>
                    <h2 style={styles.subHeading}>Why Choose Us</h2>
                    <div style={styles.features}>
                        <div style={styles.featureCard}>
                            <span style={styles.featureIcon}>🌱</span>
                            <h3 style={styles.featureTitle}>Quality Plants</h3>
                            <p style={styles.featureText}>Every plant is hand-picked and inspected for health and vitality.</p>
                        </div>
                        <div style={styles.featureCard}>
                            <span style={styles.featureIcon}>🚚</span>
                            <h3 style={styles.featureTitle}>Fast Delivery</h3>
                            <p style={styles.featureText}>Safe and quick delivery right to your doorstep.</p>
                        </div>
                        <div style={styles.featureCard}>
                            <span style={styles.featureIcon}>📖</span>
                            <h3 style={styles.featureTitle}>Expert Care Guides</h3>
                            <p style={styles.featureText}>Each plant comes with detailed care instructions.</p>
                        </div>
                        <div style={styles.featureCard}>
                            <span style={styles.featureIcon}>✅</span>
                            <h3 style={styles.featureTitle}>Satisfaction Guaranteed</h3>
                            <p style={styles.featureText}>We stand behind every plant we sell with our quality guarantee.</p>
                        </div>
                    </div>
                </div>

                <div className="about-section" style={styles.section}>
                    <h2 style={styles.subHeading}>Our Commitment</h2>
                    <p style={styles.text}>
                        At Paradise Nursery, we are committed to sustainability and eco-friendly practices.
                        We source our plants from responsible growers, use recyclable packaging, and continuously
                        work to reduce our environmental footprint. Join us in making the world a greener place,
                        one plant at a time.
                    </p>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        fontFamily: "'Poppins', sans-serif",
        color: '#333',
        lineHeight: 1.6,
        minHeight: '100vh',
        background: '#f8faf8',
    },
    hero: {
        background: 'linear-gradient(135deg, #0d4d1a 0%, #1a8f3c 40%, #43a047 70%, #66bb6a 100%)',
        color: '#fff',
        textAlign: 'center',
        padding: '80px 20px 60px',
    },
    heading: {
        fontSize: '2.8rem',
        fontWeight: 700,
        marginBottom: '16px',
    },
    tagline: {
        fontSize: '1.2rem',
        opacity: 0.9,
        maxWidth: '600px',
        margin: '0 auto',
    },
    content: {
        maxWidth: '900px',
        margin: '0 auto',
        padding: '40px 20px 60px',
    },
    section: {
        marginBottom: '40px',
    },
    subHeading: {
        fontSize: '1.6rem',
        fontWeight: 600,
        color: '#2e7d32',
        marginBottom: '14px',
        paddingBottom: '8px',
        borderBottom: '3px solid #a5d6a7',
        display: 'inline-block',
    },
    text: {
        fontSize: '1rem',
        color: '#555',
        lineHeight: 1.8,
    },
    list: {
        listStyle: 'none',
        padding: 0,
    },
    listItem: {
        padding: '12px 0',
        fontSize: '1rem',
        color: '#555',
        lineHeight: 1.7,
        display: 'flex',
        alignItems: 'flex-start',
        gap: '10px',
    },
    icon: {
        fontSize: '1.3rem',
        flexShrink: 0,
    },
    features: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '20px',
        marginTop: '10px',
    },
    featureCard: {
        background: '#fff',
        borderRadius: '14px',
        padding: '24px',
        textAlign: 'center',
        boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
    },
    featureIcon: {
        fontSize: '2rem',
        display: 'block',
        marginBottom: '10px',
    },
    featureTitle: {
        fontSize: '1.05rem',
        fontWeight: 600,
        color: '#333',
        marginBottom: '6px',
    },
    featureText: {
        fontSize: '0.88rem',
        color: '#888',
        lineHeight: 1.5,
    },
};

export default AboutUs;
