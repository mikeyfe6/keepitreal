import type { GatsbyConfig } from 'gatsby';

require('dotenv').config({
	// path: `.env.${process.env.NODE_ENV}`,
	path: `.env`,
});

const siteMetadata = {
	title: `Keep It Real`,
	slogan: `Empowerment voor Jongeren`,
	description: `‘Keep It Real’ is een sociaal-maatschappelijk project waarbij ervaringsdeskundige interactief aan de slag gaan met jongeren om levenslessen te leren.`,

	siteUrl: `https://keeptreal.nl`,
	image: `/KIR-bg-logo.png`,

	twitterUsername: `@keepitrealkir`,
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
			resolve: 'gatsby-plugin-google-tagmanager',
			options: {
				id: 'GTM-TRB3WC6M',

				// Include GTM in development.
				//
				// Defaults to false meaning GTM will only be loaded in production.
				includeInDevelopment: false,

				// datalayer to be set before GTM is loaded
				// should be an object or a function that is executed in the browser
				//
				// Defaults to null
				defaultDataLayer: { platform: 'gatsby' },

				// Specify optional GTM environment details.
				// gtmAuth: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING',
				// gtmPreview: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME',
				// dataLayerName: 'YOUR_DATA_LAYER_NAME',

				// Name of the event that is triggered
				// on every Gatsby route change.
				//
				// Defaults to gatsby-route-change
				// routeChangeEventName: 'YOUR_ROUTE_CHANGE_EVENT_NAME',
				// Defaults to false
				enableWebVitalsTracking: true,
				// Defaults to https://www.googletagmanager.com
				// selfHostedOrigin: 'YOUR_SELF_HOSTED_ORIGIN',
				// Defaults to gtm.js
				// selfHostedPath: 'YOUR_SELF_HOSTED_PATH',
			},
		},
		{
			resolve: 'gatsby-source-contentful',
			options: {
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
				spaceId: process.env.CONTENTFUL_SPACE_ID,
				host: process.env.CONTENTFUL_HOST,
			},
		},
		{
			resolve: `gatsby-plugin-canonical-urls`,
			options: {
				siteUrl: siteMetadata.siteUrl,
			},
		},
		{
			resolve: `gatsby-plugin-nprogress`,
			options: {
				// Setting a color is optional.
				color: siteMetadata.bgThemeColor,
				// Disable the loading spinner.
				showSpinner: false,
			},
		},
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sass',
		'gatsby-plugin-sitemap',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
		'gatsby-plugin-robots-txt',
		'gatsby-plugin-catch-links',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: siteMetadata.title,
				short_name: siteMetadata.title,
				description: siteMetadata.slogan,
				start_url: `/`,
				icon: 'src/images/KIR-light-icon.png',
				background_color: siteMetadata.bgWebColor,
				theme_color: siteMetadata.bgThemeColor,
				display: `standalone`,
			},
		},
		'gatsby-plugin-offline',
	],
};

export default config;
