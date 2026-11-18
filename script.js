// ================= Ma'lumotlar =================

// Papkada yo'q rasmlar Wikimedia'dan olinadi
function wiki(path) {
  const file = path.split("/").pop();
  return "https://upload.wikimedia.org/wikipedia/commons/thumb/" + path + "/960px-" + file;
}

const cars = [
  { id: 1, make: "Toyota", model: "Camry XSE", year: 2025, body: "Sedan", condition: "Yangi", price: 33450, km: 19,
    fuel: "Gibrid", gearbox: "Avtomat", engine: "2.5 l gibrid", hp: 225, accel: 7.6, drive: "Old", economy: "4.7 l/100 km", seats: 5,
    color: "Kumush", photo: "img/cars/car-1.jpg", features: ["Apple CarPlay", "Adaptiv kruiz", "Isitiladigan o'rindiqlar"] },
  { id: 2, make: "Honda", model: "CR-V EX-L", year: 2024, body: "Krossover", condition: "Ishlatilgan", price: 31900, km: 22900,
    fuel: "Benzin", gearbox: "Variator", engine: "1.5 l turbo", hp: 190, accel: 8.4, drive: "To'liq", economy: "8.1 l/100 km", seats: 5,
    color: "Oq", photo: "img/cars/car-2.jpg", features: ["Charm salon", "Lyuk", "Ko'r zona nazorati"] },
  { id: 3, make: "Ford", model: "F-150 XLT", year: 2023, body: "Pikap", condition: "Ishlatilgan", price: 44800, km: 30400,
    fuel: "Benzin", gearbox: "Avtomat", engine: "3.5 l V6 turbo", hp: 400, accel: 6.2, drive: "To'liq", economy: "11.8 l/100 km", seats: 5,
    color: "Kulrang", photo: "img/cars/car-3.jpg", features: ["Shatakka olish paketi", "360° kamera", "SYNC 4"] },
  { id: 4, make: "Tesla", model: "Model 3 Long Range", year: 2025, body: "Sedan", condition: "Yangi", price: 47490, km: 13,
    fuel: "Elektr", gearbox: "Avtomat", engine: "Ikki elektromotor", hp: 394, accel: 4.4, drive: "To'liq", economy: "584 km zaxira", seats: 5,
    color: "Qizil", photo: wiki("a/ab/Tesla_Model_3_%282023%29_Autofr%C3%BChling_Ulm_IMG_9282.jpg"), features: ["Autopilot", "Shisha tom", "Premium audio"] },
  { id: 5, make: "BMW", model: "420i M Sport", year: 2023, body: "Kupe", condition: "Ishlatilgan", price: 42900, km: 34400,
    fuel: "Benzin", gearbox: "Avtomat", engine: "2.0 l turbo", hp: 255, accel: 6.1, drive: "Orqa", economy: "8.1 l/100 km", seats: 4,
    color: "Ko'k", photo: wiki("9/90/2021_BMW_420i_M_Sport_Automatic_2.0.jpg"), features: ["M Sport paketi", "LED faralar", "Xotirali o'rindiqlar"] },
  { id: 6, make: "Volkswagen", model: "Golf Style", year: 2024, body: "Xetchbek", condition: "Ishlatilgan", price: 24900, km: 15800,
    fuel: "Benzin", gearbox: "Robot", engine: "1.5 l turbo", hp: 148, accel: 8.7, drive: "Old", economy: "7.1 l/100 km", seats: 5,
    color: "Kumush", photo: "img/cars/car-6.jpg", features: ["Raqamli panel", "Adaptiv kruiz", "Simsiz CarPlay"] },
  { id: 7, make: "Jeep", model: "Grand Cherokee Summit", year: 2025, body: "Krossover", condition: "Yangi", price: 62995, km: 24,
    fuel: "Benzin", gearbox: "Avtomat", engine: "5.7 l V8", hp: 357, accel: 6.7, drive: "To'liq", economy: "13.8 l/100 km", seats: 5,
    color: "Oq", photo: "img/cars/car-7.jpg", features: ["Pnevmo-osma", "McIntosh audio", "Tungi ko'rish"] },
  { id: 8, make: "Mazda", model: "MX-5 Miata", year: 2022, body: "Kupe", condition: "Ishlatilgan", price: 26400, km: 26900,
    fuel: "Benzin", gearbox: "Mexanika", engine: "2.0 l", hp: 181, accel: 6.1, drive: "Orqa", economy: "8.1 l/100 km", seats: 2,
    color: "Qizil", photo: "img/cars/car-8.jpg", features: ["Yumshoq tom", "Bose audio", "Brembo tormozlari"] },
  { id: 9, make: "Hyundai", model: "Ioniq 5 SEL", year: 2025, body: "Krossover", condition: "Yangi", price: 46200, km: 16,
    fuel: "Elektr", gearbox: "Avtomat", engine: "Ikki elektromotor", hp: 320, accel: 5.1, drive: "To'liq", economy: "467 km zaxira", seats: 5,
    color: "Kulrang", photo: "img/cars/car-9.jpg", features: ["Tez quvvatlash", "Raqamli kalit", "Isitiladigan o'rindiqlar"] },
  { id: 10, make: "Chevrolet", model: "Silverado 2500HD", year: 2022, body: "Pikap", condition: "Ishlatilgan", price: 68900, km: 45700,
    fuel: "Dizel", gearbox: "Avtomat", engine: "6.6 l V8 dizel", hp: 470, accel: 8.2, drive: "To'liq", economy: "Ma'lumot yo'q", seats: 5,
    color: "Qora", photo: wiki("b/b3/2022_Chevrolet_Silverado_2500HD_High_Country%2C_Front_Left%2C_11-21-2021.jpg"), features: ["Tirkama kamerasi", "Bose audio", "Shamollatiladigan o'rindiqlar"] },
  { id: 11, make: "Audi", model: "A4 Premium Plus", year: 2024, body: "Sedan", condition: "Ishlatilgan", price: 38600, km: 18200,
    fuel: "Benzin", gearbox: "Robot", engine: "2.0 l turbo", hp: 261, accel: 5.8, drive: "To'liq", economy: "8.7 l/100 km", seats: 5,
    color: "Oq", photo: "img/cars/car-11.jpg", features: ["Virtual cockpit", "quattro", "Bang & Olufsen audio"] },
  { id: 12, make: "Kia", model: "Telluride EX", year: 2025, body: "Krossover", condition: "Yangi", price: 44990, km: 32,
    fuel: "Benzin", gearbox: "Avtomat", engine: "3.8 l V6", hp: 291, accel: 7.4, drive: "To'liq", economy: "11.8 l/100 km", seats: 8,
    color: "Oq", photo: "img/cars/car-12.jpg", features: ["3 qator o'rindiq", "Lyuk", "Aqlli yukxona"] },
  { id: 13, make: "Toyota", model: "Corolla Hatchback", year: 2023, body: "Xetchbek", condition: "Ishlatilgan", price: 22300, km: 39900,
    fuel: "Benzin", gearbox: "Variator", engine: "2.0 l", hp: 169, accel: 8.6, drive: "Old", economy: "6.7 l/100 km", seats: 5,
    color: "Oq", photo: wiki("f/f1/2018_Toyota_Corolla_%28MZEA12R%29_Ascent_Sport_hatchback_%282018-11-02%29_01.jpg"), features: ["Toyota Safety Sense", "LED faralar", "Orqa kamera"] },
  { id: 14, make: "Ford", model: "Mustang GT", year: 2024, body: "Kupe", condition: "Yangi", price: 44090, km: 10,
    fuel: "Benzin", gearbox: "Mexanika", engine: "5.0 l V8", hp: 480, accel: 4.6, drive: "Orqa", economy: "13.1 l/100 km", seats: 4,
    color: "Kulrang", photo: "img/cars/car-14.jpg", features: ["Brembo tormozlari", "Faol chiqindi tizimi", "Raqamli panel"] },
];

