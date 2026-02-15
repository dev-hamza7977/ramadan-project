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




// document.addEventListener("DOMContentLoaded", function () {
//     const searchInput = document.querySelector(".form-control");
//     const searchButton = document.querySelector(".input-group-text");
//     const prayerCards = document.querySelectorAll(".namaz-card");
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
//             let now = new Date();
//             let today = now.toISOString().split("T")[0]; // YYYY-MM-DD format

//             // Fetch today's prayer times
//             let response = await fetch(`https://api.aladhan.com/v1/timings/${today}?latitude=${lat}&longitude=${lon}&method=1&school=1`);
//             let data = await response.json();
//             let prayerTimings = data.data.timings;

//             // Get Maghrib time in minutes
//             let maghribTime = convertToMinutes(prayerTimings.Maghrib);
//             let currentMinutes = now.getHours() * 60 + now.getMinutes();

//             // If it's after Maghrib, fetch tomorrow's prayer times
//             if (currentMinutes >= maghribTime) {
//                 let tomorrow = new Date();
//                 tomorrow.setDate(tomorrow.getDate() + 1);
//                 let tomorrowFormatted = tomorrow.toISOString().split("T")[0];

//                 response = await fetch(`https://api.aladhan.com/v1/timings/${tomorrowFormatted}?latitude=${lat}&longitude=${lon}&method=1&school=1`);
//                 data = await response.json();
//                 prayerTimings = data.data.timings;
//             }

//             updatePrayerTimes(prayerTimings);
//             fetchHijriDate(today, prayerTimings.Maghrib);
//         } catch (error) {
//             console.error("Error fetching prayer times:", error);
//             alert("Failed to load prayer times.");
//         }
//     }

//     async function fetchPrayerTimesByCity(location) {
//         try {
//             const [city, country] = location.split(",").map(str => str.trim());
//             const apiUrl = country 
//                 ? `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=1&school=1`
//                 : `https://api.aladhan.com/v1/timingsByCity?city=${city}&method=1&school=1`;

//             let response = await fetch(apiUrl);
//             let data = await response.json();
//             let prayerTimings = data.data.timings;

//             let maghribTime = convertToMinutes(prayerTimings.Maghrib);
//             let now = new Date();
//             let currentMinutes = now.getHours() * 60 + now.getMinutes();

//             // If it's after Maghrib, fetch tomorrow's timings
//             if (currentMinutes >= maghribTime) {
//                 let tomorrow = new Date();
//                 tomorrow.setDate(tomorrow.getDate() + 1);
//                 let tomorrowFormatted = tomorrow.toISOString().split("T")[0];

//                 response = await fetch(`${apiUrl}&date=${tomorrowFormatted}`);
//                 data = await response.json();
//                 prayerTimings = data.data.timings;
//             }

//             updatePrayerTimes(prayerTimings);
//             fetchHijriDate(data.data.date.gregorian.date, prayerTimings.Maghrib);
//         } catch (error) {
//             console.error("Error fetching prayer times:", error);
//             alert("Failed to load prayer times.");
//         }
//     }

//     function adjustTime(time, offset) {
//         if (!time) return "--:--";

//         let [hours, minutes] = time.split(":").map(Number);
//         let totalMinutes = (hours * 60 + minutes + offset + 1440) % 1440; // Ensures proper wraparound

//         let adjustedHours = Math.floor(totalMinutes / 60);
//         let adjustedMinutes = totalMinutes % 60;

//         return `${String(adjustedHours).padStart(2, "0")}:${String(adjustedMinutes).padStart(2, "0")}`;
//     }

//     function updatePrayerTimes(times) {
//         if (!times) return;

//         prayerTimes.Fajr.textContent = adjustTime(times.Fajr, -1);
//         prayerTimes.Dhuhr.textContent = times.Dhuhr || "--:--";
//         prayerTimes.Asr.textContent = adjustTime(times.Asr, -1);
//         prayerTimes.Maghrib.textContent = adjustTime(times.Maghrib, 3);
//         prayerTimes.Isha.textContent = adjustTime(times.Isha, -1);
//         if (prayerTimes.Sehri) prayerTimes.Sehri.textContent = adjustTime(times.Imsak, -1);
//         if (prayerTimes.Iftari) prayerTimes.Iftari.textContent = adjustTime(times.Maghrib, 3);

//         // Highlight the correct prayer after times are updated
//         highlightNextPrayer(times);
//     }

//     function highlightNextPrayer(times) {
//         const now = new Date();
//         const currentTime = now.getHours() * 60 + now.getMinutes();

