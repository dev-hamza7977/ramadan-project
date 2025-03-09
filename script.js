// document.addEventListener("DOMContentLoaded", function () {
//     const searchInput = document.querySelector(".form-control");
//     const searchButton = document.querySelector(".input-group-text");
//     const prayerTimes = {
//         Fajr: document.querySelector(".namaz-card:nth-child(5) .card-subtitle"),
//         Dhuhr: document.querySelector(".namaz-card:nth-child(4) .card-subtitle"),
//         Asr: document.querySelector(".namaz-card:nth-child(3) .card-subtitle"),
//         Maghrib: document.querySelector(".namaz-card:nth-child(2) .card-subtitle"),
//         Isha: document.querySelector(".namaz-card:nth-child(1) .card-subtitle"),
//     };

//     // Get user's location
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//             (position) => {
//                 const { latitude, longitude } = position.coords;
//                 fetchPrayerTimesByCoords(latitude, longitude);
//             },
//             (error) => {
//                 console.error("Error getting location:", error);
//                 alert("Location access denied. Please search manually.");
//             }
//         );
//     } else {
//         alert("Geolocation is not supported by your browser.");
//     }

//     // Search button click event
//     searchButton.addEventListener("click", function () {
//         const location = searchInput.value.trim();
//         if (location) {
//             fetchPrayerTimesByCity(location);
//         }
//     });

//     // Fetch prayer times by coordinates (default)
//     async function fetchPrayerTimesByCoords(lat, lon) {
//         try {
//             const response = await fetch(`https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lon}&method=2&school=1`);
//             const data = await response.json();
//             updatePrayerTimes(data.data.timings);
//         } catch (error) {
//             console.error("Error fetching prayer times:", error);
//             alert("Failed to load prayer times.");
//         }
//     }

//     // Fetch prayer times by city (user search)
//     async function fetchPrayerTimesByCity(location) {
//         try {
//             const [city, country] = location.split(",");
//             const response = await fetch(`https://api.aladhan.com/v1/timingsByCity?city=${city.trim()}&country=${country ? country.trim() : ""}&method=2&school=1`);
//             const data = await response.json();

//             if (data.code === 200) {
//                 updatePrayerTimes(data.data.timings);
//             } else {
//                 alert("Invalid location. Try again.");
//             }
//         } catch (error) {
//             console.error("Error fetching prayer times:", error);
//             alert("Failed to load prayer times.");
//         }
//     }

//     // Update UI with prayer times
//     function updatePrayerTimes(times) {
//         prayerTimes.Fajr.textContent = times.Fajr;
//         prayerTimes.Dhuhr.textContent = times.Dhuhr;
//         prayerTimes.Asr.textContent = times.Asr; // **Hanafi Asr Time**
//         prayerTimes.Maghrib.textContent = times.Maghrib;
//         prayerTimes.Isha.textContent = times.Isha;
//     }
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const searchInput = document.querySelector(".form-control");
//     const searchButton = document.querySelector(".input-group-text");
//     const prayerCards = document.querySelectorAll(".namaz-card");
//     const prayerTimes = {
//         Fajr: document.querySelector(".namaz-card:nth-child(5) .card-subtitle"),
//         Dhuhr: document.querySelector(".namaz-card:nth-child(4) .card-subtitle"),
//         Asr: document.querySelector(".namaz-card:nth-child(3) .card-subtitle"),
//         Maghrib: document.querySelector(".namaz-card:nth-child(2) .card-subtitle"),
//         Isha: document.querySelector(".namaz-card:nth-child(1) .card-subtitle"),
//     };

//     // Get user's location
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//             (position) => {
//                 const { latitude, longitude } = position.coords;
//                 fetchPrayerTimesByCoords(latitude, longitude);
//             },
//             (error) => {
//                 console.error("Error getting location:", error);
//                 alert("Location access denied. Please search manually.");
//             }
//         );
//     } else {
//         alert("Geolocation is not supported by your browser.");
//     }

//     // Search button click event
//     searchButton.addEventListener("click", function () {
//         const location = searchInput.value.trim();
//         if (location) {
//             fetchPrayerTimesByCity(location);
//         }
//     });

