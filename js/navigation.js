'use strict';

var main = document.querySelector('main');

var menu = document.body.querySelector('nav');
var homeButton = document.querySelector('#home-button');
var offersButton = document.querySelector('#offers-button');
var openButton = document.querySelector('#open-button');
var teamButton = document.querySelector('#team-button');
var contactButton = document.querySelector('#contact-button');
var tabs = document.getElementsByClassName('tab');

var companies = document.querySelector('#companies');
var publicInfra = document.querySelector('#publicInfra');
var companiesButton = document.querySelector('#companies-button');
var publicButton = document.querySelector('#public-button');

companies.style.position = 'absolute';

var marginMap = new Map();

marginMap.set(homeButton, 0);
marginMap.set(offersButton, -80);
marginMap.set(openButton, -180);
marginMap.set(teamButton, -280);
marginMap.set(contactButton, -380);

module.exports = function(){
	marginMap.forEach(function(margin, button){
		button.addEventListener('click', function(event){
			event.preventDefault();
			main.style.transform = 'translateY(' + margin + 'vh)';

			tabs[0].className = 'tab';
			tabs[1].className = 'tab';
			tabs[2].className = 'tab';
			tabs[3].className = 'tab';
			tabs[4].className = 'tab';

			button.classList.toggle('active');
		});
	});

	companiesButton.addEventListener('click', function(event){
		event.preventDefault();
		main.style.transform = 'translateY(' + marginMap.get(offersButton) + 'vh)';
		companies.style.transform = 'translateX(-100vw)';
		publicInfra.style.transform = 'translateX(-100vw)';

		companiesButton.className = 'active';
		publicButton.className = '';

		tabs[1].className = 'tab active';
	});

	publicButton.addEventListener('click', function(event){
		event.preventDefault();
		main.style.transform = 'translateY(' + marginMap.get(offersButton) + 'vh)';
		companies.style.transform = 'translateX(0vw)';
		publicInfra.style.transform = 'translateX(0vw)';

		companiesButton.className = '';
		publicButton.className = 'active';

		tabs[1].className = 'tab active';

	});

};