// ================= Holat =================

let filters = {};      // { make: "Toyota", body: "Sedan", ... }
let search = "";
let sort = "";
let compareList = [];  // tanlangan avtomobillar id'lari (3 tagacha)
let favorites = [];
let favoritesOnly = false;

try {
  favorites = JSON.parse(localStorage.getItem("favorites")) || [];
} catch (e) {
  favorites = [];
}

// ================= Yordamchi funksiyalar =================

function $(selector) {
  return document.querySelector(selector);
}

function money(n) {
  return "$" + Math.round(n).toLocaleString("en-US");
}

function monthly(price, down = price * 0.1, months = 60) {
  const r = 0.069 / 12; // yillik 6.9%
  return ((price - down) * r) / (1 - Math.pow(1 + r, -months));
}

function findCar(id) {
  return cars.find(function (car) { return car.id === id; });
}

function icon(name, size = 16) {
  return '<img class="icon" src="icons/' + name + '.svg" width="' + size + '" height="' + size + '" alt="" />';
}

// Select'ga ma'lumotlardan variantlar qo'shish
function fillSelect(id, key) {
  const values = [...new Set(cars.map(function (car) { return car[key]; }))].sort();
  if (key === "year") values.reverse();
  values.forEach(function (value) {
    $(id).add(new Option(key === "year" ? value + " dan" : value, value));
  });
}

