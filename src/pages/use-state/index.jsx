import HomeButton from "../../home-button"
import Logo from "../../assets/logo.svg"
import { useState } from "react"

export default function Page() {
	// TODO 1: Review the usage of the useState hook for the current count.
	const countAsVariable = 0 // this does not work!
	const [count, setCount] = useState(0) // Count is the value, setCount is how you set the value, and 0 is the initial value

	// TODO 3: Create a useState hook to conditionally show or hide the logo


	// TODO 6: Create a useState hook to store the text in the input (value, setValue)


	// TODO 10: Create a useState hook with 3 string elements in it


	return (
		<>
			<div className="card flex flex-col gap-4 w-[40em] items-start">
				<h1 className="w-full text-3xl text-center">useEffect Hook</h1>

				{/* Counter Example */}
				<div className="flex flex-row items-center w-full gap-4">
					<h1 className="text-2xl">Count: {count}</h1>

					{/* TODO 2: set this button's "onClick" property to increment the count state variable using setCount */}
					<button>Increment</button>
				</div>

				{/* Show/Hide Element Example (toggle visibility) */}
				<div className="flex flex-col items-center p-4 pb-0 border-2 rounded border-border">
					{/* TODO 4: Make this button toggle your state variable created above to true or false */}
					<button>Toggle Logo Visibility</button>

					{/* TODO 5: Show or hide the element below using conditional rendering depending on the state variable above */}
					<img src={Logo} className="object-contain size-24" />
				</div>

				{/* Controlled Input Example */}
				<div className="flex items-center gap-3">
					{/* TODO 7: Control the input using value and setValue with onChange */}
					<input placeholder="Enter some text..." />

					{/* TODO 8: Display the text in the input above in the <p> element below */}
					<p></p>
					{/* TODO 9: Display the character count of the text in the input instead in the element above (use .length) */}
				</div>

				

				{/* Rendering Lists Example */}
				<div className="flex flex-col gap-2">
					{/* TODO 11: Render the list from the state variable created above as <p> */}
					


					{/* TODO 12: Create a button that adds a new string to the array with the value from the input in the previous example */}
				</div>
			</div>

			<HomeButton />
		</>

	)
}