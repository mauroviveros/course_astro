import type { APIRoute } from "astro";

export const GET = (async ({ params, request }) => {
	return new Response(JSON.stringify({path: new URL(request.url).pathname}));
}) satisfies APIRoute;