// ================= Filtrlash =================

function getCars() {
  let list = cars.filter(function (car) {
    if (favoritesOnly && !favorites.includes(car.id)) return false;
    if (filters.make && car.make !== filters.make) return false;
    if (filters.body && car.body !== filters.body) return false;
    if (filters.fuel && car.fuel !== filters.fuel) return false;
    if (filters.condition && car.condition !== filters.condition) return false;
    if (filters.price && car.price > Number(filters.price)) return false;
    if (filters.year && car.year < Number(filters.year)) return false;

    const text = (car.year + " " + car.make + " " + car.model + " " + car.body + " " + car.fuel + " " + car.color).toLowerCase();
    return text.includes(search.trim().toLowerCase());
  });

  if (sort === "price-asc") list.sort(function (a, b) { return a.price - b.price; });
  if (sort === "price-desc") list.sort(function (a, b) { return b.price - a.price; });
  if (sort === "year") list.sort(function (a, b) { return b.year - a.year; });
  if (sort === "km") list.sort(function (a, b) { return a.km - b.km; });
  if (sort === "hp") list.sort(function (a, b) { return b.hp - a.hp; });
  return list;
}

// ================= Kartochkalar =================

function cardHTML(car) {
  const isFav = favorites.includes(car.id);
  const inCompare = compareList.includes(car.id);
  const mileage = car.km < 100 ? "Yangi" : Math.round(car.km / 1000) + "k km";

  return `
    <article class="card" data-id="${car.id}">
      <div class="card-media" data-action="details">
        <img class="card-img" src="${car.photo}" alt="${car.make} ${car.model}" loading="lazy" />
        <div class="media-top">
          <span class="badge ${car.condition === "Yangi" ? "new" : ""}">${car.condition}</span>
          <button type="button" class="fav-btn ${isFav ? "active" : ""}" data-action="fav" aria-label="Saqlash">${icon("heart", 18)}</button>
        </div>
        <div class="media-bottom">
          <span class="glass-tag">${car.body}</span>
          <span class="glass-tag">${car.color}</span>
        </div>
      </div>

      <div class="card-body">
        <div class="card-head">
          <div>
            <p class="card-make">${car.make}</p>
            <h3 class="card-title">${car.model}</h3>
          </div>
          <span class="year-pill">${car.year}</span>
        </div>

        <ul class="spec-icons">
          <li>${icon("gauge")}<span>${mileage}</span></li>
          <li>${icon("fuel")}<span>${car.fuel}</span></li>
          <li>${icon("gear")}<span>${car.gearbox}</span></li>
          <li>${icon("bolt")}<span>${car.hp} o.k.</span></li>
        </ul>

        <div class="card-foot">
          <div>
            <div class="price">${money(car.price)}</div>
            <div class="monthly">yoki <b>${money(monthly(car.price))}</b>/oyiga</div>
          </div>
          <button type="button" class="details-btn" data-action="details" aria-label="Batafsil">${icon("arrow-right", 18)}</button>
        </div>

        <button type="button" class="compare-toggle ${inCompare ? "on" : ""}" data-action="compare">
          ${icon("scale")}<span>${inCompare ? "Taqqoslashda" : "Taqqoslashga qo'shish"}</span>
        </button>
      </div>
    </article>`;
}

