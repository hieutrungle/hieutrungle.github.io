function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

// head
class MyHead extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			
			
			<head>
				<meta charset="UTF-8">
				<meta http-equiv="X-UA-Compatible" content="IE=edge">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>PhD Journey | Hieu Le</title>
				<!-- Favicon -->
				<link rel="icon" type="image/png" sizes="32x32" href="./assets/images/favicon.png">

				<!-- Remix icons -->
				<link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">
				<!-- Swiper.js styles -->
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
				/>
				

				<!-- Custom styles -->
				<link rel="stylesheet" href="./assets/css/main.css">
				<link rel="stylesheet" href="./assets/css/prettify.css">

			</head>
		`;
	}
}

// Header
class MyHeader extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<header class="header" id="header">

				<nav class="navbar container">
					<a href="./index.html">
						<h2 class="logo">Knowledge Sharing</h2>
					</a>

					<div class="menu" id="menu">
						<ul class="list">
							<li class="list-item">
								<a href="./index.html" class="list-link current">Home</a>
							</li>
							<li class="list-item">
								<a href="./project.html" class="list-link">Project</a>
							</li>
							<li class="list-item">
								<a href="./blog.html" class="list-link">Blog</a>
							</li>
							<li class="list-item">
								<a href="./about.html" class="list-link">About</a>
							</li>
							<li class="list-item">
								<a href="./contact.html" class="list-link">Contact</a>
							</li>
							<li class="list-item screen-lg-hidden">
								<a href="./signin.html" class="list-link">Sign in</a>
							</li>
							<li class="list-item screen-lg-hidden">
								<a href="./signup.html" class="list-link">Sign up</a>
							</li>
						</ul>
					</div>

					<div class="list list-right">
						<button class="btn place-items-center" id="theme-toggle-btn">
							<i class="ri-sun-line sun-icon"></i>
							<i class="ri-moon-line moon-icon"></i>
						</button>

						<button class="btn place-items-center" id="search-icon">
							<i class="ri-search-line"></i>
						</button>

						<button class="btn place-items-center screen-lg-hidden menu-toggle-icon" id="menu-toggle-icon">
							<i class="ri-menu-3-line open-menu-icon"></i>
							<i class="ri-close-line close-menu-icon"></i>
						</button>

						<a href="./signin.html" class="list-link screen-sm-hidden">Sign in</a>
						<a href="./signup.html" class="btn sign-up-btn fancy-border screen-sm-hidden">
							<span>Sign up</span>
						</a>
					</div>

				</nav>

			</header>
		`;
	}
}

// Footer
class MyFooter extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<footer class="footer section">

				<div class="footer-container container d-grid">

					<div class="company-data">
						<a href="./index.html">
							<h2 class="logo">Knowledge Sharing</h2>
						</a>
						<p class="company-description">
							<address>
								<i class="ri-map-pin-fill"></i>
								College Station, Texas 77840, USA
							</address>
						</p>

						<p class="company-description">
							<i class="ri-mail-fill"></i>
							hieult@tamu.edu
						</p>

						<ul class="list social-media">
							<li class="list-item">
								<a href="#" class="list-link"><i class="ri-twitter-line"></i></a>
							</li>
							<li class="list-item">
								<a href="https://www.linkedin.com/in/hieu-le-54648b192/" class="list-link" target="_blank" rel="noopener noreferrer"><i class="ri-linkedin-box-fill"></i></a>
							</li>
						</ul>

						<span class="copyright-notice">&copy;2022 Hieu Le. All rights reserved.</span>
					</div>

					<div>
						<h6 class="title footer-title">Project</h6>

						<ul class="footer-list list">
							<li class="list-item">
								<a href="#" class="list-link">Digital Twin</a>
							</li>
							<li class="list-item">
								<a href="#" class="list-link">Data Compression</a>
							</li>
						</ul>
					</div>

					<div>
						<h6 class="title footer-title">Tutorial</h6>

						<ul class="footer-list list">
							<li class="list-item">
								<a href="#" class="list-link">TensorFlow</a>
							</li>
							<li class="list-item">
								<a href="#" class="list-link">Pytorch</a>
							</li>
							<li class="list-item">
								<a href="#" class="list-link">Autoencoder</a>
							</li>
							<li class="list-item">
								<a href="#" class="list-link">Rendering</a>
							</li>
						</ul>
					</div>

					<div>
						<h6 class="title footer-title">Research Group</h6>

						<ul class="footer-list list">
							<li class="list-item">
								<a href="#" class="list-link">Focus</a>
							</li>
							<li class="list-item">
								<a href="#" class="list-link">Group Member</a>
							</li>
							<li class="list-item">
								<a href="#" class="list-link">About</a>
							</li>
							<li class="list-item">
								<a href="#" class="list-link">Contact</a>
							</li>
						</ul>
					</div>

				</div>

			</footer>
		`;
	}
}

// Search
class MySearch extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<div class="search-form-container container" id="search-form-container">

				<div class="form-container-inner">

					<form action="" class="form">
						<input class="form-input" type="text" placeholder="What are you looking for?">
						<button class="btn form-btn" type="submit">
							<i class="ri-search-line"></i>
						</button>
					</form>
					<span class="form-note">Or press ESC to close.</span>

				</div>

				<button class="btn form-close-btn place-items-center" id="form-close-btn">
					<i class="ri-close-line"></i>
				</button>

			</div>
		`;
	}
}

// CDNjs script
class AdditionalCdnjs extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
		`;
	}
}

customElements.define("my-head", MyHead);
customElements.define("my-header", MyHeader);
customElements.define("my-footer", MyFooter);
customElements.define("my-search", MySearch);
customElements.define("additional-cdnjs", AdditionalCdnjs);

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
