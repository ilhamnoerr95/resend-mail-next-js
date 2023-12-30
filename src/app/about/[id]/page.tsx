import { Metadata, ResolvingMetadata } from "next";
import { useState } from "react";

import About from "@/components/about";

type Props = {
	params: { id: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
	{ params, searchParams }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	console.log(parent);

	return {
		title: params.id,
	};
}
async function fetchMyAPI(id: string) {
	let response = await fetch(`http://localhost:3000/api/about/${id}`, {
		method: "GET",
	});
	let result = await response.json();
	return result;
}

export default async function AboutId({ params }: { params: { id: string } }) {
	const data = await fetchMyAPI(params.id);

	// console.log(data);

	return <main> ID = {data.data}</main>;
}
