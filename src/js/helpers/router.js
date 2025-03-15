export function initRouter() {
	document.addEventListener("click", (e) => {
		const link = e.target.closest("a");
		if (link && link.href.startsWith(window.location.origin)) {
			e.preventDefault();
			navigateTo(link.href);
		}
	});

	async function navigateTo(url) {
		// Start fade out
		document.body.classList.add("is-transitioning");

		// Wait for fade out animation
		await new Promise((resolve) => setTimeout(resolve, 300));

		try {
			const response = await fetch(url);
			const html = await response.text();
			const parser = new DOMParser();
			const doc = parser.parseFromString(html, "text/html");

			// Update main content
			document.querySelector("main").innerHTML =
				doc.querySelector("main").innerHTML;

			// Update page title
			document.title = doc.title;

			// Update URL
			window.history.pushState({}, "", url);
		} catch (err) {
			console.error("Navigation failed:", err);
		}

		// Remove transition class to fade in
		document.body.classList.remove("is-transitioning");
	}

	// Handle back/forward browser buttons
	window.addEventListener("popstate", () => {
		navigateTo(window.location.href);
	});
}