//     // Fetch prayer times by coordinates (default)
//     async function fetchPrayerTimesByCoords(lat, lon) {
//         try {
//             const response = await fetch(`https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lon}&method=2&school=1`);
//             const data = await response.json();
//             updatePrayerTimes(data.data.timings);
//         } catch (error) {
//             console.error("Error fetching prayer times:", error);
//             alert("Failed to load prayer times.");
//         }
//     }

//     // Fetch prayer times by city (user search)
//     async function fetchPrayerTimesByCity(location) {
//         try {
//             const [city, country] = location.split(",");
//             const response = await fetch(`https://api.aladhan.com/v1/timingsByCity?city=${city.trim()}&country=${country ? country.trim() : ""}&method=2&school=1`);
//             const data = await response.json();

//             if (data.code === 200) {
//                 updatePrayerTimes(data.data.timings);
//             } else {
//                 alert("Invalid location. Try again.");
//             }
//         } catch (error) {
//             console.error("Error fetching prayer times:", error);
//             alert("Failed to load prayer times.");
//         }
//     }

//     // Update UI with prayer times
//     function updatePrayerTimes(times) {
//         prayerTimes.Fajr.textContent = times.Fajr;
//         prayerTimes.Dhuhr.textContent = times.Dhuhr;
//         prayerTimes.Asr.textContent = times.Asr; // **Hanafi Asr Time**
//         prayerTimes.Maghrib.textContent = times.Maghrib;
//         prayerTimes.Isha.textContent = times.Isha;

//         highlightNextPrayer(times);
//     }

//     // Highlight the next upcoming prayer
//     function highlightNextPrayer(times) {
//         const now = new Date();
//         const currentTime = now.getHours() * 60 + now.getMinutes(); // Convert current time to minutes

//         const prayerSchedule = {
//             Fajr: convertToMinutes(times.Fajr),
//             Dhuhr: convertToMinutes(times.Dhuhr),
//             Asr: convertToMinutes(times.Asr),
//             Maghrib: convertToMinutes(times.Maghrib),
//             Isha: convertToMinutes(times.Isha),
//         };

//         let nextPrayer = null;
//         let minDiff = Infinity;

//         Object.keys(prayerSchedule).forEach((prayer) => {
//             const diff = prayerSchedule[prayer] - currentTime;
//             if (diff > 0 && diff < minDiff) {
//                 minDiff = diff;
//                 nextPrayer = prayer;
//             }
//         });

//         // If no upcoming prayer found, highlight Fajr (next day's first prayer)
//         if (!nextPrayer) nextPrayer = "Fajr";

//         // Remove highlight from all cards
//         prayerCards.forEach((card) => card.classList.remove("highlight"));

//         // Highlight the upcoming prayer
//         prayerTimes[nextPrayer].closest(".namaz-card").classList.add("highlight");
//     }

//     // Convert HH:MM time to minutes
//     function convertToMinutes(timeString) {
//         const [hours, minutes] = timeString.split(":").map(Number);
//         return hours * 60 + minutes;
//     }

//     // Auto-update highlight every minute
//     setInterval(() => {
//         highlightNextPrayer({
//             Fajr: prayerTimes.Fajr.textContent,
//             Dhuhr: prayerTimes.Dhuhr.textContent,
//             Asr: prayerTimes.Asr.textContent,
//             Maghrib: prayerTimes.Maghrib.textContent,
//             Isha: prayerTimes.Isha.textContent,
//         });
//     }, 60000); // Every 1 minute
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const searchInput = document.querySelector(".form-control");
//     const searchButton = document.querySelector(".input-group-text");
//     const prayerCards = document.querySelectorAll(".namaz-card"); // Ensure these exist in HTML

//     // Updated selectors for Sehri and Iftari
//     const sehriIftariCards = document.querySelectorAll(".sehri-iftar-card");
    
//     const prayerTimes = {
//         Fajr: document.querySelector('[data-namaz="Fajr"] .card-subtitle'),
//         Dhuhr: document.querySelector('[data-namaz="Dhuhr"] .card-subtitle'),
//         Asr: document.querySelector('[data-namaz="Asr"] .card-subtitle'),
//         Maghrib: document.querySelector('[data-namaz="Maghrib"] .card-subtitle'),
//         Isha: document.querySelector('[data-namaz="Isha"] .card-subtitle'),
//         Sehri: sehriIftariCards.length > 0 ? sehriIftariCards[0].querySelector(".card-subtitle") : null,
//         Iftari: sehriIftariCards.length > 1 ? sehriIftariCards[1].querySelector(".card-subtitle") : null,
//     };