//         const prayerSchedule = {
//             Sehri: convertToMinutes(adjustTime(times.Imsak, -1)),
//             Fajr: convertToMinutes(adjustTime(times.Fajr, -1)),
//             Dhuhr: convertToMinutes(times.Dhuhr),
//             Asr: convertToMinutes(adjustTime(times.Asr, -1)),
//             Maghrib: convertToMinutes(adjustTime(times.Maghrib, 2)),
//             Isha: convertToMinutes(adjustTime(times.Isha, 2)),
//             Iftari: convertToMinutes(adjustTime(times.Maghrib, 2)),
//         };

//         let currentPrayer = null;
//         let nextPrayer = null;
//         const prayerNames = Object.keys(prayerSchedule);

//         for (let i = 0; i < prayerNames.length; i++) {
//             const prayer = prayerNames[i];
//             const prayerTime = prayerSchedule[prayer];
//             const nextPrayerTime = prayerSchedule[prayerNames[i + 1]] || prayerSchedule["Sehri"];

//             if (currentTime >= prayerTime && currentTime < nextPrayerTime) {
//                 currentPrayer = prayer;
//                 nextPrayer = prayerNames[i + 1] || "Sehri";
//                 break;
//             }
//         }

//         // Special case: If it's past Isha but before Sehri, keep Isha highlighted
//         if (currentTime >= prayerSchedule["Isha"] || currentTime < prayerSchedule["Fajr"]) {
//             currentPrayer = "Isha";
//             nextPrayer = "Sehri";
//         }

//         document.querySelectorAll(".namaz-card, .sehri-iftar-card").forEach(card => {
//             card.classList.remove("highlight", "current");
//         });

//         if (currentPrayer && prayerTimes[currentPrayer]) {
//             prayerTimes[currentPrayer].closest(".namaz-card, .sehri-iftar-card").classList.add("current");
//         }

//         if (nextPrayer && prayerTimes[nextPrayer]) {
//             prayerTimes[nextPrayer].closest(".namaz-card, .sehri-iftar-card").classList.add("highlight");
//         }
//     }

//     async function fetchHijriDate(gregorianDate, maghribTime) {
//         try {
//             let response = await fetch(`https://api.aladhan.com/v1/gToH?gregorian=${gregorianDate}`);          
//             let data = await response.json();

//             if (data.code !== 200) throw new Error("Invalid API response");

//             let hijriDate = data.data.hijri;
//             let hijriDay = parseInt(hijriDate.day, 10);
//             let hijriMonth = hijriDate.month.en;
//             let hijriYear = hijriDate.year;

//             let now = new Date();
//             let currentMinutes = now.getHours() * 60 + now.getMinutes();
//             let maghribMinutes = convertToMinutes(maghribTime);

//             // If current time is after Maghrib, fetch the next day's Hijri date
//             if (currentMinutes >= maghribMinutes) {
//                 let tomorrowGregorian = getNextGregorianDate(gregorianDate);
//                 let nextResponse = await fetch(`https://api.aladhan.com/v1/gToH?gregorian=${tomorrowGregorian}`);
//                 let nextData = await nextResponse.json();

//                 if (nextData.code === 200) {
//                     hijriDate = nextData.data.hijri;
//                     hijriDay = parseInt(hijriDate.day, 10);
//                     hijriMonth = hijriDate.month.en;
//                     hijriYear = hijriDate.year;
//                 }
//             }

//             // Update UI
//             document.querySelector(".islamic-date").innerText = `${hijriDay} ${hijriMonth} ${hijriYear}`;
//             updateDailyQuote(hijriDay);
//         } catch (error) {
//             console.error("Error fetching Hijri date:", error);
//             document.querySelector(".islamic-date").innerText = "Failed to load date";
//         }
//     }

//     // Helper function to get next Gregorian date
//     function getNextGregorianDate(currentDate) {
//         let date = new Date(currentDate);
//         date.setDate(date.getDate() + 1);
//         return date.toISOString().split('T')[0]; // Format YYYY-MM-DD
//     }

//     // Convert time (HH:MM) to minutes
//     function convertToMinutes(timeStr) {
//         let [hours, minutes] = timeStr.split(":").map(Number);
//         return hours * 60 + minutes;
//     }

//     const quotes = [
//         `"Whoever bows before Allah, <br> Allah makes the world bow before him."`,
//         `"Indeed, with hardship comes ease. <br> (Quran 94:6)"`,
//         `"Be like a flower that gives its fragrance <br> even to the hand that crushes it."`,
//         `"The best among you are those <br> who have the best manners and character."`,
//         `"A moment of patience in a moment of anger <br> prevents a thousand moments of regret."`
//     ];