function render() {
  const list = getCars();
  $("#carGrid").innerHTML = list.map(cardHTML).join("");
  $("#emptyState").hidden = list.length > 0;
  $("#resultCount").innerHTML = "Jami " + cars.length + " tadan <b>" + list.length + "</b> tasi ko'rsatilmoqda";
  $("#favCount").textContent = favorites.length;
  renderCompare();
}

// ================= Batafsil oyna =================

function openModal(id) {
  const car = findCar(id);
  const specs = [
    ["Holati", car.condition],
    ["Probeg", car.km.toLocaleString("en-US") + " km"],
    ["Dvigatel", car.engine],
    ["Quvvat", car.hp + " o.k."],
    ["0–100 km/soat", car.accel + " s"],
    ["Uzatmalar qutisi", car.gearbox],
    ["Privod", car.drive],
    ["Yoqilg'i", car.fuel],
    ["Sarf / zaxira", car.economy],
    ["O'rinlar soni", car.seats],
  ];

  $("#modalBody").innerHTML = `
    <div class="modal-media">
      <button type="button" class="modal-close" id="closeModal" aria-label="Yopish">×</button>
      <img class="modal-img" src="${car.photo}" alt="${car.make} ${car.model}" />
      <ul class="features">${car.features.map(function (f) { return "<li>" + f + "</li>"; }).join("")}</ul>
    </div>
    <div class="modal-info">
      <p class="eyebrow">${car.condition} · ${car.body} · ${car.color}</p>
      <h2>${car.year} ${car.make} ${car.model}</h2>
      <div class="price">${money(car.price)}</div>
      <table class="spec-table">
        ${specs.map(function (row) { return "<tr><th>" + row[0] + "</th><td>" + row[1] + "</td></tr>"; }).join("")}
      </table>
      <div class="finance">
        <button type="button" class="term-btn" data-months="36">36 oy</button>
        <button type="button" class="term-btn active" data-months="60">60 oy</button>
        <button type="button" class="term-btn" data-months="72">72 oy</button>
        <p class="finance-result" id="finResult"></p>
      </div>
      <a href="#contact" class="btn btn-primary full" id="bookBtn">Test-drayvga yozilish</a>
    </div>`;

  showMonthly(car, 60);

  // Kredit muddatini tanlash
  document.querySelectorAll(".term-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".term-btn").forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      showMonthly(car, Number(btn.dataset.months));
    });
  });

  $("#closeModal").addEventListener("click", function () {
    $("#carModal").close();
  });

  $("#bookBtn").addEventListener("click", function () {
    $("#cCar").value = car.id;
    $("#carModal").close();
  });

  $("#carModal").showModal();
}

function showMonthly(car, months) {
  $("#finResult").innerHTML = "<strong>" + money(monthly(car.price, car.price * 0.1, months)) + "</strong>/oyiga · 10% boshlang'ich to'lov";
}

// ================= Taqqoslash =================

