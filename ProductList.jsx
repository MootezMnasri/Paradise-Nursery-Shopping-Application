import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

function ProductList() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    // Track which items have been added to cart
    const [addedToCart, setAddedToCart] = useState({});

    // Plant data organized into sections
    const plantsArray = [
        {
            category: 'Aromatic Plants',
            plants: [
                {
                    name: 'Lavender',
                    image: 'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?auto=format&fit=crop&w=600&q=80',
                    description: 'Beautiful purple blooms with a calming, soothing aroma perfect for relaxation.',
                    cost: '$15.00',
                },
                {
                    name: 'Rosemary',
                    image: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&w=600&q=80',
                    description: 'A fragrant herb with needle-like leaves, great for cooking and aromatherapy.',
                    cost: '$12.00',
                },
                {
                    name: 'Mint',
                    image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&w=600&q=80',
                    description: 'Refreshing and easy to grow, perfect for teas, cocktails, and culinary uses.',
                    cost: '$10.00',
                },
                {
                    name: 'Basil',
                    image: 'https://images.unsplash.com/photo-1618375569909-3c8616cf7733?auto=format&fit=crop&w=600&q=80',
                    description: 'An aromatic herb with rich green leaves, essential for Italian and Thai cuisine.',
                    cost: '$8.00',
                },
                {
                    name: 'Thyme',
                    image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=600&q=80',
                    description: 'A versatile herb with tiny leaves and a warm, earthy flavor and scent.',
                    cost: '$9.00',
                },
                {
                    name: 'Lemongrass',
                    image: 'https://images.unsplash.com/photo-1509741102003-ca64bfe5f069?auto=format&fit=crop&w=600&q=80',
                    description: 'Tall, citrusy grass used in Asian cooking and for its mosquito-repellent properties.',
                    cost: '$14.00',
                },
            ],
        },
        {
            category: 'Medicinal Plants',
            plants: [
                {
                    name: 'Aloe Vera',
                    image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=600&q=80',
                    description: 'A succulent with gel-filled leaves known for soothing burns and skin care.',
                    cost: '$12.00',
                },
                {
                    name: 'Echinacea',
                    image: 'https://images.unsplash.com/photo-1598187079731-044114b92eb5?auto=format&fit=crop&w=600&q=80',
                    description: 'A flowering plant used to boost the immune system and fight colds.',
                    cost: '$16.00',
                },
                {
                    name: 'Chamomile',
                    image: 'https://images.unsplash.com/photo-1587393855524-087f83d95bc9?auto=format&fit=crop&w=600&q=80',
                    description: 'Daisy-like flowers brewed into a calming tea to promote sleep and relaxation.',
                    cost: '$11.00',
                },
                {
                    name: 'Turmeric',
                    image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=600&q=80',
                    description: 'A golden-hued root with powerful anti-inflammatory and antioxidant properties.',
                    cost: '$13.00',
                },
                {
                    name: 'Ginger',
                    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80',
                    description: 'A spicy root used to aid digestion, reduce nausea, and fight inflammation.',
                    cost: '$10.00',
                },
                {
                    name: 'Ashwagandha',
                    image: 'https://images.unsplash.com/photo-1599009434802-ca1dd09895e4?auto=format&fit=crop&w=600&q=80',
                    description: 'An adaptogenic herb used for centuries to reduce stress and boost vitality.',
                    cost: '$18.00',
                },
            ],
        },
        {
            category: 'Air Purifying Plants',
            plants: [
                {
                    name: 'Snake Plant',
                    image: 'https://images.unsplash.com/photo-1593482892580-e32e47e8a83b?auto=format&fit=crop&w=600&q=80',
                    description: 'A resilient plant with tall, sword-like leaves that filters indoor air toxins.',
                    cost: '$15.00',
                },
                {
                    name: 'Spider Plant',
                    image: 'https://images.unsplash.com/photo-1572688484438-313a56e6dc34?auto=format&fit=crop&w=600&q=80',
                    description: 'Easy to care for with arching green and white striped leaves, great for beginners.',
                    cost: '$12.00',
                },
                {
                    name: 'Peace Lily',
                    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?auto=format&fit=crop&w=600&q=80',
                    description: 'Elegant white blooms that purify air and thrive in low-light conditions.',
                    cost: '$18.00',
                },
                {
                    name: 'Pothos',
                    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80',
                    description: 'A trailing vine with heart-shaped leaves, virtually indestructible and air-cleaning.',
                    cost: '$10.00',
                },
                {
                    name: 'Rubber Plant',
                    image: 'https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=600&q=80',
                    description: 'Glossy, dark green leaves that add a bold tropical look while cleaning your air.',
                    cost: '$20.00',
                },
                {
                    name: 'Boston Fern',
                    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=600&q=80',
                    description: 'Lush, feathery fronds that act as a natural humidifier and air purifier.',
                    cost: '$14.00',
                },
            ],
        },
    ];

    // Check if an item is already in the cart
    const isItemInCart = (name) => {
        return cartItems.some(item => item.name === name) || addedToCart[name];
    };

    // Handle adding item to cart
    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
        setAddedToCart(prev => ({ ...prev, [plant.name]: true }));
    };

    return (
        <div className="product-list-container">
            {/* Page Header */}
            <div className="product-list-header">
                <h1>Our Houseplants</h1>
                <p className="product-list-subtitle">
                    Explore our carefully curated collection of beautiful houseplants
                </p>
            </div>

            {/* Plant Sections */}
            <div className="product-sections">
                {plantsArray.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="plant-section">
                        <h2 className="section-title">
                            <span>{section.category}</span>
                        </h2>
                        <div className="plant-grid">
                            {section.plants.map((plant, plantIndex) => (
                                <div key={plantIndex} className="plant-card">
                                    <img
                                        src={plant.image}
                                        alt={plant.name}
                                        className="plant-card-img"
                                        loading="lazy"
                                    />
                                    <div className="plant-card-body">
                                        <h3 className="plant-card-name">{plant.name}</h3>
                                        <p className="plant-card-desc">{plant.description}</p>
                                        <p className="plant-card-price">{plant.cost}</p>
                                        <button
                                            className={`btn-add-cart ${isItemInCart(plant.name) ? 'added' : ''}`}
                                            onClick={() => handleAddToCart(plant)}
                                            disabled={isItemInCart(plant.name)}
                                        >
                                            {isItemInCart(plant.name)
                                                ? '✓ Added to Cart'
                                                : 'Add to Cart'}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;
