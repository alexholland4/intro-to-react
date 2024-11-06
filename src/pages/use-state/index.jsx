import HomeButton from "../../home-button"

export default function Page() {
	

	return (
		<>
			<div className="card flex flex-col gap-4 w-[40em] items-start">
				<h1 className="text-3xl w-full text-center">useState Hook</h1>

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