const navbarNav = document.querySelector('.navbar-nav');
const hamburger = document.querySelector('#hamburger-menu');
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');
const searchBtn = document.querySelector('#search-button');
const shoppingCart = document.querySelector('.shopping-cart');
const shopCartBtn = document.querySelector('#shopping-cart-button');
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailBtns = document.querySelectorAll('.item-detail-button');
const modalCloseBtn = document.querySelector('.modal-close-icon');

hamburger.onclick = (e) => {
	e.preventDefault();
	navbarNav.classList.toggle('active');
};

shopCartBtn.onclick = (e) => {
	e.preventDefault();
	shoppingCart.classList.toggle('active');
};

searchBtn.onclick = (e) => {
	e.preventDefault();
	searchForm.classList.toggle('active');
	searchBox.focus();
};

itemDetailBtns.forEach((btn) => {
	btn.onclick = (e) => {
		e.preventDefault();
		itemDetailModal.style.display = 'flex';
	};
});

modalCloseBtn.onclick = (e) => {
	e.preventDefault();
	itemDetailModal.style.display = 'none';
};

document.addEventListener('click', function (e) {
	if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
		navbarNav.classList.remove('active');
	}

	if (!searchBtn.contains(e.target) && !searchForm.contains(e.target)) {
		searchForm.classList.remove('active');
	}

	if (!shopCartBtn.contains(e.target) && !shoppingCart.contains(e.target)) {
		shoppingCart.classList.remove('active');
	}
});

window.onclick = (e) => {
	if (e.target === itemDetailModal) {
		itemDetailModal.style.display = 'none';
	}
};