//     function updateDailyQuote(hijriDay) {
//         let quoteIndex = hijriDay % quotes.length;
//         document.querySelector(".daily-quote").innerHTML = quotes[quoteIndex];
//     }
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
        Chasht: document.querySelector('[data-namaz="Chasht"] .card-subtitle'),
Ishraq: document.querySelector('[data-namaz="Ishraq"] .card-subtitle'),
Tahajjud: document.querySelector('[data-namaz="Tahajjud"] .card-subtitle'),
Awwabeen: document.querySelector('[data-namaz="Awwabeen"] .card-subtitle'),

        
        Sehri: sehriIftariCards.length > 0 ? sehriIftariCards[0].querySelector(".card-subtitle") : null,
        Iftari: sehriIftariCards.length > 1 ? sehriIftariCards[1].querySelector(".card-subtitle") : null,
    };

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                fetchPrayerTimesByCoords(position.coords.latitude, position.coords.longitude);
            },
            () => alert("Location access denied. Please search manually.")
        );
    }

    searchButton.addEventListener("click", function () {
        const location = searchInput.value.trim();
        if (location) fetchPrayerTimesByCity(location);
    });

    function getEffectiveGregorianDate(maghribTimeStr) {
        const now = new Date();
        const currentMinutes = now.getHours() * 60 + now.getMinutes();
        const maghribMinutes = convertToMinutes(maghribTimeStr);

        let effectiveDate = new Date();
        if (currentMinutes >= maghribMinutes) {
            effectiveDate.setDate(effectiveDate.getDate() + 1);
        }
        return effectiveDate.toISOString().split("T")[0];
    }

    async function fetchPrayerTimesByCoords(lat, lon) {
        try {
            let today = new Date().toISOString().split("T")[0];
            let response = await fetch(`https://api.aladhan.com/v1/timings/${today}?latitude=${lat}&longitude=${lon}&method=1&school=1`);
            let data = await response.json();
            let prayerTimings = data.data.timings;

            updatePrayerTimes(prayerTimings);

            let effectiveDate = getEffectiveGregorianDate(prayerTimings.Maghrib);
            fetchHijriDate(effectiveDate);

        } catch (error) {
            alert("Failed to load prayer times.");
        }
    }

    async function fetchPrayerTimesByCity(location) {
        try {
            const [city, country] = location.split(",").map(str => str.trim());
            const apiUrl = country
                ? `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=1&school=1`
                : `https://api.aladhan.com/v1/timingsByCity?city=${city}&method=1&school=1`;

            let response = await fetch(apiUrl);
            let data = await response.json();
            let prayerTimings = data.data.timings;

            updatePrayerTimes(prayerTimings);

            let effectiveDate = getEffectiveGregorianDate(prayerTimings.Maghrib);
            fetchHijriDate(effectiveDate);

        } catch (error) {
            alert("Failed to load prayer times.");
        }
    }

    function adjustTime(time, offset) {
        if (!time) return "--:--";
        let [hours, minutes] = time.split(":").map(Number);
        let totalMinutes = (hours * 60 + minutes + offset + 1440) % 1440;
        return `${String(Math.floor(totalMinutes / 60)).padStart(2, "0")}:${String(totalMinutes % 60).padStart(2, "0")}`;
    }

    function updatePrayerTimes(times) {
        if (!times) return;

        prayerTimes.Fajr.textContent = adjustTime(times.Fajr, -1);
        prayerTimes.Dhuhr.textContent = times.Dhuhr || "--:--";
        prayerTimes.Asr.textContent = adjustTime(times.Asr, -1);
        prayerTimes.Maghrib.textContent = adjustTime(times.Maghrib, 3);
        prayerTimes.Isha.textContent = adjustTime(times.Isha, -1);
        // 🌅 Ishraq = 15 mins after Sunrise
if (prayerTimes.Ishraq && times.Sunrise) {
    prayerTimes.Ishraq.textContent = adjustTime(times.Sunrise, 15);
}

// ☀️ Chasht (Duha) = ~1.5 hours after Sunrise
if (prayerTimes.Chasht && times.Sunrise) {
    prayerTimes.Chasht.textContent = adjustTime(times.Sunrise, 90);
}

// 🌙 Awwabeen = 15 mins after Maghrib
if (prayerTimes.Awwabeen && times.Maghrib) {
    prayerTimes.Awwabeen.textContent = adjustTime(times.Maghrib, 15);
}

// 🌌 Tahajjud = 1 hour before Fajr
if (prayerTimes.Tahajjud && times.Fajr) {
    prayerTimes.Tahajjud.textContent = adjustTime(times.Fajr, -60);
}

        if (prayerTimes.Sehri) prayerTimes.Sehri.textContent = adjustTime(times.Imsak, -1);
        if (prayerTimes.Iftari) prayerTimes.Iftari.textContent = adjustTime(times.Maghrib, 3);

        highlightNextPrayer(times);
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

    if (currentTime >= prayerSchedule["Isha"] || currentTime < prayerSchedule["Fajr"]) {
        currentPrayer = "Isha";
        nextPrayer = "Sehri";
    }

    document.querySelectorAll(".namaz-card, .sehri-iftar-card").forEach(card => {
        card.classList.remove("highlight", "current");
    });

    if (currentPrayer && prayerTimes[currentPrayer]) {
        prayerTimes[currentPrayer].closest(".namaz-card, .sehri-iftar-card").classList.add("current");
        moveCarouselToCurrentPrayer(currentPrayer);
    }

    if (nextPrayer && prayerTimes[nextPrayer]) {
        prayerTimes[nextPrayer].closest(".namaz-card, .sehri-iftar-card").classList.add("highlight");
    }

    // ✅ ADD COUNTDOWN START RIGHT HERE (END OF FUNCTION)
    if (nextPrayer && prayerSchedule[nextPrayer]) {
    startCountdown(nextPrayer, prayerSchedule[nextPrayer]);
}

// 🌙 AUTO THEME SWITCH
updateThemeByPrayer(prayerSchedule);

}


    async function fetchHijriDate(gregorianDate) {
        try {
            let response = await fetch(`https://api.aladhan.com/v1/gToH?gregorian=${gregorianDate}`);
            let data = await response.json();

            if (data.code !== 200) throw new Error("Invalid API response");

            let hijri = data.data.hijri;
            document.querySelector(".islamic-date").innerText =
                `${hijri.day} ${hijri.month.en} ${hijri.year}`;

            updateDailyQuote(parseInt(hijri.day, 10));

        } catch (error) {
            document.querySelector(".islamic-date").innerText = "Failed to load date";
        }
    }

    function convertToMinutes(timeStr) {
        let [hours, minutes] = timeStr.split(":").map(Number);
        return hours * 60 + minutes;
    }

    const quotes = [
        `"Whoever bows before Allah,<br>Allah makes the world bow before him."`,
        `"Indeed, with hardship comes ease.<br>(Quran 94:6)"`,
        `"Be like a flower that gives its fragrance<br>even to the hand that crushes it."`,
        `"The best among you are those<br>who have the best manners and character."`,
        `"A moment of patience in anger<br>prevents a thousand regrets."`
    ];

    function updateDailyQuote(hijriDay) {
        let quoteIndex = hijriDay % quotes.length;
        document.querySelector(".daily-quote").innerHTML = quotes[quoteIndex];
    }

    
});


