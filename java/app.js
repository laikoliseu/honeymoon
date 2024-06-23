const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		console.log(entry)
		if (entry.isIntersecting) {
			entry.target.classList.add("show");
		} else {
			entry.target.classList.remove("show");
		}
		if (entry.isIntersecting) {
			entry.target.classList.add("show-box");
		} else {
			entry.target.classList.remove("show-box");
		}
	});
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const hiddenBoxes = document.querySelectorAll(".hidden-box");
hiddenBoxes.forEach((el) => observer.observe(el));
