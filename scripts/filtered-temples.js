const today = new Date()
document.getElementById("currentyear").textContent = today.getFullYear()
document.getElementById("lastmodified").textContent = document.lastModified
const templeContainer = document.getElementById("temples");
const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");
const homeLink = document.getElementById("home");

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 24",
    area: 435600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
  },
  {
    templeName: "Tucson Arizona",
    location: "Tucson, Arizona, United States",
    dedicated: "2017, August, 13",
    area: 304920,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tucson-arizona/400x250/tucson-arizona-temple-exterior-1929407-wallpaper.jpg"
  },
  {
    templeName: "Helena Montana",
    location: "Helena, Montana, United States",
    dedicated: "2023, June, 18",
    area: 9794,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/12b539bbeb6e11eda7c9eeeeac1eac0a8ada7139/full/800%2C/0/default"
  }
];

homeLink.addEventListener("click", () => {
    displayTemples(temples);
});

menuButton.addEventListener("click", () => {menu.classList.toggle("menu-hidden") 
    if (menu.classList.contains("menu-hidden")) {
    menuButton.textContent = "☰";
} else {
    menuButton.textContent = "✕";
}});
const oldLink = document.getElementById("old");
oldLink.addEventListener("click", () => {
    const oldTemples = temples.filter((temple) => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year < 1900;
    });
    displayTemples(oldTemples);
});
const newLink = document.getElementById("new");
newLink.addEventListener("click", () => {
    const newTemples = temples.filter((temple) => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year > 2000;
    });
    displayTemples(newTemples);
});
const largeLink = document.getElementById("large");
largeLink.addEventListener("click", () => {
    const largeTemples = temples.filter((temple) => {
        const area = temple.area;
        return area > 90000;
    });
    displayTemples(largeTemples);
});
const smallLink = document.getElementById("small");
smallLink.addEventListener("click", () => {
    const smallTemples = temples.filter((temple) => {
        const area = temple.area;
        return area < 10000;
    });
    displayTemples(smallTemples);
});



function displayTemples(templeList) {
    const cards = templeContainer.querySelectorAll("article");

    cards.forEach((card) => {
        card.remove();
    });

    templeList.forEach((temple) => {
        const card = document.createElement("article");
        const name = document.createElement("h2");
        name.textContent = temple.templeName
        card.appendChild(name);

        const location = document.createElement("p");
        location.textContent = temple.location
        card.appendChild(location);

        const dedication = document.createElement("p");
        dedication.textContent = temple.dedicated
        card.appendChild(dedication);

        const area = document.createElement("p");
        area.textContent = `${temple.area} sq ft`;
        card.appendChild(area);

        const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = temple.templeName;
        image.loading = "lazy";
        card.appendChild(image);

        templeContainer.appendChild(card);
    });
}
displayTemples(temples);