//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//             (position) => {
//                 const { latitude, longitude } = position.coords;
//                 fetchPrayerTimesByCoords(latitude, longitude);
//             },
//             (error) => {
//                 console.error("Error getting location:", error);
//                 alert("Location access denied. Please search manually.");
//             }
//         );
//     } else {
//         alert("Geolocation is not supported by your browser.");
//     }

//     searchButton.addEventListener("click", function () {
//         const location = searchInput.value.trim();
//         if (location) {
//             fetchPrayerTimesByCity(location);
//         }
//     });

//     async function fetchPrayerTimesByCoords(lat, lon) {
//         try {
//             const response = await fetch(`https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lon}&method=2&school=1`);
//             const data = await response.json();
//             updatePrayerTimes(data.data.timings);
//         } catch (error) {
//             console.error("Error fetching prayer times:", error);
//             alert("Failed to load prayer times.");
//         }
//     }

//     async function fetchPrayerTimesByCity(location) {
//         try {
//             const [city, country] = location.split(",");
//             const response = await fetch(`https://api.aladhan.com/v1/timingsByCity?city=${city.trim()}&country=${country ? country.trim() : ""}&method=2&school=1`);
//             const data = await response.json();

//             if (data.code === 200) {
//                 updatePrayerTimes(data.data.timings);
//             } else {
//                 alert("Invalid location. Try again.");
//             }
//         } catch (error) {
//             console.error("Error fetching prayer times:", error);
//             alert("Failed to load prayer times.");
//         }
//     }

//     function updatePrayerTimes(times) {
//         if (prayerTimes.Fajr) prayerTimes.Fajr.textContent = times.Fajr;
//         if (prayerTimes.Dhuhr) prayerTimes.Dhuhr.textContent = times.Dhuhr;
//         if (prayerTimes.Asr) prayerTimes.Asr.textContent = times.Asr;
//         if (prayerTimes.Maghrib) prayerTimes.Maghrib.textContent = times.Maghrib;
//         if (prayerTimes.Isha) prayerTimes.Isha.textContent = times.Isha;

//         if (prayerTimes.Sehri) prayerTimes.Sehri.textContent = times.Imsak;
//         if (prayerTimes.Iftari) prayerTimes.Iftari.textContent = times.Maghrib;

//         highlightNextPrayer(times);
//     }

//     function highlightNextPrayer(times) {
//         const now = new Date();
//         const currentTime = now.getHours() * 60 + now.getMinutes();

//         const prayerSchedule = {
//             Sehri: convertToMinutes(times.Imsak),
//             Fajr: convertToMinutes(times.Fajr),
//             Dhuhr: convertToMinutes(times.Dhuhr),
//             Asr: convertToMinutes(times.Asr),
//             Maghrib: convertToMinutes(times.Maghrib),
//             Isha: convertToMinutes(times.Isha),
//             Iftari: convertToMinutes(times.Maghrib),
//         };

//         let nextPrayer = null;
//         let minDiff = Infinity;

//         Object.keys(prayerSchedule).forEach((prayer) => {
//             const diff = prayerSchedule[prayer] - currentTime;
//             if (diff > 0 && diff < minDiff) {
//                 minDiff = diff;
//                 nextPrayer = prayer;
//             }
//         });

//         if (!nextPrayer) nextPrayer = "Sehri";

//         prayerCards.forEach((card) => card.classList.remove("highlight"));

//         if (prayerTimes[nextPrayer]) {
//             prayerTimes[nextPrayer].closest(".namaz-card, .sehri-iftar-card").classList.add("highlight");
//         }
//     }

//     function convertToMinutes(timeString) {
//         const [hours, minutes] = timeString.split(":").map(Number);
//         return hours * 60 + minutes;
//     }

