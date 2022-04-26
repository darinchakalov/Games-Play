export default function ErrorPage({ children }) {
	return (
		<section id="catalog-page">
			<h1>Page not found</h1>
			{children && <p className="no-articles">{children}</p>}
		</section>
	);
}
