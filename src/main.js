import 'bootstrap/less/bootstrap.less';
import "./styles/main.less";
import Handlebars from 'handlebars';
import data from './data.js';

// Add IDs to tasks
(function addTaskIds() {
	let id = 0;
	data.groups.forEach(group => {
		group.tasks.forEach(task => {
			task.id = id++;
		})
	})
}());

function getTaskById(id) {
	let task = null;
	data.groups.forEach(group => {
		group.tasks.forEach(t => {
			if (t.id == id) {
				task = t;
			}
		})
	})
	return task;
}

// Prints the task in the appropiate column according to the stage it is
Handlebars.registerHelper('columnByStage', task => {
	const stageIndex = data.stages.indexOf(task.stage);
	if (stageIndex === -1) {
		throw `Task ${task.name} has an invalid stage: "${task.stage}"`;
	}
	let html = '';
	for (let i = 0; i < data.stages.length; i++) {
		html += '<td class="col-md-2">';
		if (i === stageIndex) {
			html += `<a class="js-task-link" data-task-id="${task.id}" title="by @${task.DRI}" href="#">${task.name}</a>`;
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

	const taskLinks = document.querySelectorAll('.js-task-link');
	Array.from(taskLinks).forEach(link => {
    link.addEventListener('click', function(event) {
			event.preventDefault();
			const taskId = event.target.dataset.taskId
			alert(getTaskById(taskId).description);
    });
	});
});
