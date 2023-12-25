"use client";

// import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

import About from "@/components/about";

export default function Home({
	searchParams,
}: {
	searchParams: { id: string; name: string };
}) {
	// const searchParams = useSearchParams();
	// console.log(searchParams.name);
	return (
		<main>
			<About testProps="test propsi" />
		</main>
	);
}
