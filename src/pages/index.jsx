import Logo from "../assets/logo.svg"

export default function Page() {
	return (
		<div className="card w-[48em] flex flex-col items-center gap-2 py-8">
			<img src={Logo} className="h-[12em]" />
			<h1 className="text-4xl font-bold">Intro to React Workshop: Starter Code</h1>
			<ol className="list-decimal text-2xl w-full flex flex-col pl-12 gap-1">
				<li>
					<a href="/jsx">JSX</a>
				</li>
				<li>
					<a href="/styling">Styling with Tailwindcss</a>
				</li>
				<li>
					<a href="/components">Components and Props</a>
				</li>
				<li>
					<a href="/rendering">Rendering Lists & Conditional Rendering</a>
				</li>
				<li>
					<a href="/use-state">useState Hook</a>
				</li>
				<li>
					<a href="/use-effect">useEffect Hook</a>
				</li>
			</ol>
		</div>
	)
}