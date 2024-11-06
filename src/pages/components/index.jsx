import HomeButton from "../../home-button"
import Logo from "../../assets/logo.svg"

export default function Page() {
	return (
		<>
			<div className="card flex flex-col gap-4 w-[40em] items-start">
				<h1 className="text-3xl w-full text-center">Components and Props</h1>

				<div className="flex flex-row flex-wrap w-full gap-2">
					{/* TODO 1: Insert some WebDevLogo components below! */}

				</div>

				<div className="flex flex-row flex-wrap w-full gap-2">
					{/* TODO 2: Insert some Card components with different titles and descriptions below! */}

				</div>
			</div>

			<HomeButton />
		</>

	)
}

function WebDevLogo() {
	return (
		// TODO 4: Make this component take a string prop, then make it so that the logo alerts that string when clicked
		<button onClick={() => alert("Hello!")} className="outlined size-32 p-3 transition-colors cursor-pointer">
			<img src={Logo} className="w-full h-full object-contain" />
		</button>
	)
}


function Card({ title, description }) {
	return (
		<div className="card px-4 py-3">
			{/* TODO 3: fill in the <h1> and <p> elements with the corresponding props */}
			<h1 className="text-xl"></h1>
			<p></p>
		</div>
	)
}