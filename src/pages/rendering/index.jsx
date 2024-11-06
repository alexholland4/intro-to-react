import HomeButton from "../../home-button"

export default function Page() {
	const lines = ["Hello, this is line 1", "And this is line 2", "This is line 3!", "Line 4 is here"]

	const cards = [
		{
			title: "Card 1",
			description: "blah blah blah"
		},
		{
			title: "Card 2",
			description: "foo bar baz"
		},
		{
			title: "Card 3",
			description: "join webdevuw"
		}
	]

	const showLines = false

	return (
		<>
			<div className="card flex flex-col gap-4 w-[40em] items-start">
				<h1 className="text-3xl w-full text-center">Rendering</h1>

				{/* TODO 3: Show the lines only if showLines is true */}
				{/* TODO 4: Show the lines only if showLines is true, otherwise show the cards only */}

				<div className="flex flex-col flex-wrap w-full gap-2">
					{/* TODO 1: Map all the lines from the lines variable as <p> elements */}

				</div>

				<div className="flex flex-row flex-wrap w-full gap-2">
					{/* TODO 2: Map all the card objects from the cards variable as Card components */}

				</div>
			</div>

			<HomeButton />
		</>

	)
}

function Card({ title, description }) {
	return (
		<div className="card px-4 py-3">
			<h1 className="text-xl">{title}</h1>
			<p>{description}</p>
		</div>
	)
}