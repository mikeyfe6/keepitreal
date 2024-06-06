import React from 'react';

import Header from './header';
import Hero from './hero';
import Footer from './footer';

import ResponsiveTag from './helpers/respoTag';

import '../styles/layout.scss';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<div className='keep-it-real'>
				<Header />
				<Hero />
				<main>{children}</main>
				<Footer />
			</div>

			{process.env.NODE_ENV === 'development' && <ResponsiveTag />}
		</>
	);
};

export default Layout;
