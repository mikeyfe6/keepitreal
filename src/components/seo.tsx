import React, { ReactNode } from 'react';
import { useSiteMetadata } from '../hooks/use-site-metadata';

interface SEOProps {
	title?: string;
	description?: string;
	keywords?: string;
	pathname?: string;
	children?: ReactNode;
}

export const Seo: React.FC<SEOProps> = ({
	title,
	description,
	keywords,
	pathname,
	children,
}: SEOProps) => {
	const {
		title: siteTitle,
		description: defaultDescription,
		image,
		siteUrl,
		slogan,
		twitterUsername,
	} = useSiteMetadata();

	const seo = {
		title: title ? `${title} · ${siteTitle}` : `${siteTitle} · ${slogan}`,
		description: description ?? defaultDescription,
		image: `${siteUrl}${image}`,
		url: `${siteUrl}${pathname ?? ''}`,
		twitterUsername,
	};

	return (
		<>
			<html lang='nl' />

			{/* BASE METATAGS */}
			<title>{seo.title}</title>
			<meta name='description' content={seo.description} />
			<meta name='image' content={seo.image} />

			{keywords && <meta name='keywords' content={keywords} />}

			{/* SOCIAL MEDIA METATAGS */}

			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:title' content={seo.title} />
			<meta name='twitter:url' content={seo.url} />
			<meta name='twitter:description' content={seo.description} />
			<meta name='twitter:image' content={seo.image} />
			<meta name='twitter:creator' content={seo.twitterUsername} />

			{/* NICE! no incoming scripts & overall script! */}

			{/* ICONS */}
			<link
				rel='stylesheet'
				href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css'
				integrity='sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=='
				crossOrigin='anonymous'
				referrerPolicy='no-referrer'
			/>

			{children}
		</>
	);
};
