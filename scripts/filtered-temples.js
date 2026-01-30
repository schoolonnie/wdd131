const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});

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
	templeName: "Seoul Korea",
	location: "Seoul, South Korea",
	dedicated: "1985, December, 14",
	area: 28057,
	imageUrl:
	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/seoul-korea/800x500/seoul-korea-temple-lds-424784-wallpaper.jpg"
  },
  {
	templeName: "Tokyo Japan",
	location: "Tokyo, Japan",
	dedicated: "1980, October, 27",
	area: 53997,
	imageUrl:
	"https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340.jpg"
  },
  {
	templeName: "Bangkok Thailand",
	location: "Bangkok, Thailand",
	dedicated: "2023, October, 22",
	area: 48525,
	imageUrl:
	"https://churchofjesuschristtemples.org/assets/img/temples/bangkok-thailand-temple/bangkok-thailand-temple-40037.jpg"
  }
];

const templeGallery = document.getElementById("temple-gallery");

function createTempleCard(filteredTemples) {
	filteredTemples.forEach((temple) => {
	const templeCard = document.createElement("div");
	templeCard.classList.add("temple-card");

	templeCard.innerHTML = `
		<h2 class="temple-name">${temple.templeName}</h2>
		<p class="temple-location"><strong>Location:</strong> ${temple.location}</p>
		<p class="temple-dedicated"><strong>Dedicated:</strong> ${temple.dedicated}</p>
		<p class="temple-area"><strong>Area:</strong> ${temple.area.toString()} sq ft</p>
		<img loading="lazy" src="${temple.imageUrl}" alt="${temple.templeName} Image" class="temple-image"/>
	`;
	templeGallery.appendChild(templeCard);
	});
}
// Initial load - display all temples
createTempleCard(temples);




const homeLink = document.querySelector('#home-link');
const oldLink = document.querySelector('#old-link');
const newLink = document.querySelector('#new-link');
const largeLink = document.querySelector('#large-link');
const smallLink = document.querySelector('#small-link');

homeLink.addEventListener('click', () => {
	templeGallery.innerHTML = '';
	createTempleCard(temples);
});

oldLink.addEventListener('click', () => {
	templeGallery.innerHTML = '';
	const oldTemples = temples.filter(temple => {
		const dedicatedYear = parseInt(temple.dedicated.split(',')[0]);
		return dedicatedYear < 1900;
	})
	createTempleCard(oldTemples);
});

newLink.addEventListener('click', () => {
	templeGallery.innerHTML = '';
	const newTemples = temples.filter(temple => {
		const dedicatedYear = parseInt(temple.dedicated.split(',')[0]);
		return dedicatedYear > 2000;
	})
	createTempleCard(newTemples);
});

largeLink.addEventListener('click', () => {
	templeGallery.innerHTML = '';
	const largeTemples = temples.filter(temple => temple.area > 90000);
	createTempleCard(largeTemples);
});

smallLink.addEventListener('click', () => {
	templeGallery.innerHTML = '';
	const smallTemples = temples.filter(temple => temple.area < 10000);
	createTempleCard(smallTemples);
});