function renderCompare() {
  const list = compareList.map(findCar);
  $("#compareBar").hidden = list.length === 0;
  $("#compareBarText").textContent = "3 tadan " + list.length + " tasi tanlandi";

  if (list.length === 0) {
    $("#compareWrap").innerHTML = '<p class="compare-empty">Hali avtomobil tanlanmagan.</p>';
    return;
  }

  const rows = [
    ["Narx", function (c) { return money(c.price); }],
    ["Yil", function (c) { return c.year; }],
    ["Probeg", function (c) { return c.km.toLocaleString("en-US") + " km"; }],
    ["Dvigatel", function (c) { return c.engine; }],
    ["Quvvat", function (c) { return c.hp + " o.k."; }],
    ["0–100 km/soat", function (c) { return c.accel + " s"; }],
    ["Sarf / zaxira", function (c) { return c.economy; }],
    ["Privod", function (c) { return c.drive; }],
    ["O'rinlar", function (c) { return c.seats; }],
  ];

  let html = "<table class='compare-table'><tr><th></th>";
  list.forEach(function (c) {
    html += `<th class="compare-head">
      <img class="compare-img" src="${c.photo}" alt="" />
      <div>${c.year} ${c.make} ${c.model}</div>
      <button type="button" class="remove" data-remove="${c.id}">Olib tashlash</button>
    </th>`;
  });
  html += "</tr>";
  rows.forEach(function (row) {
    html += "<tr><th>" + row[0] + "</th>" + list.map(function (c) { return "<td>" + row[1](c) + "</td>"; }).join("") + "</tr>";
  });
  $("#compareWrap").innerHTML = html + "</table>";
}

// ================= Click hodisalari =================

// Kartochkadagi tugmalar: saqlash, batafsil, taqqoslash
$("#carGrid").addEventListener("click", function (e) {
  const button = e.target.closest("[data-action]");
  if (!button) return;
  const id = Number(button.closest(".card").dataset.id);
  const action = button.dataset.action;

  if (action === "details") {
    openModal(id);
  }

  if (action === "fav") {
    favorites = favorites.includes(id) ? favorites.filter(function (x) { return x !== id; }) : [...favorites, id];
    localStorage.setItem("favorites", JSON.stringify(favorites));
    render();
  }

  if (action === "compare") {
    if (compareList.includes(id)) {
      compareList = compareList.filter(function (x) { return x !== id; });
    } else if (compareList.length < 3) {
      compareList.push(id);
    } else {
      alert("3 tadan ortiq avtomobilni taqqoslab bo'lmaydi.");
    }
    render();
  }
});

// Taqqoslash jadvalidan olib tashlash
$("#compareWrap").addEventListener("click", function (e) {
  const button = e.target.closest("[data-remove]");
  if (!button) return;
  compareList = compareList.filter(function (x) { return x !== Number(button.dataset.remove); });
  render();
});

// Filtrlar: select'da qiymat tanlanganda ro'yxat yangilanadi.
// (select uchun "change" ishlatiladi — "click" ro'yxat ochilganda ham ishlab ketadi)
const filterSelects = {
  "#makeFilter": "make",
  "#bodyFilter": "body",
  "#fuelFilter": "fuel",
  "#conditionFilter": "condition",
  "#priceFilter": "price",
  "#yearFilter": "year",
};
Object.keys(filterSelects).forEach(function (id) {
  $(id).addEventListener("change", function () {
    filters[filterSelects[id]] = this.value;
    render();
  });
});

$("#sortSelect").addEventListener("change", function () {
  sort = this.value;
  render();
});

$("#resetBtn").addEventListener("click", function () {
  filters = {};
  search = "";
  sort = "";
  favoritesOnly = false;
  document.querySelectorAll(".filter-bar select").forEach(function (s) { s.value = ""; });
  $("#searchInput").value = "";
  $("#favToggle").classList.remove("active");
  render();
});

