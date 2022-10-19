function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

// hamburger toggle
const button = document.querySelector(".hamburger__toggle");
button.addEventListener("click", () => button.classList.toggle("toggled"));

// Grab elements
const selectElement = (selector) => {
	const element = document.querySelector(selector);
	if (element) {
		return element;
	}
	throw new Error(
		`Please double check your class names, there is no ${selector} class`
	);
};

//Nav styles on scroll (nav sticks to top of page)
const scrollHeader = () => {
	const headerElement = selectElement("#header");
	if (this.scrollY >= 15) {
		headerElement.classList.add("activated");
	} else {
		headerElement.classList.remove("activated");
	}
};
window.addEventListener("scroll", scrollHeader);

// Open menu & search pop-up
const menuToggleIcon = selectElement("#menu-toggle-icon");
const toggleMenu = () => {
	const mobileMenu = selectElement("#menu");
	mobileMenu.classList.toggle("activated");
	menuToggleIcon.classList.toggle("activated");
};

menuToggleIcon.addEventListener("click", toggleMenu);

// Open/Close search form popup
const formOpenBtn = selectElement("#search-icon");
const formCloseBtn = selectElement("#form-close-btn");
const searchFormContainer = selectElement("#search-form-container");

formOpenBtn.addEventListener("click", () => {
	searchFormContainer.classList.add("activated");
});
formCloseBtn.addEventListener("click", async () => {
	searchFormContainer.classList.remove("activated");
});

// -- Close the search form popup on ESC keypress
window.addEventListener("keyup", async (event) => {
	if (event.key === "Escape") {
		searchFormContainer.classList.remove("activated");
	}
});

// Switch theme/add to local storage
const bodyElement = document.body;
const themeToggleBtn = selectElement("#theme-toggle-btn");
const currentTheme = localStorage.getItem("currentTheme");

if (currentTheme) {
	bodyElement.classList.add("light-theme");
}
themeToggleBtn.addEventListener("click", () => {
	bodyElement.classList.toggle("light-theme");
	if (bodyElement.classList.contains("light-theme")) {
		localStorage.setItem("currentTheme", "themeActive");
	} else {
		localStorage.removeItem("currentTheme");
	}
});

// themeToggleBtn.addEventListener("click", () => {
// 	bodyElement.classList.toggle("dark-theme");
// 	if (bodyElement.classList.contains("dark-theme")) {
// 		localStorage.setItem("currentTheme", "dark-theme");
// 	} else {
// 		localStorage.setItem("currentTheme", "light-theme");
// 	}
// });

// Swiper
const swiper = new Swiper(".swiper", {
	// Optional parameters
	slidePerView: 1,
	spaceBetween: 20,
	direction: "horizontal",
	loop: true,
	breakpoints: {
		"@0": {
			slidesPerView: 2,
		},
		// greater in 888px
		"@1.00": {
			slidesPerView: 3,
		},
		// 1110px
		"@1.25": {
			slidesPerView: 4,
		},
	},

	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
	},

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	// And if we need scrollbar
	scrollbar: {
		el: ".swiper-scrollbar",
	},
});
