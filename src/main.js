import "./styles/main.less";
import Handlebars from 'handlebars';
import data from './data.js';

document.addEventListener("DOMContentLoaded", () => {
	const source   = document.getElementById("main-template").innerHTML;
	const template = Handlebars.compile(source);
	document.getElementById("content").innerHTML = template(data);
});
