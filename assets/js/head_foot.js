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
				
				<!-- Prism.js styles -->
				<link href="./assets/css/prism.css" rel="stylesheet" />

				<!-- highlight.js styles -->
				<link 
					rel="stylesheet"
      				href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/default.min.css"
				/>

				<!-- Custom styles -->
				<link rel="stylesheet" href="./assets/css/main.css">
				<link rel="stylesheet" href="./assets/css/hamburger.css">
				<link rel="stylesheet" href="./assets/css/post.css">

			</head>
		`;
	}
}

class BlogHead extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			
			
			<head>
				<meta charset="UTF-8">
				<meta http-equiv="X-UA-Compatible" content="IE=edge">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>PhD Journey | Hieu Le</title>
				<!-- Favicon -->
				<link rel="icon" type="image/png" sizes="32x32" href="../assets/images/favicon.png">

				<!-- Remix icons -->
				<link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">
				
				<!-- Swiper.js styles -->
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
				/>

				<!-- highlight.js styles -->
				<link 
					rel="stylesheet"
      				href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/default.min.css"
				/>

				<!-- Prism.js styles -->
				<link href="../assets/css/prism.css" rel="stylesheet" />

				<!-- Custom styles -->
				<link rel="stylesheet" href="../assets/css/main.css">
				<link rel="stylesheet" href="../assets/css/hamburger.css">
				<link rel="stylesheet" href="../assets/css/post.css">

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
								<a href="./portfolio.html" class="list-link">Portfolio</a>
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

						<button class="hamburger__toggle btn place-items-center screen-lg-hidden menu-toggle-icon" id="menu-toggle-icon">
							<span class="hamburger__icon"></span>
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
								Texas A&M, Texas 77840, USA
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

customElements.define("root-head", MyHead);
customElements.define("blog-head", BlogHead);

customElements.define("root-header", MyHeader);
customElements.define("root-footer", MyFooter);
customElements.define("root-search", MySearch);
