// ===== DOM Elements =====
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const clearBtn = document.getElementById('clearBtn');
const resultsSection = document.getElementById('results');
const resultsContainer = document.getElementById('resultsContainer');

// ===== Fetch Recommendations from JSON =====
async function fetchRecommendations() {
    try {
        const response = await fetch('travel_recommendation_api.json');
        if (!response.ok) throw new Error('Failed to fetch recommendations');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

// ===== Search Functionality =====
async function searchRecommendations() {
    const keyword = searchInput.value.trim().toLowerCase();
    if (!keyword) {
        alert('Please enter a destination or keyword to search.');
        return;
    }

    const data = await fetchRecommendations();
    if (!data) {
        resultsContainer.innerHTML = '<p style="text-align:center;color:#888;">Unable to load recommendations. Please try again later.</p>';
        resultsSection.style.display = 'block';
        return;
    }

    let matchedResults = [];

    // Search by keyword categories: "beach", "temple", "country"
    const beachKeywords = ['beach', 'beaches'];
    const templeKeywords = ['temple', 'temples'];
    const countryKeywords = ['country', 'countries'];

    if (beachKeywords.some(k => keyword.includes(k))) {
        // Show all beaches
        matchedResults = data.beaches.map(item => ({
            name: item.name,
            imageUrl: item.imageUrl,
            description: item.description
        }));
    } else if (templeKeywords.some(k => keyword.includes(k))) {
        // Show all temples
        matchedResults = data.temples.map(item => ({
            name: item.name,
            imageUrl: item.imageUrl,
            description: item.description
        }));
    } else if (countryKeywords.some(k => keyword.includes(k))) {
        // Show all country cities
        data.countries.forEach(country => {
            country.cities.forEach(city => {
                matchedResults.push({
                    name: city.name,
                    imageUrl: city.imageUrl,
                    description: city.description
                });
            });
        });
    } else {
        // Search by country name or city name
        data.countries.forEach(country => {
            if (country.name.toLowerCase().includes(keyword)) {
                // If country matches, add all its cities
                country.cities.forEach(city => {
                    matchedResults.push({
                        name: city.name,
                        imageUrl: city.imageUrl,
                        description: city.description
                    });
                });
            } else {
                // Check individual cities
                country.cities.forEach(city => {
                    if (city.name.toLowerCase().includes(keyword)) {
                        matchedResults.push({
                            name: city.name,
                            imageUrl: city.imageUrl,
                            description: city.description
                        });
                    }
                });
            }
        });

        // Also search temples by name
        data.temples.forEach(temple => {
            if (temple.name.toLowerCase().includes(keyword)) {
                matchedResults.push({
                    name: temple.name,
                    imageUrl: temple.imageUrl,
                    description: temple.description
                });
            }
        });

        // Also search beaches by name
        data.beaches.forEach(beach => {
            if (beach.name.toLowerCase().includes(keyword)) {
                matchedResults.push({
                    name: beach.name,
                    imageUrl: beach.imageUrl,
                    description: beach.description
                });
            }
        });
    }

    displayResults(matchedResults);
}

// ===== Display Results =====
function displayResults(results) {
    resultsContainer.innerHTML = '';

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p style="text-align:center;color:#888;grid-column:1/-1;">No recommendations found. Try searching for "beach", "temple", or a country name.</p>';
        resultsSection.style.display = 'block';
        resultsSection.scrollIntoView({ behavior: 'smooth' });
        return;
    }

    results.forEach(item => {
        const card = document.createElement('div');
        card.className = 'result-card';
        card.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.name}" loading="lazy">
            <div class="card-body">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
            </div>
        `;
        resultsContainer.appendChild(card);
    });

    resultsSection.style.display = 'block';
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

// ===== Clear Results =====
function clearResults() {
    searchInput.value = '';
    resultsContainer.innerHTML = '';
    resultsSection.style.display = 'none';
}

// ===== Contact Form Handler =====
function handleContactSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Thank you, ${name}! Your message has been sent. We'll get back to you soon.`);
    event.target.reset();
}

// ===== Event Listeners =====
searchBtn.addEventListener('click', searchRecommendations);
clearBtn.addEventListener('click', clearResults);

// Allow searching with Enter key
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchRecommendations();
    }
});

// ===== Active Nav Link Highlight on Scroll =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
