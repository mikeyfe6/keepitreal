import type { GatsbyConfig } from 'gatsby';

require('dotenv').config({
	// path: `.env.${process.env.NODE_ENV}`,
	path: `.env`,
});

const siteMetadata = {
	title: `Keep It Real`,
	slogan: `Empowerment voor Jongeren`,
	description: ``,

	siteUrl: `https://www.yourdomain.tld`,
	image: `/images/KIR-logo.png`,

	twitterUsername: `@keepitreal`,
	facebookUrl: `#!`,
	instagramUrl: `#!`,
	linkedinUrl: `#!`,
	youtubeUrl: `#!`,

	telephone: ``,
	phoneRaw: ``,
	mobile: ``,

	email: ``,
	address: ``,
	postalCode: ``,
	city: ``,

	companyName: ``,
	kvk: ``,
	btw: ``,
	bank: ``,

	bgWebColor: `#0d0128`,
	bgThemeColor: `#662d92`,
};

const config: GatsbyConfig = {
	siteMetadata: siteMetadata,

	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins: [
		{
			resolve: 'gatsby-source-contentful',
			options: {
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
				spaceId: process.env.CONTENTFUL_SPACE_ID,
				host: process.env.CONTENTFUL_HOST,
			},
		},
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sass',
		'gatsby-plugin-sitemap',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/images/KIR-light-icon.png',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
	],
};

export default config;
