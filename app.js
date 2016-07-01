(function() {
	var app = angular.module('rackCommand', ['rcSignUp', 'rcSetup','angularPayments']);
	
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

//going to have to create a seperate set of data for whether the particular user has x software installed

	var user = {
		userStacks: [0001,0003,0005,0008],
		firstName: 'Andrew',
		lastName: 'Paradi',
		email: 'andrewparadi@gmail.com',}
	// [
	// {
	// 	name: 'Teamspeak',
	// 	id: 0001,
	// 	version: 3,
	// 	logo: 'img/logos/ts_logo.png',
	// 	description: "The world's best voice communication software for gamers.",
	// 	category: ['Game', 'Communication', 'Voice'],
	// 	installed: true,
	// 	recentAdd: true,
	// 	totalInstalls: 330,
	// 	dateAdded: 1416459600000,
	// 	dateUpdated: 1416891600000,},
	// 	{
	// 	name: 'Minecraft',
	// 	id: 0002,
	// 	version: null,
	// 	logo: 'img/logos/mc_logo.png',
	// 	description: "A creative block placing multiplayer game.",
	// 	category: ['Game'],
	// 	installed: false,
	// 	recentAdd: false,
	// 	totalInstalls: 10,
	// 	dateAdded: 1416459600000,
	// 	dateUpdated: 1416891600000,},
	// 	{
	// 	name: 'RSPS (Runescape)',
	// 	id: 0003,
	// 	version: null,
	// 	logo: 'img/logos/rs_logo.png',
	// 	description: "The private server version of Runescape.",
	// 	category: ['Game', 'RPG'],
	// 	installed: false,
	// 	recentAdd: false,
	// 	totalInstalls: 5,
	// 	dateAdded: 1416459600000,
	// 	dateUpdated: 1416891600000,},
	// 	{
	// 	name: 'CS:GO',
	// 	id: 0004,
	// 	version: null,
	// 	logo: 'img/logos/cs_go_logo.png',
	// 	description: "Most popular PC online tactical and first-person shooter.",
	// 	category: ['Game', 'FPS'],
	// 	installed: true,
	// 	recentAdd: true,
	// 	totalInstalls: 120,
	// 	dateAdded: 1416459600000,
	// 	dateUpdated: 1416891600000,},
	// 	{
	// 	name: 'Team Fortress',
	// 	id: 0005,
	// 	version: 2,
	// 	logo: 'img/logos/tf2_logo.png',
	// 	description: "A fun team-based first-person shooter multiplayer video game.",
	// 	category: ['Game', 'FPS'],
	// 	installed: true,
	// 	recentAdd: true,
	// 	totalInstalls: 3,
	// 	dateAdded: 1416459600000,
	// 	dateUpdated: 1416891600000,},
	// 	{
	// 	name: 'Left for Dead',
	// 	id: 0006,
	// 	version: 2,
	// 	logo: 'img/logos/l4d2_logo.png',
	// 	description: "A cooperative survival first-person shooter video game.",
	// 	category: ['Game', 'FPS'],
	// 	installed: false,
	// 	recentAdd: false,
	// 	totalInstalls: 10,
	// 	dateAdded: 1416459600000,
	// 	dateUpdated: 1416891600000,},
	// 	{
	// 	name: 'Counter Strike Source',
	// 	id: 0007,
	// 	version: null,
	// 	logo: 'img/logos/css_logo.jpg',
	// 	description: "A remake of Counter-Strike using the Source game engine.",
	// 	category: ['Game', 'FPS'],
	// 	installed: false,
	// 	recentAdd: false,
	// 	totalInstalls: 10,
	// 	dateAdded: 1416459600000,
	// 	dateUpdated: 1416891600000,},
	// 	{
	// 	name: 'DayZ',
	// 	id: 0008,
	// 	version: null,
	// 	logo: 'img/logos/dayz_logo.png',
	// 	description: "A multiplayer open world survival horror video game.",
	// 	category: ['Game', 'FPS'],
	// 	installed: false,
	// 	recentAdd: false,
	// 	totalInstalls: 10,
	// 	dateAdded: 1416459600000,
	// 	dateUpdated: 1416891600000,},
	// 	{
	// 	name: 'Rust',
	// 	id: 0009,
	// 	version: null,
	// 	logo: 'img/logos/rust_logo.jpg',
	// 	description: "An indie survival video game created by Facepunch Studios.",
	// 	category: ['Game', 'FPS'],
	// 	installed: false,
	// 	recentAdd: false,
	// 	totalInstalls: 10,
	// 	dateAdded: 1416459600000,
	// 	dateUpdated: 1416891600000,},
	// 	{
	// 	name: 'OpenVPN Access Server',
	// 	id: 0010,
	// 	version: null,
	// 	logo: 'img/logos/oas_logo.png',
	// 	description: "The world's leading complete VPN solution.",
	// 	category: ['Utility', 'VPN', 'Network'],
	// 	installed: true,
	// 	recentAdd: false,
	// 	totalInstalls: 400,
	// 	dateAdded: 1416459600000,
	// 	dateUpdated: 1416891600000,},
	// 	{
	// 	name: 'PHP',
	// 	id: 0011,
	// 	version: 5.3,
	// 	logo: 'img/logos/php_logo.png',
	// 	description: "A server-side scripting language designed for web development.",
	// 	category: ['Programming', 'Language'],
	// 	installed: true,
	// 	recentAdd: false,
	// 	totalInstalls: 453,
	// 	dateAdded: 1416459600000,
	// 	dateUpdated: 1416891600000,},
	// 	{
	// 	name: 'MySQL',
	// 	id: 0012,
	// 	version: null,
	// 	logo: 'img/logos/mysql_logo.jpg',
	// 	description: "An open-source relational database management system.",
	// 	category: ['Programming', 'Database'],
	// 	installed: true,
	// 	recentAdd: true,
	// 	totalInstalls: 420,
	// 	dateAdded: 1416459600000,
	// 	dateUpdated: 1416891600000,},
	// ]

	var stacks = [
	{
		name: 'Teamspeak',
		id: 0001,
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
		id: 0002,
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
		id: 0003,
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
		id: 0004,
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
		id: 0005,
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
		id: 0006,
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
		id: 0007,
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
		id: 0008,
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
		id: 0009,
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
		id: 0010,
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
		id: 0011,
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
		id: 0012,
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