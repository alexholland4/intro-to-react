import HomeButton from "../../home-button"

/*

Tailwindcss Reference: https://tailwindcss.com/docs/installation
Search what you're trying to style and it should show you the class to apply to your element

Flexbox is a great way to lay out your web page! Learn it with a fun game here:
Flexbox Froggy: https://flexboxfroggy.com/

*/

export default function Page() {
	return (
		<>
			<div className="card flex flex-col gap-2 w-[30em]">
				<h1 className="w-full text-3xl text-center">Styling with Tailwindcss</h1>
				{/* TODO 1: Change the <h1> element below to increase its text size */}
				<h1 className="text-2xl text-red-500">I am some header text, make me big!</h1>

				{/* TODO 2: Change the <p> element below to change its text color to red */}
				<p className="text-red-500">I want to be red</p>

				{/* TODO 3: Make the <div> below a rounded square box that is a shade of blue */}
				<div className="w-12 h-12 bg-blue-500 rounded-full"/>		
			</div>

			<HomeButton />
		</>

	)
}