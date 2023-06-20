const navBar = document.querySelector('nav');

let scrollStockage;

window.addEventListener('scroll', () => {
	if (window.scrollY > scrollStockage) {
		navBar.style.top = '-60px';
	} else {
		navBar.style.top = '0px';
	}

	scrollStockage = window.scrollY;
});
