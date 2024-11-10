import HomeButton from "../../home-button"

export default function Page() {
	const someText = "Hello, this is some text!"
	const someNumber = 1000000.3443

	const brokenUpSentence = ["Put", "me", "back", "together", ": ^ )"]

	const isButtonDisabled = false

	function alertUser() {
		alert("helo")
	}
	
	return (
		<>
			<div className="flex flex-col items-start gap-1 card">
				<h1 className="w-full text-3xl text-center">JSX Exercises</h1>

				<h1 className="text-2xl">someText:</h1>
				<p className="text-lg">{someText}</p>
				{/* TODO 1: Change the above line to add the value of someText into the HTML */}

				<br></br>

				<h1 className="text-2xl">someNumber:</h1>
				<p className="text-lg">{someNumber}</p>
				{/* TODO 2: Change the above line to add the value of someNumber into the HTML */}

				<br></br>

				<h1 className="text-2xl"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round">Round</a> someNumber (use Math.round):</h1>
				<p className="text-lg">{Math.round(someNumber)}</p>
				{/* TODO 3: Change the above line to add the rounded value of someNumber into the HTML */}

				<br></br>

				<h1 className="text-2xl"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join">Join</a> the brokenUpSentence together here:</h1>
				<p className="text-lg">{brokenUpSentence.join(", ")}</p>
				{/* TODO 4: Change the above line to add the joined-together brokenUpSentence into the HTML using brokenUpSentence.join */}

				<br />

				<h1 className="text-2xl">Disable the button depending on isButtonDisabled:</h1>
				<button
					disabled={isButtonDisabled}
					onClick={() => alert("hello!")}
				>Submit</button>
				{/* TODO 5: Change the above line to set the button's disabled attribute to the value of isButtonDisabled */}
				{/* TODO 6: Make the button alert some text when it's clicked */}
			</div>

			<HomeButton />
		</>
	)
}