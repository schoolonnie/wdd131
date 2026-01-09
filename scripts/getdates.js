//current year
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

//last modified date
document.getElementById("lastModified").innerHTML = document.lastModified;

// make resources card match about card height (responsive)
function matchResourceHeight() {
	const about = document.getElementById('about');
	const resources = document.getElementById('resources');
	if (!about || !resources) return;
	// don't force heights on narrow screens where layout stacks
	if (window.innerWidth < 700) {
		resources.style.minHeight = '';
		return;
	}
	const aboutRect = about.getBoundingClientRect();
	resources.style.minHeight = aboutRect.height + 'px';
}

window.addEventListener('load', matchResourceHeight);
window.addEventListener('resize', matchResourceHeight);
