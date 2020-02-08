/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections   = document.getElementsByTagName('section');
const navbarList = document.getElementById('navbar__list');
const navItems   = [];
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function checkViewport (section) {
	const bounding = section.getBoundingClientRect();
	return bounding.top >= 0 && bounding.bottom <= window.innerHeight;
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNavbar () {
	for (let section of sections) {
		const listItem = document.createElement('li');
		const link = document.createElement('a');
		link.setAttribute('class', 'menu__link');
		link.setAttribute('href', `#${section.id}`);
		link.innerHTML = section.getAttribute('data-nav');
		listItem.append(link);
		navItems.push(listItem);
	}
	
}
buildNavbar();

// Add class 'active' to section when near top of viewport
function addActive(section) {
	if (checkViewport(section)) {
		if (!section.classList.contains('active')) {
			section.setAttribute('class', 'active');
		}
	} else {
		if (section.classList.contains('active')) {
			section.removeAttribute('class');
		} 
	}
}

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
function buildMenu() {
	for( let item of navItems) {
		navbarList.append(item);
	}
}
buildMenu();
// Scroll to section on link click

// Set sections as active
window.addEventListener('scroll', () => {
	for (let section of sections) {
		addActive(section);
	}
})


