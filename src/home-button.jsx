import { ArrowLeft, Home } from "lucide-react";

export default function HomeButton() {
	return (
		<a href="/">
			<button className="absolute top-2 left-2 outlined size-10 p-0 flex justify-center items-center">
				<ArrowLeft className="size-6" />
			</button>
		</a>
	)
}