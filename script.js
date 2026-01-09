const tourismData = [
    // --- UNESCO WORLD HERITAGE SITES ---
    {
        name: "Kaziranga National Park",
        city: "Golaghat/Nagaon",
        category: "UNESCO World Heritage",
        description: "The pride of Assam. Home to the world's largest population of the Great Indian One-Horned Rhinoceros. Visitors can enjoy Elephant and Jeep safaris to spot Tigers, Wild Buffalos, and diverse bird species.",
        img: "https://images.unsplash.com/photo-158179354716dc-944208226071?q=80"
    },
    {
        name: "Manas National Park",
        city: "Barpeta/Baksa",
        category: "UNESCO World Heritage",
        description: "A Project Tiger and Elephant Reserve. Located on the foothills of the Himalayas, it is famous for its rare Pygmy Hog and Golden Langur. Its scenic river rafting is a must for adventure seekers.",
        img: "https://images.unsplash.com/photo-1626082869491-030da6440c95?q=80"
    },
    {
        name: "Charaideo Maidams",
        city: "Charaideo",
        category: "UNESCO World Heritage (Cultural)",
        description: "Known as the 'Pyramids of Assam', these are burial grounds of Ahom royalty. Recently inducted into the UNESCO list in 2024, representing the 600-year Ahom legacy.",
        img: "https://images.unsplash.com/photo-1600100397608-f0907405391a?q=80"
    },

    // --- CITY-WISE TOURIST GEMS ---
    {
        name: "Kamakhya Temple",
        city: "Guwahati",
        category: "Religious Heritage",
        description: "One of the oldest Shakti Peethas in India. Situated on Nilachal Hill, it is the center of the famous Ambubachi Mela. Guwahati also offers river cruises on the Brahmaputra.",
        img: "https://images.unsplash.com/photo-1590059371714-8025287f329d?q=80"
    },
    {
        name: "Majuli Island",
        city: "Jorhat",
        category: "Cultural Capital",
        description: "The world's largest river island. Witness the Neo-Vaishnavite culture in the 'Sattras' (monasteries), world-famous mask-making, and unique Mising tribal handlooms.",
        img: "https://images.unsplash.com/photo-1647864819770-057d76973357?q=80"
    },
    {
        name: "Rang Ghar & Talatal Ghar",
        city: "Sivasagar",
        category: "Historical Circuit",
        description: "Once the glorious capital of the Ahom Kingdom. Rang Ghar is Asia's oldest amphitheater, and the nearby massive Sivasagar Tank is a marvel of ancient engineering.",
        img: "https://images.unsplash.com/photo-1632734185121-507981507d64?q=80"
    },
    {
        name: "Haflong Hill Station",
        city: "Dima Hasao",
        category: "Nature & Adventure",
        description: "Assam's only hill station, known as the 'Land of the Blue Hills'. Famous for the mysterious bird phenomenon at Jatinga and the emerald green Haflong Lake.",
        img: "https://images.unsplash.com/photo-1589114620583-0975618f3a39?q=80"
    },
    {
        name: "Tea Estates of Dibrugarh",
        city: "Dibrugarh",
        category: "Agro-Tourism",
        description: "Known as the 'Tea City of India'. Visitors can stay in heritage British-era bungalows and experience the entire journey of tea from leaf to cup.",
        img: "https://images.unsplash.com/photo-1571891979114-07382215c92c?q=80"
    },
    {
        name: "Mayong (Land of Magic)",
        city: "Morigaon",
        category: "Occult Heritage",
        description: "Historically known as the cradle of black magic in India. Today, it offers a fascinating look into ancient sorcery artifacts and is adjacent to Pobitora Wildlife Sanctuary.",
        img: "https://images.unsplash.com/photo-1610411802319-756024101962?q=80"
    }
];

// Updated Function to Render Government-style cards
function loadPortal() {
    const grid = document.getElementById('places-grid');
    grid.innerHTML = tourismData.map(place => `
        <div class="card">
            <img src="${place.img}" alt="${place.name}">
            <div class="card-content">
                <span class="city-tag">${place.city}</span>
                <p style="font-weight: 700; color: #1e4d2b; font-size: 1.1rem; margin-top: 5px;">${place.name}</p>
                <p style="color: #d4af37; font-size: 0.8rem; font-weight: 600;">${place.category}</p>
                <p style="margin: 10px 0; font-size: 0.9rem; color: #555;">${place.description}</p>
                <button class="btn-book" onclick="addToBookings('${place.name}')">Add to Travel Plan</button>
            </div>
        </div>
    `).join('');
}

// Logic to Save Data
function addToBookings(placeName) {
    let myTrips = JSON.parse(localStorage.getItem('assam_trips')) || [];
    myTrips.push({ name: placeName, time: new Date().toLocaleDateString() });
    localStorage.setItem('assam_trips', JSON.stringify(myTrips));
    alert(placeName + " saved to your itinerary!");
}

function toggleDashboard() {
    const modal = document.getElementById('dashboard');
    const list = document.getElementById('booking-list');
    const savedTrips = JSON.parse(localStorage.getItem('assam_trips')) || [];
    list.innerHTML = savedTrips.map(t => `<li>${t.name} (${t.time})</li>`).join('');
    modal.style.display = (modal.style.display === "block") ? "none" : "block";
}

loadPortal();
