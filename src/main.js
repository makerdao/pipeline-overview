require("./styles/main.less");
import Handlebars from 'handlebars';

document.addEventListener("DOMContentLoaded", () => {
	const source   = document.getElementById("entry-template").innerHTML;
	const template = Handlebars.compile(source);
	document.getElementById("entries").innerHTML = template({title: "My New Post", body: "This is my first post!"});
});
