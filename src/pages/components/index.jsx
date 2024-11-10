import HomeButton from "../../home-button"
import Logo from "../../assets/logo.svg"

export default function Page() {
	return (
		<>
			<div className="card flex flex-col gap-4 w-[40em] items-start">
				<h1 className="w-full text-3xl text-center">Components and Props</h1>

				<div className="flex flex-row flex-wrap w-full gap-2">
					{/* TODO 1: Insert some WebDevLogo components below! */}
					<WebDevLogo />
					<WebDevLogo />
					<WebDevLogo />
					<WebDevLogo />
					<WebDevLogo />
					<WebDevLogo />
				</div>

				<div className="flex flex-row flex-wrap w-full gap-2">
					{/* TODO 2: Insert some Card components with different titles and descriptions below! */}
					<Card title="hello!" description={"this is a description"} />
					<Card title="hello 2!" description={"this is NOT a description"} large={true} 
					/>
				</div>
			</div>

			<HomeButton />
		</>
	)
}

function WebDevLogo() {
	return (
		// TODO 4: Make this component take a string prop, then make it so that the logo alerts that string when clicked
		<button onClick={() => alert("Hello!")} className="p-3 transition-colors cursor-pointer outlined size-32">
			<img src={Logo} className="object-contain w-full h-full" />
		</button>
	)
}


function Card({ title, description, large }) {
	return (
		<div className={`${large ? "px-12 py-6" : "px-4 py-3"} card`}>
			{/* TODO 3: fill in the <h1> and <p> elements with the corresponding props */}
			<h1 className="text-xl">{title}</h1>
			<p>{description}</p>
		</div>
	)
}