import 'bootstrap/less/bootstrap.less';
import "./styles/main.less";
import Handlebars from 'handlebars';
import data from './data.js';

// Prints the task in the appropiate column according to the stage it is
Handlebars.registerHelper('columnByStage', task => {
	const stageIndex = data.stages.indexOf(task.stage);
	if (stageIndex === -1) {
		throw `Task ${task.name} has an invalid stage: "${task.stage}"`;
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

// This is used for the rowspan attribute
Handlebars.registerHelper('lengthPlusOne', items => items.length + 1);

document.addEventListener("DOMContentLoaded", () => {
	const source   = document.getElementById("main-template").innerHTML;
	const template = Handlebars.compile(source);
	document.getElementById("content").innerHTML = template(data);
});
