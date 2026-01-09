const tourismData = [
    // --- UNESCO WORLD HERITAGE SITES ---
    {
        name: "Kaziranga National Park",
        city: "Golaghat/Nagaon",
        category: "UNESCO World Heritage",
        description: "The pride of Assam. Home to the world's largest population of the Great Indian One-Horned Rhinoceros. Visitors can enjoy Elephant and Jeep safaris to spot Tigers, Wild Buffalos, and diverse bird species.",
        img: "https://imgcld.yatra.com/ytimages/image/upload/t_yt_blog_c_fill_q_auto:good_f_auto_w_800_h_500/v1553857212/Kaziranga%20National%20Park%20in%20Assam_1553856939.jpg"
    },
    {
        name: "Manas National Park",
        city: "Barpeta/Baksa",
        category: "UNESCO World Heritage",
        description: "A Project Tiger and Elephant Reserve. Located on the foothills of the Himalayas, it is famous for its rare Pygmy Hog and Golden Langur. Its scenic river rafting is a must for adventure seekers.",
        img: "https://thejerker.com/wp-content/uploads/2022/12/Herd_of_Elephant_in_Manas.jpg"
    },
    {
        name: "Charaideo Maidams",
        city: "Charaideo",
        category: "UNESCO World Heritage (Cultural)",
        description: "Known as the 'Pyramids of Assam', these are burial grounds of Ahom royalty. Recently inducted into the UNESCO list in 2024, representing the 600-year Ahom legacy.",
        img: "https://organiser.org/wp-content/uploads/2023/02/place.jpg"
    },

    // --- CITY-WISE TOURIST GEMS ---
    {
        name: "Kamakhya Temple",
        city: "Guwahati",
        category: "Religious Heritage",
        description: "One of the oldest Shakti Peethas in India. Situated on Nilachal Hill, it is the center of the famous Ambubachi Mela. Guwahati also offers river cruises on the Brahmaputra.",
        img: "https://www.northeastbullet.com/wp-content/uploads/2024/03/kamakhya-temple-1.jpg"
    },
    {
        name: "Majuli Island",
        city: "Jorhat",
        category: "Cultural Capital",
        description: "The world's largest river island. Witness the Neo-Vaishnavite culture in the 'Sattras' (monasteries), world-famous mask-making, and unique Mising tribal handlooms.",
        img: "https://chaloghumane.com/wp-content/uploads/2021/05/Majuli-Island-768x538.jpg"
    },
    {
        name: "Rang Ghar & Talatal Ghar",
        city: "Sivasagar",
        category: "Historical Circuit",
        description: "Once the glorious capital of the Ahom Kingdom. Rang Ghar is Asia's oldest amphitheater, and the nearby massive Sivasagar Tank is a marvel of ancient engineering.",
        img: "https://i.ytimg.com/vi/m2c-dxVAhIc/maxresdefault.jpg"
    },
    {
        name: "Haflong Hill Station",
        city: "Dima Hasao",
        category: "Nature & Adventure",
        description: "Assam's only hill station, known as the 'Land of the Blue Hills'. Famous for the mysterious bird phenomenon at Jatinga and the emerald green Haflong Lake.",
        img: "https://www.luxurytrailsofindia.com/wp-content/uploads/2017/10/panimoor-waterfall.jpg"
    },
    {
        name: "Tea Estates of Dibrugarh",
        city: "Dibrugarh",
        category: "Agro-Tourism",
        description: "Known as the 'Tea City of India'. Visitors can stay in heritage British-era bungalows and experience the entire journey of tea from leaf to cup.",
        img: "https://im.hunt.in/cg/Dibrugarh/City-Guide/tea-plucking.jpg"
    },
    {
        name: "Mayong (Land of Magic)",
        city: "Morigaon",
        category: "Occult Heritage",
        description: "Historically known as the cradle of black magic in India. Today, it offers a fascinating look into ancient sorcery artifacts and is adjacent to Pobitora Wildlife Sanctuary.",
        img: "https://www.guwahatiplus.com/storage/app/public/opinion/990/large/73d1223073c82011ef642df28f1310ed.png"
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

