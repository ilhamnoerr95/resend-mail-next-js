import { Metadata, ResolvingMetadata } from "next";

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

export default function AboutId({ params }: { params: { id: string } }) {
	return <main>{params.id} ID</main>;
}
