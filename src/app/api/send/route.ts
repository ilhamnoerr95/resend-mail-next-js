import { Resend } from "resend";

const resend = new Resend("re_5icUGGSG_JaFVnWAbnuMZvQg5BgMTDVDM");

export async function POST() {
	try {
		const data = await resend.emails.send({
			from: "irahamadesu@gmail.com",
			to: ["noerr.ilham@gmail.com"],
			subject: "tes biji kuda",
			html: "<strong>It works!</strong>",
			text: "coba",
		});

		return Response.json(data);
	} catch (error) {
		return Response.json({ error });
	}
}
