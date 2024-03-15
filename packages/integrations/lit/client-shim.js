async function polyfill() {
	const { hydrateShadowRoots } = await import(
		'@webcomponents/template-shadowroot/template-shadowroot.js'
	);
	window.addEventListener('DOMContentLoaded', () => hydrateShadowRoots(document.body), {
		once: true,
	});
}

if (!document.parseHTMLUnsafe) {
	polyfill();
}
