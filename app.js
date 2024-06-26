document.addEventListener('DOMContentLoaded', function() {
	const hamburger = document.querySelector('.header .nav-bar .hamburger');
	const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
	const menu_items = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
  
	// Toggle hamburger and mobile menu visibility
	hamburger.addEventListener('click', function() {
	  hamburger.classList.toggle('active');
	  mobile_menu.classList.toggle('active');
	});
  
	// Close mobile menu when a menu item is clicked (optional)
	menu_items.forEach(function(item) {
	  item.addEventListener('click', function() {
		hamburger.classList.remove('active');
		mobile_menu.classList.remove('active');
	  });
	});
  
	// Example: Change header background on scroll
	window.addEventListener('scroll', function() {
	  var scroll_position = window.scrollY;
	  var header = document.querySelector('.header.container');
	  if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	  } else {
		header.style.backgroundColor = 'transparent';
	  }
	});
  });
  