//     setInterval(() => {
//         highlightNextPrayer({
//             Sehri: prayerTimes.Sehri ? prayerTimes.Sehri.textContent : "00:00",
//             Fajr: prayerTimes.Fajr ? prayerTimes.Fajr.textContent : "00:00",
//             Dhuhr: prayerTimes.Dhuhr ? prayerTimes.Dhuhr.textContent : "00:00",
//             Asr: prayerTimes.Asr ? prayerTimes.Asr.textContent : "00:00",
//             Maghrib: prayerTimes.Maghrib ? prayerTimes.Maghrib.textContent : "00:00",
//             Isha: prayerTimes.Isha ? prayerTimes.Isha.textContent : "00:00",
//             Iftari: prayerTimes.Iftari ? prayerTimes.Iftari.textContent : "00:00",
//         });
//     }, 60000);
// });




document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".form-control");
    const searchButton = document.querySelector(".input-group-text");
    const prayerCards = document.querySelectorAll(".namaz-card");
    const sehriIftariCards = document.querySelectorAll(".sehri-iftar-card");

    const prayerTimes = {
        Fajr: document.querySelector('[data-namaz="Fajr"] .card-subtitle'),
        Dhuhr: document.querySelector('[data-namaz="Dhuhr"] .card-subtitle'),
        Asr: document.querySelector('[data-namaz="Asr"] .card-subtitle'),
        Maghrib: document.querySelector('[data-namaz="Maghrib"] .card-subtitle'),
        Isha: document.querySelector('[data-namaz="Isha"] .card-subtitle'),
        Sehri: sehriIftariCards.length > 0 ? sehriIftariCards[0].querySelector(".card-subtitle") : null,
        Iftari: sehriIftariCards.length > 1 ? sehriIftariCards[1].querySelector(".card-subtitle") : null,
    };

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                fetchPrayerTimesByCoords(latitude, longitude);
            },
            (error) => {
                console.error("Error getting location:", error);
                alert("Location access denied. Please search manually.");
            }
        );
    } else {
        alert("Geolocation is not supported by your browser.");
    }

    searchButton.addEventListener("click", function () {
        const location = searchInput.value.trim();
        if (location) {
            fetchPrayerTimesByCity(location);
        }
    });

    async function fetchPrayerTimesByCoords(lat, lon) {
        try {
            const response = await fetch(`https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lon}&method=1&school=1`);
            const data = await response.json();
            updatePrayerTimes(data.data.timings);
            fetchHijriDate(data.data.date.gregorian.date);
        } catch (error) {
            console.error("Error fetching prayer times:", error);
            alert("Failed to load prayer times.");
        }
    }

    async function fetchPrayerTimesByCity(location) {
        try {



            const [city, country] = location.split(",").map(str => str.trim());
            const apiUrl = country 
                ? `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=1&school=1`
                : `https://api.aladhan.com/v1/timingsByCity?city=${city}&method=1&school=1`;
            
            const response = await fetch(apiUrl);
            const data = await response.json();

            if (data.code === 200) {
                updatePrayerTimes(data.data.timings);
                fetchHijriDate(data.data.date.gregorian.date);
            } else {
                alert("Invalid city. Please try again.");
            }
        } catch (error) {
            console.error("Error fetching prayer times:", error);
            alert("Failed to load prayer times.");
        }
    }

    function adjustTime(time, offset) {
    if (!time) return "--:--";

    let [hours, minutes] = time.split(":").map(Number);
    let totalMinutes = (hours * 60 + minutes + offset + 1440) % 1440; // Ensures proper wraparound

    let adjustedHours = Math.floor(totalMinutes / 60);
    let adjustedMinutes = totalMinutes % 60;

    return `${String(adjustedHours).padStart(2, "0")}:${String(adjustedMinutes).padStart(2, "0")}`;
}


function updatePrayerTimes(times) {
    if (!times) return;

    prayerTimes.Fajr.textContent = adjustTime(times.Fajr, -1);
    prayerTimes.Dhuhr.textContent = times.Dhuhr || "--:--";
    prayerTimes.Asr.textContent = adjustTime(times.Asr, -1);  // Increased by 1 min
    prayerTimes.Maghrib.textContent = adjustTime(times.Maghrib, 3); // Increased by 1 min (was +2 before)
    prayerTimes.Isha.textContent = adjustTime(times.Isha, -1); // Increased by 1 min (was -2 before)
    prayerTimes.Sehri.textContent = adjustTime(times.Imsak, -1); // Increased by 1 min (was -2 before)
    prayerTimes.Iftari.textContent = adjustTime(times.Maghrib, 3); // Increased by 1 min (was +2 before)

    // Highlight the correct prayer after times are updated
    setTimeout(() => highlightNextPrayer(times), 100);
}

