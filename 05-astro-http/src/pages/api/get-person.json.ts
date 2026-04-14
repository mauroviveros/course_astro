import type { APIRoute } from "astro";

export const GET = (async ({ params, request }) => {
	const person = {
		name: "Mauro Viveros",
		age: 26
	}
	return new Response(
		JSON.stringify(person),
		{
			status: 200,
			headers: {
				"Content-Type": "application/json"
			}
		}
	);
}) satisfies APIRoute;
