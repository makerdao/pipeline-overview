import 'bootstrap/less/bootstrap.less';
import "./styles/main.less";
import Handlebars from 'handlebars';
import data from './data.js';

const templates = {};

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
		if (i === stageIndex) {
			const link = templates['task-link'](task);
			html += templates['task-column']({content: link});
		} else {
			html += templates['task-column']({});
		}
	}
	return new Handlebars.SafeString(html);
})

// This is used for the rowspan attribute
Handlebars.registerHelper('lengthPlusOne', items => items.length + 1);

document.addEventListener("DOMContentLoaded", () => {
	// Compile templates
	['main', 'task-column', 'task-link'].forEach(name => {
		const source = document.getElementById(name + "-template").innerHTML;
		templates[name] = Handlebars.compile(source);
	});
	document.getElementById("content").innerHTML = templates['main'](data);

	// Bind click events
	const taskLinks = document.querySelectorAll('.js-task-link');
	Array.from(taskLinks).forEach(link => {
    link.addEventListener('click', function(event) {
			event.preventDefault();
			const taskId = event.target.dataset.taskId
			alert(getTaskById(taskId).description);
    });
	});
});
