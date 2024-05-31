// for the hamburger menu
const hamburger = document.querySelector(".hamburger");
const mobileListedItems = document.querySelector(
	".mobile-listed-items-container",
);
hamburger.addEventListener("click", function () {
	hamburger.classList.toggle("is-active");
	mobileListedItems.classList.toggle("toggle-nav");
});

//close the nav when li is clicked
const closeNavWhenLiIsClicked = () => {
	let all_li = document.querySelectorAll(".listed-item");
	all_li.forEach(function (li) {
		li.addEventListener("click", function () {
			hamburger.classList.toggle("is-active");
			mobileListedItems.classList.toggle("toggle-nav");
		});
	});
};
closeNavWhenLiIsClicked();

// ==== Animate on Scroll Initialize  ==== //
AOS.init();

// ==== GSAP Animations ==== //
// ==== LOGO  ==== //
gsap.from(".logo", {
	opacity: 0,
	y: -10,
	delay: 1,
	duration: 0.5,
});
// ==== NAV  CTA  ==== //
gsap.from(".cta", {
	opacity: 0,
	y: -10,
	delay: 1,
	duration: 0.5,
});

// ==== NAV-MENU ==== //
gsap.from("nav .nav-item", {
	opacity: 0,
	y: -10,
	delay: 1.2,
	duration: 0.5,
	stagger: 0.3,
});

// ==== TOGGLE BTN ==== //
gsap.from(".navbar-menu-btn", {
	opacity: 0,
	y: -10,
	delay: 1.4,
	duration: 0.5,
});

// ==== MAIN HEADING  ==== //
gsap.from(".hero-title", {
	opacity: 0,
	y: 20,
	delay: 2.4,
	duration: 1,
});
// ==== INFO TEXT ==== //
gsap.from(".desc", {
	opacity: 0,
	y: 20,
	delay: 2.8,
	duration: 1,
});

// ==== SEARCH BAR ==== //
gsap.from(".search_container", {
	opacity: 0,
	y: 20,
	delay: 2.8,
	duration: 1,
});

// ==== SEARCH BAR ==== //
gsap.from(".in_demand", {
	opacity: 0,
	y: 20,
	delay: 2.8,
	duration: 1,
});

// ==== CTA BUTTONS ==== //
gsap.from(".download_cta_container", {
	opacity: 0,
	y: 20,
	delay: 2.8,
	duration: 1,
});

// ==== TEAM IMAGE ==== //
gsap.from(".shape-content", {
	opacity: 0,
	y: 20,
	delay: 3,
	duration: 1,
});
