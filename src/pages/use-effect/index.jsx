/* If we have time, we can go through another exercise to render posts fetched with this function:
	async function fetchPosts() {
		return await fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())
	}
*/
import { useState, useEffect } from "react"

export default function Page() {
	// TODO 1: Create a useState for a count variable
	const [count, setCount] = useState(0)

	// TODO 3: Create a useEffect to set an interval that increments count every 1 second.
	// 		   Make sure to include a cleanup function that clears the interval!
	

	async function fetchPosts() {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())

		console.log(response)
	}

	fetchPosts()

	useEffect(() => {
		const interval = setInterval(() => console.log("count:", count), 1000)

		fetchPosts()

		return () => {
			clearInterval(interval)
		}
	}, [count])
	
	return (
		<div className="card flex flex-col gap-4 w-[40em] items-start">
			<h1 className="w-full text-3xl text-center">useEffect Hook</h1>
			
			{/* TODO 2: Insert count into the <h1> below */}
			<h1 className="text-2xl">Count: {count}</h1>

			<button onClick={() => setCount(count + 1)}>Increment</button>
		</div>
	)
}