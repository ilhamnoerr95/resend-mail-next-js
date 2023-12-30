import { EmailTemplate } from "@/app/components/email-templates";

export async function sendPost() {
	const response = await fetch("http://localhost:3000/api/send", {
		method: "POST",
	});
	const result = await response.json();
	console.log(result, "klikkk");
	return result;
}

export default function SendEmail() {
	console.log("parent render");
	return (
		<>
			<main>
				<EmailTemplate />
				<br />
			</main>
		</>
	);
}
