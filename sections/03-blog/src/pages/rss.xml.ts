import rss from '@astrojs/rss';
import type { APIRoute } from "astro";
import { getCollection } from 'astro:content';

export const GET = (async (context) => {
	const posts = await getCollection('blog');
	return rss({
		// stylesheet: '/rss/styles.xsl',
    title: 'Mauro’s Blog',
    description: 'Un simple blog construido con Astro y Tailwind',
    site: context.site ?? '',
    items: posts.map(({ data: { title, description, date }, slug }) => (({
			title,
			description,
			link: `/posts/${slug}`,
			pubDate: new Date(date),
    }))),
    // (optional) inject custom xml
    customData: `<language>es-AR</language>`,
	});
}) satisfies APIRoute;