// Qidiruv
$("#searchBtn").addEventListener("click", function (e) {
  e.preventDefault();
  search = $("#searchInput").value;
  render();
  $("#inventory").scrollIntoView();
});

$("#searchInput").addEventListener("input", function () {
  search = this.value;
  render();
});

// Saqlangan avtomobillarni ko'rsatish
$("#favToggle").addEventListener("click", function () {
  favoritesOnly = !favoritesOnly;
  this.classList.toggle("active", favoritesOnly);
  render();
  $("#inventory").scrollIntoView();
});

// Footerdagi "Krossoverlar", "Sedanlar" ... havolalari
document.querySelectorAll("[data-body]").forEach(function (link) {
  link.addEventListener("click", function () {
    filters = { body: link.dataset.body };
    document.querySelectorAll(".filter-bar select").forEach(function (s) { s.value = ""; });
    $("#bodyFilter").value = link.dataset.body;
    render();
  });
});

// Mobil menyu
$("#burger").addEventListener("click", function () {
  $("#nav").classList.toggle("open");
});

$("#nav").addEventListener("click", function () {
  $("#nav").classList.remove("open");
});

// Oyna tashqarisiga bosilganda yopish
$("#carModal").addEventListener("click", function (e) {
  if (e.target === this) this.close();
});

// Aloqa formasi
$("#sendBtn").addEventListener("click", function () {
  const name = $("#cName").value.trim();
  const email = $("#cEmail");
  const status = $("#formStatus");

  if (!name || !email.value || !email.checkValidity()) {
    status.textContent = "Iltimos, ismingiz va to'g'ri email manzilingizni kiriting.";
    status.className = "form-status err";
    return;
  }

  status.textContent = "Rahmat, " + name + "! Tez orada siz bilan bog'lanamiz.";
  status.className = "form-status ok";
  $("#contactForm").reset();
});

// Yangiliklarga obuna
$("#newsBtn").addEventListener("click", function () {
  const email = $("#newsEmail");
  const ok = email.value && email.checkValidity();
  $("#newsStatus").textContent = ok ? "Obuna bo'ldingiz! Rahmat." : "To'g'ri email manzil kiriting.";
  $("#newsStatus").className = "news-status " + (ok ? "ok" : "err");
  if (ok) email.value = "";
});

// Tepaga qaytish
$("#toTop").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ================= Scroll animatsiyalari =================

function onScroll() {
  $("#header").classList.toggle("scrolled", window.scrollY > 10);
  $("#toTop").classList.toggle("show", window.scrollY > 600);

  document.querySelectorAll(".reveal:not(.visible)").forEach(function (el) {
    if (el.getBoundingClientRect().top < window.innerHeight - 60) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", onScroll);

// ================= Yuklanish ekrani =================

// Mashina 0% dan 100% gacha yuradi, keyin sayt ochiladi
function startLoader() {
  const loader = $("#loader");
  const duration = 2200; // 2.2 soniya
  const start = Date.now();

  const timer = setInterval(function () {
    // Foiz o'tgan vaqtga qarab hisoblanadi (brauzer sekinlashtirsa ham to'g'ri ishlaydi)
    const progress = Math.min(1, (Date.now() - start) / duration); // 0 dan 1 gacha
    loader.style.setProperty("--p", progress); // mashina silliq, tekis yuradi

    if (progress === 1) {
      clearInterval(timer);
      setTimeout(function () {
        loader.classList.add("done");
        document.body.classList.remove("loading");
        onScroll();
      }, 300);
    }
  }, 20);
}

// ================= Boshlash =================

startLoader();

fillSelect("#makeFilter", "make");
fillSelect("#bodyFilter", "body");
fillSelect("#fuelFilter", "fuel");
fillSelect("#yearFilter", "year");
cars.forEach(function (car) {
  $("#cCar").add(new Option(car.year + " " + car.make + " " + car.model, car.id));
});
render();
onScroll();
