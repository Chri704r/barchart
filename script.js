"use strict";

const model = [
	8, 4, 2, 5, 30, 15, 13, 5, 12, 32, 27, 12, 3, 17, 20, 14, 3, 26, 32, 18, 2, 8, 13, 29, 8, 4, 2, 5,
	30, 15, 13, 5, 12, 32, 27, 12, 3, 17, 20, 14,
];

window.addEventListener("DOMContentLoaded", init);

function init() {
	displayData();

	loop();
}

function loop() {
	setTimeout(displayData, 500);
	getNumberOfCustumers();
}

function getNumberOfCustumers() {
	return Math.floor(Math.random() * 32);
}

function displayData() {
	for (let index = 0; index < model.length; index++) {
		const element = model[index];
		document.querySelector(`.bar:nth-child(${index + 1})`).style.height = element + "px";
		document.querySelector(".bar:nth-child(40)").style.height = getNumberOfCustumers() + "px";
	}
	modifyModel();
}

function modifyModel() {
	const queueSize = getNumberOfCustumers();
	model.shift();
	model.push(queueSize);
	console.log(model);

	loop();
}