let countdownInterval;

function startCountdown(nextPrayerName, nextPrayerTimeMinutes) {
    clearInterval(countdownInterval);

    const nameEl = document.getElementById("next-prayer-name");
    const timerEl = document.getElementById("countdown-timer");

    nameEl.textContent = nextPrayerName;

    countdownInterval = setInterval(() => {
        const now = new Date();
        const currentMinutes = now.getHours() * 60 + now.getMinutes();
        let diffMinutes = nextPrayerTimeMinutes - currentMinutes;

        if (diffMinutes < 0) diffMinutes += 1440; // next day wrap

        const hours = Math.floor(diffMinutes / 60);
        const minutes = diffMinutes % 60;
        const seconds = 59 - now.getSeconds();

        timerEl.textContent =
            String(hours).padStart(2, '0') + ":" +
            String(minutes).padStart(2, '0') + ":" +
            String(seconds).padStart(2, '0');

    });



}

function updateThemeByPrayer(prayerSchedule) {
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    const maghribTime = prayerSchedule["Maghrib"];
    const fajrTime = prayerSchedule["Fajr"];

    if (currentMinutes >= maghribTime || currentMinutes < fajrTime) {
        document.body.classList.add("night-mode");
    } else {
        document.body.classList.remove("night-mode");
    }
}


setInterval(() => {
    const currentCards = document.querySelectorAll(".namaz-card.current");
    if (currentCards.length > 0) {
        const currentPrayer = currentCards[0].dataset.namaz;
    }
}, 60000);
