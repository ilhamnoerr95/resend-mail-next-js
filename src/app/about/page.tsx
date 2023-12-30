"use client";

// import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

import About from "@/components/about";
import { useState } from "react";

export default function Home({
	searchParams,
}: {
	searchParams: { id: string; name: string };
}) {
	const [dataB, setData] = useState();
	// const searchParams = useSearchParams();
	// console.log(searchParams.name);
	async function fetchMyAPI() {
		let response = await fetch(
			`http://localhost:3000/api/about?name=${searchParams.name}`,
			{
				method: "GET",
			}
		);
		let result = await response.json();
		return result;
	}

	fetchMyAPI().then((res) => setData(res?.data));

	return (
		<main>
			<About testProps="test propsi" />
			{dataB}
		</main>
	);
}
