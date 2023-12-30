"use client";

import React, { Dispatch, SetStateAction } from "react";

interface EmailTemplateProps {
	firstName: string;
}

const btnClick = (
	setter: Dispatch<SetStateAction<{ numb: number; test: number }>>,
	name: string
) => {
	setter((counter: any) => ({
		...counter,
		[name]: counter.numb + 1,
	}));
};
export const EmailTemplate = ({ firstName }: any) => {
	const [count, setCount] = React.useState<{ numb: number; test: number }>({
		numb: 0,
		test: 1,
	});

	console.log("render components", count);
	return (
		<div>
			<h1>Numb, {count.numb}!</h1>
			<h1>Test, {count.test}!</h1>

			<button
				onClick={() =>
					setCount((count) => ({ ...count, ["test"]: count.test - 1 }))
				}
			>
				KLIK test
			</button>
			<br />

			<button onClick={() => btnClick(setCount, "numb")}>KLIKK</button>
		</div>
	);
};
