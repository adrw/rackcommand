(function() {
	var app = angular.module('rackCommand', [ ]);
	
	app.controller('rcController', function() {
		this.stacks = stacks;
		this.stats = stats;
		this.user = user;

		//Update Stats Once per Session
		stats.available = stacks.length;
		//finish writing for other 2 stats
	});

	// app.controller('rcFilter', function() {
	// 	dir = ['+','-', '+']
	// 	this.key = '-totalInstalls';
	// 	this.setFilter = function(key) {
	// 		oKey = this.key.slice(1,);
	// 		oDir = dir.indexOf(this.key.slice(0,1));
	// 		if (key === oKey) this.key = dir[oDir + 1] + oKey;
	// 		else this.key = dir[1] + key;
	// 		//if keys match, switch direction. if keys don't match, set new key with - direction

	// 	};
	// });

	app.controller('stackController', function() {
		this.idCheck = function(id) {
			if (user.userStacks.indexOf(id)>=0) return true;
			else return false;
		};
	});

	app.directive('stackGrid', function() {
		return {
			restrict: "E",
			templateUrl: "incl/stack.html"
		};
	});

	var stats = {
		available: 3,
		recentAdd: 2,
		totalInstalls: 4003,}

	var user = {
		userStacks: [1.3.0,3.0.0,6.2.0,11.5.3],
		firstName: 'Andrew',
		lastName: 'Paradi',
		email: 'andrewparadi@gmail.com',}

	var stacks = [
	{
		name: 'Teamspeak',
		id: 1.3.0,
		version: 3,
		logo: 'img/logos/ts_logo.png',
		description: "The world's best voice communication software for gamers.",
		category: ['Game', 'Communication', 'Voice'],
		installed: true,
		recentAdd: true,
		totalInstalls: 330,
		dateAdded: 1416459600000,
		dateUpdated: 1416891600000,},
		{
		name: 'Minecraft',
		id: 2.0.0,
		version: null,
		logo: 'img/logos/mc_logo.png',
		description: "A creative block placing multiplayer game.",
		category: ['Game'],
		installed: false,
		recentAdd: false,
		totalInstalls: 10,
		dateAdded: 1416459600000,
		dateUpdated: 1416891600000,},
		{
		name: 'RSPS (Runescape)',
		id: 3.0.0,
		version: null,
		logo: 'img/logos/rs_logo.png',
		description: "The private server version of Runescape.",
		category: ['Game', 'RPG'],
		installed: false,
		recentAdd: false,
		totalInstalls: 5,
		dateAdded: 1416459600000,
		dateUpdated: 1416891600000,},
		{
		name: 'CS:GO',
		id: 4.0.0,
		version: null,
		logo: 'img/logos/cs_go_logo.png',
		description: "Most popular PC online tactical and first-person shooter.",
		category: ['Game', 'FPS'],
		installed: true,
		recentAdd: true,
		totalInstalls: 120,
		dateAdded: 1416459600000,
		dateUpdated: 1416891600000,},
		{
		name: 'Team Fortress',
		id: 5.2.0,
		version: 2,
		logo: 'img/logos/tf2_logo.png',
		description: "A fun team-based first-person shooter multiplayer video game.",
		category: ['Game', 'FPS'],
		installed: true,
		recentAdd: true,
		totalInstalls: 3,
		dateAdded: 1416459600000,
		dateUpdated: 1416891600000,},
		{
		name: 'Left for Dead',
		id: 6.2.0,
		version: 2,
		logo: 'img/logos/l4d2_logo.png',
		description: "A cooperative survival first-person shooter video game.",
		category: ['Game', 'FPS'],
		installed: false,
		recentAdd: false,
		totalInstalls: 10,
		dateAdded: 1416459600000,
		dateUpdated: 1416891600000,},
		{
		name: 'Counter Strike Source',
		id: 7.0.0,
		version: null,
		logo: 'img/logos/css_logo.jpg',
		description: "A remake of Counter-Strike using the Source game engine.",
		category: ['Game', 'FPS'],
		installed: false,
		recentAdd: false,
		totalInstalls: 10,
		dateAdded: 1416459600000,
		dateUpdated: 1416891600000,},
		{
		name: 'DayZ',
		id: 8.0.0,
		version: null,
		logo: 'img/logos/dayz_logo.png',
		description: "A multiplayer open world survival horror video game.",
		category: ['Game', 'FPS'],
		installed: false,
		recentAdd: false,
		totalInstalls: 10,
		dateAdded: 1416459600000,
		dateUpdated: 1416891600000,},
		{
		name: 'Rust',
		id: 9.0.0,
		version: null,
		logo: 'img/logos/rust_logo.jpg',
		description: "An indie survival video game created by Facepunch Studios.",
		category: ['Game', 'FPS'],
		installed: false,
		recentAdd: false,
		totalInstalls: 10,
		dateAdded: 1416459600000,
		dateUpdated: 1416891600000,},
		{
		name: 'OpenVPN Access Server',
		id: 10.0.0,
		version: null,
		logo: 'img/logos/oas_logo.png',
		description: "The world's leading complete VPN solution.",
		category: ['Utility', 'VPN', 'Network'],
		installed: true,
		recentAdd: false,
		totalInstalls: 400,
		dateAdded: 1416459600000,
		dateUpdated: 1416891600000,},
		{
		name: 'PHP',
		id: 11.5.3,
		version: 5.3,
		logo: 'img/logos/php_logo.png',
		description: "A server-side scripting language designed for web development.",
		category: ['Programming', 'Language'],
		installed: true,
		recentAdd: false,
		totalInstalls: 453,
		dateAdded: 1416459600000,
		dateUpdated: 1416891600000,},
		{
		name: 'MySQL',
		id: 12.0.0,
		version: null,
		logo: 'img/logos/mysql_logo.jpg',
		description: "An open-source relational database management system.",
		category: ['Programming', 'Database'],
		installed: true,
		recentAdd: true,
		totalInstalls: 420,
		dateAdded: 1416459600000,
		dateUpdated: 1416891600000,},
	]
})();