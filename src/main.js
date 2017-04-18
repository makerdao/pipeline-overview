import "./styles/main.less";
import Handlebars from 'handlebars';
import data from './data.js';

// Prints the task in the appropiate column according to the stage it is
Handlebars.registerHelper('columnByStage', task => {
	const stageIndex = data.stages.indexOf(task.stage);
	if (stageIndex === -1) {
		throw `Invalid stage: ${task.stage}`;
	}
	let html = '';
	for (let i = 0; i < data.stages.length; i++) {
		html += '<td>';
		if (i === stageIndex) {
			html += task.name;
		}
		html += '</td>';
	}
	return new Handlebars.SafeString(html);
})

document.addEventListener("DOMContentLoaded", () => {
	const source   = document.getElementById("main-template").innerHTML;
	const template = Handlebars.compile(source);
	document.getElementById("content").innerHTML = template(data);
});
