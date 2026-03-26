import rss from '@astrojs/rss';
import type { APIRoute } from "astro";
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';

const parser = new MarkdownIt();

export const GET = (async ({ site }) => {
	const posts = await getCollection('blog');
	return rss({
		// stylesheet: '/rss/styles.xsl',
		xmlns: {
			media: 'http://search.yahoo.com/mrss/',
		},
    title: 'Mauro’s Blog',
    description: 'Un simple blog construido con Astro y Tailwind',
    site: site ?? '',
    items: posts.map(({ data: { title, description, date, image }, slug, render, body }) => (({
			title,
			description,
			link: `/posts/${slug}`,
			pubDate: new Date(date),
			content: sanitizeHtml(parser.render(body), {
				allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
			}),
			customData: `
				<media:content
					type="image/${image.format === 'jpg' ? 'jpeg' : 'png'}"
					width="${image.width}"
					height="${image.height}"
					medium="image"
					url="${site + image.src}"
				/>
			`,
    }))),
    // (optional) inject custom xml
    customData: `<language>es-AR</language>`,
	});
}) satisfies APIRoute;
