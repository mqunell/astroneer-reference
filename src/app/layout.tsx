import { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
	title: 'Astroneer Reference',
	description: 'Astroneer Reference',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
	<html lang="en">
		<body>{children}</body>
	</html>
);

export default RootLayout;