function adjustTime(time, offset) {
    if (!time) return "--:--";

    let [hours, minutes] = time.split(":").map(Number);
    let totalMinutes = hours * 60 + minutes + offset;

    if (totalMinutes < 0) totalMinutes += 1440; // Ensure time doesn't go negative
    if (totalMinutes >= 1440) totalMinutes -= 1440; // Ensure time stays within the day

    let adjustedHours = Math.floor(totalMinutes / 60);
    let adjustedMinutes = totalMinutes % 60;

    return `${String(adjustedHours).padStart(2, "0")}:${String(adjustedMinutes).padStart(2, "0")}`;
}


   function highlightNextPrayer(times) {
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();

    const prayerSchedule = {
        Sehri: convertToMinutes(adjustTime(times.Imsak, -1)),
        Fajr: convertToMinutes(adjustTime(times.Fajr, -1)),
        Dhuhr: convertToMinutes(times.Dhuhr),
        Asr: convertToMinutes(adjustTime(times.Asr, -1)),
        Maghrib: convertToMinutes(adjustTime(times.Maghrib, 2)),
        Isha: convertToMinutes(adjustTime(times.Isha, 2)),
        Iftari: convertToMinutes(adjustTime(times.Maghrib, 2)),
    };

    let currentPrayer = null;
    let nextPrayer = null;
    const prayerNames = Object.keys(prayerSchedule);

    for (let i = 0; i < prayerNames.length; i++) {
        const prayer = prayerNames[i];
        const prayerTime = prayerSchedule[prayer];
        const nextPrayerTime = prayerSchedule[prayerNames[i + 1]] || prayerSchedule["Sehri"];

        if (currentTime >= prayerTime && currentTime < nextPrayerTime) {
            currentPrayer = prayer;
            nextPrayer = prayerNames[i + 1] || "Sehri";
            break;
        }
    }

    // Special case: If it's past Isha but before Sehri, keep Isha highlighted
    if (currentTime >= prayerSchedule["Isha"] || currentTime < prayerSchedule["Fajr"]) {
        currentPrayer = "Isha";
        nextPrayer = "Sehri";
    }

    document.querySelectorAll(".namaz-card, .sehri-iftar-card").forEach(card => {
        card.classList.remove("highlight", "current");
    });

    if (currentPrayer && prayerTimes[currentPrayer]) {
        prayerTimes[currentPrayer].closest(".namaz-card, .sehri-iftar-card").classList.add("current");
    }

    if (nextPrayer && prayerTimes[nextPrayer]) {
        prayerTimes[nextPrayer].closest(".namaz-card, .sehri-iftar-card").classList.add("highlight");
    }
}


    function convertToMinutes(time) {
        const [hours, minutes] = time.split(":").map(Number);
        return hours * 60 + minutes;
    }

    async function fetchHijriDate(gregorianDate) {
        try {
            let response = await fetch(`https://api.aladhan.com/v1/gToH?gregorian=${gregorianDate}`);
            let data = await response.json();
            document.querySelector(".islamic-date").innerText = 
                `${data.data.hijri.day} ${data.data.hijri.month.en} ${data.data.hijri.year}`;
        } catch (error) {
            document.querySelector(".islamic-date").innerText = "Failed to load date";
        }
    }

    const quotes = [
        `"Whoever bows before Allah, <br> Allah makes the world bow before him."`,
        `"Indeed, with hardship comes ease. <br> (Quran 94:6)"`,
        `"Be like a flower that gives its fragrance <br> even to the hand that crushes it."`,
        `"The best among you are those <br> who have the best manners and character."`,
        `"A moment of patience in a moment of anger <br> prevents a thousand moments of regret."`
    ];

    function updateDailyQuote() {
        let today = new Date();
        let quoteIndex = today.getDate() % quotes.length;
        document.querySelector(".daily-quote").innerHTML = quotes[quoteIndex];
    }

    updateDailyQuote();
});





    